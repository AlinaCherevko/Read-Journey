import { store, RootState } from "../store";
import { instance, refreshCurrentUser } from "./authOperations";
//import { updatesToken } from "./authSlice";

instance.interceptors.request.use(
  function (config) {
    const state = store.getState() as RootState;
    const token = state.auth.token;
    const refreshToken = state.auth.refreshToken;
    console.log(token);
    console.log(config.url);

    if (config.url === "/users/current/refresh") {
      config.headers["Authorization"] = `Bearer ${refreshToken}`;
    } else {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      } else {
        config.headers["Authorization"] = "";
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401 && !error.config._retry) {
      error.config._retry = true;

      try {
        store.dispatch(refreshCurrentUser());
        const token = store.getState().auth.token;
        error.config.headers["Authorization"] = `Bearer ${token}`;

        return instance(error.config);
      } catch (err) {
        console.log(err);
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response.status === 401 && !error.config._retry) {
//       error.config._retry = true;

//       try {
//         const refreshToken = store.getState().auth.refreshToken;
//         console.log(refreshToken);
//         console.log(store.getState().auth.token);

//         const { data } = await instance.get("/users/current/refresh", {
//           headers: {
//             Authorization: `Bearer ${refreshToken}`,
//           },
//         });
//         console.log(data);

//         store.dispatch(
//           updatesToken({ token: data.token, refreshToken: data.refreshToken })
//         );

//         error.config.headers["Authorization"] = `Bearer ${data.token}`;

//         return instance(error.config);
//       } catch (err) {
//         console.log(err);
//         return Promise.reject(err);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

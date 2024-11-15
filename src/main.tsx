import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UIProvider } from "./components/ui/provider";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import "./i18n.ts";
import "./redux/auth/authConfig.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <UIProvider>
          <App />
        </UIProvider>
        <ToastContainer />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

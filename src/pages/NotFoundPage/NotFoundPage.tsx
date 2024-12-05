import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <section className="pt-3 desktop:pt-4 pb-5">
      <div className="wrapper">
        <h1>404. Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Back to Home</a>
      </div>
    </section>
  );
};
export default NotFoundPage;

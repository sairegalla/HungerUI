import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>This is error page</h1>
      <h4>{error.status}</h4>
      <h4>{error.statusText}</h4>
    </>
  );
};

export default ErrorElement;

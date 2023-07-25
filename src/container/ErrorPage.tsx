import { useRouteError } from "react-router-dom";
import Text from "@component/Atom/Text";

interface IError {
    data: string;
    error: Error;
    internal: boolean;
    status: number;
    statusText: string;
}

function ErrorPage() {
  const e = useRouteError() as IError;

  return (
    <div>
        <h1>Oops!</h1>
        <Text type="Body" text="Sorry, an unexpected error has occurred." />
        {e.error ? (
          <i>{e.statusText || e.error.message}</i>
        ) : null}
    </div>
  );
}

export default ErrorPage;
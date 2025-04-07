import { useRouteError } from 'react-router-dom';

function ErrorComponent() {
  const error: any = useRouteError();

  if (error.status === 404) {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    );
  }

  if (error.status === 500) {
    return (
      <div>
        <h1>Internal Server Error</h1>
        <p>Something went wrong on the server.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>An unexpected error occurred.</p>
      <p>{error.message || error.statusText}</p>
    </div>
  );
}

export default ErrorComponent;
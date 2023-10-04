import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err); // Log the error for debugging purposes

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-xl mt-2">Something went wrong.</p>
      <div className="mt-4">
        <h3 className="text-lg text-gray-700">
          Error {err.status}: {err.statusText}
        </h3>
      </div>
    </div>
  );
};

export default Error;

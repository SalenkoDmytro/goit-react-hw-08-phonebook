import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      Page not found. Go back to <Link to="/">Home</Link>
    </>
  );
};

export default ErrorPage;

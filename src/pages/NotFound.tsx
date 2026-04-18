import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 route visited:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Sanjay N</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Return to Sanjay N's portfolio to explore projects, skills, and achievements."
        />
        <meta property="og:title" content="404 - Page Not Found | Sanjay N" />
        <meta property="og:description" content="The page you are looking for does not exist. Return to Sanjay N's portfolio." />
        <meta property="og:url" content="https://sanjayn.me/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold">404</h2>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
    </>
  );
};

export default NotFound;

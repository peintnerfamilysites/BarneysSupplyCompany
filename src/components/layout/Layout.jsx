import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Snap window instantly to top on path change
    window.scrollTo(0, 0);
  }, [pathname]);

  // Outlet renders whatever child route is currently active
  return <Outlet />;
}

export default Layout;

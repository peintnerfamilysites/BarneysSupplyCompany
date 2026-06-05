/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import { SITE } from "../config/site";

const Home = lazy(() => import("../pages/home/Home.jsx"));
const About = lazy(() => import("../pages/about/About.jsx"));
const Contact = lazy(() => import("../pages/contact/Contact.jsx"));
const Services = lazy(() => import("../pages/services/Services.jsx"));
const Insurance = lazy(() => import("../pages/insurance/Insurance.jsx"));
const TermsOfUse = lazy(() => import("../pages/termsofuse/TermsOfUse.jsx"));
const Error = lazy(() => import("../pages/error/Error.jsx"));

function PageLoader({ children }) {
  return (
    <Suspense
      fallback={
        <div className="grid min-h-screen place-items-center bg-black text-center text-sm font-black uppercase tracking-[0.24em] text-amber-200">
          Loading Barneys Supply
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

const routes = [
  {
    path: "/",
    element: (
      <PageLoader>
        <Home />
      </PageLoader>
    ),
  },
  {
    path: "/about",
    element: (
      <PageLoader>
        <About />
      </PageLoader>
    ),
  },
  {
    path: "/contact",
    element: (
      <PageLoader>
        <Contact />
      </PageLoader>
    ),
  },
  {
    path: "/services",
    element: (
      <PageLoader>
        <Services />
      </PageLoader>
    ),
  },
  {
    path: "/insurance",
    element: (
      <PageLoader>
        <Insurance />
      </PageLoader>
    ),
  },
  {
    path: "/terms",
    element: (
      <PageLoader>
        <TermsOfUse />
      </PageLoader>
    ),
  },
  {
    path: "*",
    element: (
      <PageLoader>
        <Error />
      </PageLoader>
    ),
  },
];

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      errorElement: (
        <PageLoader>
          <Error />
        </PageLoader>
      ),
      children: routes,
    },
  ],
  SITE.basePath ? { basename: SITE.basePath } : undefined,
);

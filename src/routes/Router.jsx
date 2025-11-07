import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Detect if we're on Vercel (production) or local
const repoName =
  import.meta.env.VITE_REPO_NAME && import.meta.env.VITE_REPO_NAME.trim() !== ""
    ? `/${import.meta.env.VITE_REPO_NAME}`
    : "/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
  { basename: repoName }
);

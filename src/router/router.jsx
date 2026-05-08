import { createBrowserRouter } from "react-router";
import Root from "../mainLayout/Root";
import HomePage from "./../pages/homePage/HomePage";
import FriendDetails from "../component/ui/friendDetails/FriendDetails";
import TimelinePage from "../pages/timelinePage/TimelinePage";
import StatsPage from "../pages/statsPage/StatsPage";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/details/:id",
        loader: async ({ params }) => {
          const res = await fetch(`/friend.json`);
          const data = await res.json();
          return data.find((f) => f.id == params.id);
        },
        Component: FriendDetails,
      },
      {
        path: "/timeline",
        Component: TimelinePage,
      },
      {
        path: "/stats",
        Component: StatsPage,
      },
    ],
  },
]);
export default router;

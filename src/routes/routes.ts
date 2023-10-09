import { Home } from "../views";
import { RootRoute, Route, Router as TanstackRouter } from "@tanstack/router";
import BaseLayout from "./BaseLayout";

const rootRoute = new RootRoute({
  component: BaseLayout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = new TanstackRouter({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

export default router;

export type Route = "/dashboard" | "/sign-in";
export type Session = "loading" | "signed-out" | "signed-in";

export function guardRoute(route: Route, session: Session): Route | null {
  if (session === "signed-out" && route === "/dashboard") return "/sign-in";
  if (session === "signed-in" && route === "/sign-in") return "/dashboard";
  return null;
}

export function applyRouteGuard(
  router: { replace(destination: Route): void },
  route: Route,
  session: Session,
): void {
  const destination = guardRoute(route, session);
  if (destination !== null) router.replace(destination);
}

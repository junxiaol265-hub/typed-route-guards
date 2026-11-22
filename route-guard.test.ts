import assert from "node:assert/strict";
import { test } from "node:test";
import { applyRouteGuard, type Route, type Session } from "./route-guard.ts";

const cases: [Route, Session, Route | null][] = [
  ["/dashboard", "signed-out", "/sign-in"],
  ["/sign-in", "signed-in", "/dashboard"],
  ["/dashboard", "signed-in", null],
  ["/sign-in", "signed-out", null],
  ["/dashboard", "loading", null],
  ["/sign-in", "loading", null],
];

for (const [route, session, target] of cases) {
  test(`${session} on ${route} ${target ? `replaces with ${target}` : "does not navigate"}`, () => {
    const calls: [string, Route][] = [];
    const router = {
      replace(destination: Route) { calls.push(["replace", destination]); },
      push(destination: Route) { calls.push(["push", destination]); },
    };

    applyRouteGuard(router, route, session);
    assert.deepEqual(calls, target ? [["replace", target]] : []);
  });
}

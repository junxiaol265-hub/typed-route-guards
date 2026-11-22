# Typed Route Guards

A small TypeScript example that decides whether to redirect between a dashboard and a sign-in page. The router adapter uses `replace` so its redirects do not add history entries. Six tests exercise both routes across loading, signed-out, and signed-in states.

## Run the tests

Use Node.js 24 or later. No dependencies are required.

```sh
node --test route-guard.test.ts
```

## Files

- [Route guard and adapter](route-guard.ts)
- [Regression tests](route-guard.test.ts)

The example covers client-side navigation. Real applications must enforce authorization on the server.

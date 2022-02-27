interface Route {
  name: string;
  path: string;
}

interface Routes extends Array<Route> {}

export { Routes };

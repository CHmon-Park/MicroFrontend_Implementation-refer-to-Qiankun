const BASE = window.__POWERED_BY_QIANKUN__ ? '/blue' : ''

function dynamicImport(path) {
  return import(`~/views/${path}/index.vue`).then((m) => m.default || m)
}

const resolveRoute = (route) => ({
  ...route,
  component: () => dynamicImport(route.component),
})

function dynamicImportRoute(routes) {
  return routes.map((route) => ({
    ...resolveRoute(route),
    children: route.children ? route.children.map(resolveRoute) : [],
  }))
}

let routes = [
  {
    path: `${BASE}/blue_1`,
    name: 'Blue_1',
    component: 'blue_1',
    alias: `${BASE}`,
  },
  {
    path: `${BASE}/blue_2`,
    name: 'Blue_2',
    component: 'blue_2',
  },
  {
    path: `${BASE}/home`,
    name: 'Home',
    component: 'home',
  },
]

export default dynamicImportRoute(routes)

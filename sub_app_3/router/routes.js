const BASE = window.__POWERED_BY_QIANKUN__ ? '/green' : ''

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
    path: `${BASE}/green_1`,
    name: 'Green_1',
    component: 'green_1',
    alias: `${BASE}`,
  },
  {
    path: `${BASE}/green_2`,
    name: 'Green_2',
    component: 'green_2',
  },
  {
    path: `${BASE}/home`,
    name: 'Home',
    component: 'home',
  },
]

export default dynamicImportRoute(routes)

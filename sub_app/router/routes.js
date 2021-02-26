const BASE = window.__POWERED_BY_QIANKUN__ ? '/red' : ''

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
    path: `${BASE}/home`,
    name: 'Home',
    component: 'home',
  },
  {
    path: `${BASE}/red_1`,
    name: 'Red_1',
    component: 'red_1',
    alias: `${BASE}`,
  },
  {
    path: `${BASE}/red_2`,
    name: 'Red_2',
    component: 'red_2',
  },
]

export default dynamicImportRoute(routes)

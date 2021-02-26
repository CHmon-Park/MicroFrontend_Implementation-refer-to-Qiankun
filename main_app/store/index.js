import { Message } from 'element-ui'
import { initGlobalState } from 'qiankun'

const TYPES = {
  INIT_APPS: 'init_apps',
}

export const state = () => ({
  apps: [],
  name: 'femessage',
  sdk: null,
})

export const mutations = {
  [TYPES.INIT_APPS](state, apps) {
    // 전역 변수 초기화
    const actions = initGlobalState({
      name: state.name,
    })

    // 프로젝트에 따라 추가 및 삭제할 수있는 상위-하위 애플리케이션 통신에 sdk 메서드를 사용합니다.
    const sdk = {
      globalState: actions,
      toast: (...args) => {
        Message(...args)
      },
      go2404: () => {
        this.$router.push('404')
      },
      name: state.name,
    }

    // 앱 목록 처리
    apps = apps.map((item) => ({
      ...item,
      container: '#default_subapp', // default.vue에서 subapp들이 들어갈 div의 id를 명시한 것.
      props: {
        sdk,
      },
    }))

    // 라우팅 테이블 처리
    const routes = apps.map((item, i) => ({
      path: `${item.activeRule}(.*)`,
      name: `${item.name}-i`,
      component: () => import('@/pages/index.vue').then((m) => m.default || m),
    }))

    // 라우팅을 동적으로 늘리십시오. 여기에서 404 페이지는 페이지에 직접 쓸 수 없습니다.
    // 그렇지 않으면 일치 할 때 주문에 따라 일치하고 직접 반환되므로 나중에 추가 할 동적 경로와 일치하지 않습니다.
    this.$router.addRoutes(
      [].concat(...routes, {
        path: `*`,
        name: `404`,
        component: () => import('@/pages/404.vue').then((m) => m.default || m),
      })
    )

    state.apps = apps
    state.sdk = sdk
  },
}

export const actions = {
  async getMenus({ commit }) {
    const { payload } = await getMenus()

    commit(TYPES.INIT_APPS, payload)
  },
}

function getMenus() {
  return {
    code: 0,
    payload: [
      {
        name: 'Red-App',
        activeRule: '/red',
        entry: 'http://localhost:7102/',
      },
      {
        name: 'Blue-App',
        activeRule: '/blue',
        entry: 'http://localhost:7103/',
      },
      {
        name: 'Green-App',
        activeRule: '/green',
        entry: 'http://localhost:7104/',
      },
    ],
    message: 'success',
  }
}

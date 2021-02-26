<template></template>

<script>
import { mapState } from 'vuex'
import {
  MicroAppStateActions,
  registerMicroApps,
  start,
  setDefaultMountApp,
} from 'qiankun'
export default {
  mounted() {
    this.init()
  },
  computed: {
    ...mapState(['apps']),
  },
  methods: {
    async init() {
      // 모든 하위 응용 프로그램 등록
      registerMicroApps(this.apps)

      // 기본 활성 하위 응용 프로그램 설정
      // setDefaultMountApp(this.apps[0].activeRule)

      // 시작
      start()
    },
  },
}
</script>

<style></style>

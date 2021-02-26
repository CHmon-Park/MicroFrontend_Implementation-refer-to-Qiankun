<template>
  <div id="container" class="h-screen">
    <div class="text-center flex bg-pink-200" style="height: 25vh">
      <nuxt-link to="/" class="my-auto mx-auto text-6xl font-bold"
        >Main Page</nuxt-link
      >
    </div>
    <div class="flex" style="height: 25vh">
      <div
        v-for="app in apps"
        :key="app.name"
        class="w-1/3 flex opacity-50"
        :id="app.name"
      >
        <nuxt-link
          :to="app.activeRule"
          class="my-auto mx-auto text-4xl text-white hover:text-black"
          >{{ app.name }}</nuxt-link
        >
      </div>
    </div>

    <div id="default_subapp" class=""></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { registerMicroApps, start } from 'qiankun'
export default {
  data() {
    return {
      value: '',
    }
  },
  computed: {
    ...mapState(['apps', 'sdk']),
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      // 모든 하위 응용 프로그램 등록
      await registerMicroApps(this.apps)

      // 시작
      await start()
    },

    handleChange() {
      this.sdk.globalState.setGlobalState({
        name: this.value,
      })
    },
    printSelectStr() {},
  },
}
</script>

<style>
#Red-App {
  background-color: red;
}
#Blue-App {
  background-color: blue;
}
#Green-App {
  background-color: green;
}
#container {
}
#red_1,
#red_2,
#blue_1,
#blue_2,
#green_1,
#green_2 {
  height: 50vh;
}
</style>

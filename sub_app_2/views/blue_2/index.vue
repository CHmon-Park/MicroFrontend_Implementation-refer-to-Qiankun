<template>
  <div id="blue_2" class="bg-blue-600 h-screen">
    <div
      class="flex flex-col mx-auto my-auto border-4 border-white rounded-lg w-1/3 text-center"
    >
      <div class="text-center text-3xl my-5 font-bold">Color Blue 2 Page</div>
      <button
        class="bg-white rounded-sm px-2 hover:bg-black hover:bg-opacity-50 hover:text-white font-bold"
        @click="go2blue1"
      >
        Blue 1 페이지 보기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go2blue1() {
      this.$router.push({ name: 'Blue_1' })
    },
    toast() {
      this.$sdk &&
        this.$sdk.toast({
          message: 'this color is...',
          type: 'success',
        })
    },
  },
}
</script>

<style></style>

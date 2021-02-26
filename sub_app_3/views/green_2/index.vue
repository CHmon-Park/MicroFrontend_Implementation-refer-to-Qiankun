<template>
  <div id="green_2" class="bg-green-600 h-screen">
    <div
      class="flex flex-col mx-auto my-auto border-4 border-white rounded-lg w-1/3 text-center"
    >
      <div class="text-center text-3xl my-5 font-bold">Color Green 2 Page</div>
      <button
        class="bg-white rounded-sm px-2 hover:bg-black hover:bg-opacity-50 hover:text-white font-bold"
        @click="go2green1"
      >
        Green 1 페이지 보기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go2green1() {
      this.$router.push({ name: 'Green_1' })
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

<template>
  <div class="page-404">
    page 404
    <button @click="$router.replace('/')">홈페이지로 돌아가기</button>
  </div>
</template>

<script>
export default {
  layout: 'empty',
}
</script>

<style>
.page-404 {
  text-align: center;
}
</style>

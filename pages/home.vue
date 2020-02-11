<template>
  <el-container>
    <el-header></el-header>
    <el-main class="page">
      <Monaco></Monaco>
    </el-main>
  </el-container>
</template>

<script>
import Monaco from '../components/Monaco.vue'
import { Container, Header, Main } from 'element-ui'

export default {
  components: {
    Monaco,
    [Container.name]: Container,
    [Header.name]: Header,
    [Main.name]: Main
  },
  data () {
    return {
      lang: 'python',
      theme: 'vs-dark'
    };
  }
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
.page {
  display: flex;
  justify-content: center;
}
</style>
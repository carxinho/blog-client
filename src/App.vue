<template>
  <div id="app">
    <Header class="header" id="header"></Header>
    <main class="main" id="main">
      <router-view/>
    </main>
    <Footer class="footer" id="footer"></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import "./assets/common.less";

#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:  "header header header"
                        ".       main   ."
                        "footer footer footer";
  .header{
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }

  .main{
    grid-area: main;
  }

  .footer{
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }
}
</style>

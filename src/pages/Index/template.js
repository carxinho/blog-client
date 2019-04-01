export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      onClick1(){
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      }
    }
  }
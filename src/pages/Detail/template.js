import blog from '@/api/blog.js'
import marked from 'marked'

export default {
    data () {
      return {
        user:{},
        title:'',
        content:'',
        createdAt:''
      }
    },
    created(){
      this.blogId = this.$route.params.blogId
      blog.getDetail({blogId:this.blogId}).then(res =>{
        this.user = res.data.user
        this.title = res.data.title
        this.createdAt = res.data.createdAt
        this.content = res.data.content
      })
    },
    computed:{
      markdown() {
        return marked(this.content)
      }
    }
  }
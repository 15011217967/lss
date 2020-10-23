<template>
  <div class="home">
   parent
   <Button @click="ll = ll+1">按钮</Button>
   <child />
   <child2 />
  </div>
</template>

<script>
import child from './child';
import child2 from './child2';
// @ is an alias to /src
export default{
  provide() {
    return {
      that: this
    }
  },
  components:{
    child,
    child2
  },
  computed: {
    name () {
      return this.$store.state.name; 
    },
    age () {
      return  this.$store.state.age
    }                  
  }, 
  data () {
    return {
      isChildFlow: false,
      ll:0
    }
  },
  created() {
    this.http();
  },
  methods:{                                   
    http() {
      this.$axios.post({
        url:'/serve/list',
        data:{
          a:1,
          b:2
        }
      }).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

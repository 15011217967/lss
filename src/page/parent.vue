<template>
  <div class="home">
   parent
   <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
export default{
  components:{
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

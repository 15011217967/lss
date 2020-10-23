<template>
  <div class="ff">
   child2
   {{ child1 }}
   <Button @click="close">清除</Button>
  </div>
</template>

<script>
// @ is an alias to /src
export default{
  name:'child',
  props:{
 
  },
  data () {
    return {
      child1:''
    }
  },
  created() {
    this.$bus.$on('onChangeChild', (res) => {
      this.child1 = res;
    })
  },
  methods:{
    close() {
      this.child1 = '';
    }
  }
}
</script>

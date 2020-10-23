<template>
  <div class="ff">
   child
   {{ this.that.$data.ll }}
   <Button @click="fn">按钮</Button>
  </div>
</template>

<script>
// @ is an alias to /src
export default{
  inject:['that'],
  name:'child',
  props:{
 
  },
  data () {
    return {
      child1: 'child1'
    }
  },
  created() {
  },
   mounted(){
    console.log(this.that)
    },
  methods:{
    fn() {
      this.$bus.$emit('onChangeChild', this.child1);
    },
    close() {
      this.$emit('update:value', false)
    }
  }
}
</script>

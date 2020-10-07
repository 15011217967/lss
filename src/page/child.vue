<template>
  <div class="ff">
   child
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
      
    }
  },
  created() {
  },
  methods:{
    close() {
      this.$emit('update:value', false)
    }
  }
}
</script>

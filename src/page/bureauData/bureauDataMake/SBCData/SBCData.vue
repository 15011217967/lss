<template>
  <div class="about" @click="close">
    IMS SBC无线小区
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:Boolean,
      default: false
    }
  },
  data() {
    return {
      loginType:false
    }
  },
   activated() {
    console.log(1)
  },
  deactivated() {
    console.log(2)
  },
  methods:{
    close(){
      this.$emit('update:value', false);
      // this.$parent.value = false;
    },
    fn(){
      console.log(1)
    }
  }
}
</script>
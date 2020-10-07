<template>
  <div class="about">
    about
  </div>
</template>

<script>
export default {
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
    fn(){
      console.log(1)
    }
  }
}
</script>
<template>
  <div class="about">
    kk
  </div>
</template>

<script>

export default {
  components:{
  },
  data() {
    return {
      showDiv : false,
      message:'',
      value:false,
      loginType:false
    }
  },
   activated() {
    console.log('被激活')
  },
  deactivated() {
    console.log('停用')
  },
  methods:{
    getText:function(){
      this.showDiv = true;
      this.$nextTick(() => {
        var text = document.getElementById('div').innerHTML;
        console.log(text);
      })
     
    },
    fn(ev){
      console.log(ev)
      this.$router.push({
        path:'/about',
        query:{
          id:1123123123123
        }
      })
    }
  }
}
</script>
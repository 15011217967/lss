<template>
  <div class="login">
    <Form :label-width="70" :rules="rules" :model="formData" class="form">
      <FormItem label="账号：" prop="f_accountname">
        <Input type="text" clearable v-model="formData.f_accountname" />  
      </FormItem>
      <FormItem label="密码：" prop="f_password">
        <Input type="password" clearable v-model="formData.f_password" />  
      </FormItem>
      <FormItem>
        <Button type="error" @click="submit">登录</Button>
      </FormItem>  
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData:{
        f_accountname:'',
        f_password:''
      },
      rules:{
        f_accountname:[{ required: true, message:'请输入账号', trigger:'change' }],
        f_password:[{ required: true, message:'请输入密码', trigger:'change' }],
      }
    }
  },
  created() {
  },
  methods:{
    // 登录
    submit() {
      const data = {
        f_accountname:this.$util.Encrypt(this.formData.f_accountname),
        f_password:this.$util.Encrypt(this.formData.f_password),
      }

      this.$axios.post('/userManager/passageway/login', data).then(res=>{
        window.localStorage.setItem('token', res.data.data.token);
        this.$router.replace('/index');
        
      })
    },   
  }
}
</script>
<style scoped>
  .form{
    width:350px;
    margin: 200px auto;
    padding: 20px;
    box-shadow: 0 2px 8px 8px #ccc;
    border-radius: 8px;
  }
</style>
<template>
  <div class="home">
     <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78">
          <Menu :theme="theme" style="height:100vh;" :accordion="true" width="auto">
            <Submenu 
              :name="index"
              :key="index"
              v-for="(item, index) in menuList">
              <template  slot="title"><Icon type="ios-paper" />{{ item.name }}</template>
              <MenuItem 
                :name="index+ '-' +indexs"
                :key="indexs"
                :to="items.path"
                v-for="(items, indexs) in item.children">
                <span >{{ items.name }}</span>
                </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout>
          <Header :style="{padding: 0}" class="layout-header-bar">
            <Icon @click.native="collapsedSider" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
            <Button style="float:right;margin: 20px 20px 0 0;" @click="exit">退出</Button>
          </Header>
          <Breadcrumb :style="{margin: '20px 0 0 20px'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <div style="margin:20px;background:#fff;">
            <router-view />
          </div>
        </Layout>
      </Layout>
  </div>
</template>

<script>
export default{
  components:{
  },
  data () {
    return {
      theme:'light',
      value:false,
      res:[],
    }
  },
  created() {
    console.log(this.res)
    this.$axios.get('/userManager/queryMenusList/219').then(ress => {
      this.res = ress.data;
      const routeHome = {
        path:"/bureaudata",
        name: "首页",
        phyPath: "page/home.vue",
        type: 3,
      }
      if (routeHome.phyPath) {
        // webpack动态引用文件的固定写法
        routeHome.component = (resolve) => {
          require.ensure([], (require) => {
            resolve(require.context('@', true, /\.vue$/)(`./${routeHome.phyPath}`));
          });
        };
      }
      routeHome.children = [];
      ress.data.data.forEach((item) => {
        item.children.forEach((items) => {
          items.component = (resolve) => {
            require.ensure([], (require) => {
              resolve(require.context('@', true, /\.vue$/)(`./${items.phyPath}`));
            });
          };
          routeHome.children.push(items);
        })
      })
      this.$router.addRoutes([routeHome]); 
    })
  },
  computed:{
    menuList() {
      return this.res.data;
    }
  },
  methods:{
    exit() {
      localStorage.clear();
      this.$router.push('/login');
      this.$Message.error('退出成功!');
    },
    collapsedSider () {
      this.$refs.side1.toggleCollapse();
    },
    push(params){
      // this.$router.push('/about')
      this.$router.replace({
        path:'/about',
        // name:'about',
        query:{
          a:params
        }
      })
    },
    back() {
      // this.$router.go(-1);
      this.$router.back();
    },
    fn() {
      this.$router.replace({
        name:'about'
      })
    },
    parentMethod(){
      console.log(1)
    },
    handleChild(ev) {
      console.log(ev)
    },
    closeChild(val) {
      this.value = val;
    }
  }
}
</script>
<style scoped>
  .layout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
  }
  .layout-header-bar{
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
      width: 90%;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      margin: 15px auto;
  }
  .menu-icon{
      transition: all .3s;
  }
  .rotate-icon{
      transform: rotate(-90deg);
  }
  .menu-item span{
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
  }
  .menu-item i{
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
  }
  .collapsed-menu span{
      width: 0px;
      transition: width .2s ease;
  }
  .collapsed-menu i{
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
  }
</style>
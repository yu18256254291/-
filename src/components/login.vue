<template>
  <div class="wrapper">
    <div class="login_box">
      <div class="login-box-bg">
        <div class="login-box-bg-top">
          恒链科技后台管理
        </div>
        <div style="border:1px solid #f1f1f1"></div>
        <div class="login-box-bg-body">
          <div class="input-login">
            <div class="input-login-left">账号:</div>
            <div class="input-login-right"><input :class="{'user':usernone}" v-model="user" placeholder="请输入账号" type="text" class="input"/></div>
          </div>
          <div class="input-login">
            <div class="input-login-left">密码</div>
            <div class="input-login-right"><input :class="{'user':pwdnone}" v-model="pwd" placeholder="请输入密码" type="password" class="input"/></div>
          </div>
        </div>
        <div class="login-box-bg-down">
          <div class="input-code">
            <input class="code-number" placeholder="请输入验证码" type="number"/>
          </div>
          <div class="code">
            <img alt="图片验证码" class="code-img" />
          </div>
        </div>
        <div style="border:1px solid #f1f1f1"></div>
        <div class="get-in">
          <span @click="get_in" class="get-in-btn">提交</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let that;
export default {
  components:{},
  name:'login',
  props:{},
  data(){
    return {
      user:'',
      usernone:false,
      pwd:'',
      pwdnone:false,

      isopen:'',//判断是否需要展开侧边栏
    }
  },
  watch:{
    // user(){
    //   console.log( that.user)
    // }
  },
  computed:{},
  methods:{
    get_in(){
      if(that.user){
        if(that.pwd){
          that.pwdnone=false;
          sessionStorage.setItem("user",that.user);
          that.$router.push({
            path:'/components/adminpages/index'
          })
        }else{
          that.$message({
          message: '请填写用户密码',
          type: 'warning'
        });
        that.pwdnone=true;
        that.usernone=false
        }
      }else{
        that.$message({
          message: '请填写用户名',
          type: 'warning'
        });
        that.usernone=true;
      }
    }
  },
  created(){},
  mounted(){
      that = this;
      
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/login.scss';
</style>
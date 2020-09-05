<template>
  <div class="wrapper_h">
    <div style="flex:2">
      <span v-if="isshowasidefalse" @click="changeisopen"  class="isopen">
      折叠
    </span>
    <span v-if="!isshowasidefalse" @click="changeisopen"  class="isopen">
      展开
    </span>
    </div>
    <div style="flex:6"></div>
    <div class="logout">
      <span @click="get_logout()" class="logout_btn">
        退出
      </span>
    </div>
  </div>
</template>

<script>
let that;
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{
    isshowasidefalse(){
      return this.$store.state.isopen
    }
  },
  methods:{
    changeisopen(){
      if(that.$store.state.isopen){
        that.$store.commit({
          type:'change_isopen',
          isopen:false
      })
      that.$store.commit({
          type:'change_isshowaside',
          isshowaside:false
      })
      }else{
        that.$store.commit({
          type:'change_isopen',
          isopen:true
      })
      that.$store.commit({
          type:'change_isshowaside',
          isshowaside:true
      })
      }
    },
    //退出账号
    get_logout(){
      this.$confirm('此操作将退出账号, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         that.$router.push({
            path:'/'
          })
          sessionStorage.clear();
        }).catch(() => {
                  
        });
    }
  },
  created(){},
  mounted(){
    that = this;
    
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/commen/header.scss'
</style>
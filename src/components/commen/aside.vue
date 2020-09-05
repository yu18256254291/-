<template>
  <div  @mouseenter="false_showaside()" @mouseleave="false_closeaside()" :class="[carousel?'wrapper_a':'wrapper_a_false']">
    <div class="aside_header_title">
      <i class="admin_logo"></i>
      <div :class="[carousel?'admin_word_a':'admin_word_false']">
        <span :class="[carousel?'span_word_a':'span_word_false']">恒链后台管理</span>
      </div>
    </div>
    <div class="aside_header_title">
      <i class="admin_logo"></i>
      <div :class="[carousel?'admin_word_a':'admin_word_false']">
        <span :class="[carousel?'span_word_a':'span_word_false']">小余测试号</span>
      </div>
    </div>

    <div v-for="(i1,index1) in list" :key="index1"  class="aside_header_item">
      
      <div @click="getThisAside(i1,index1)" @mouseenter="changeActive(index1)" @mouseleave="removeActive(index1)" :class="[{'test':index1===basicindex},{'op':needsop===index1}]" class="aside_header_item_up">
        <i class="admin_item_logo"></i>
       <div :class="[carousel?'admin_word_a':'admin_word_false']">
        <span :class="[carousel?'span_word_a':'span_word_false']">{{i1.name}}</span>
       </div>
       <i v-if="i1.chrildList" :class="[showaside===index1?'admin_item_down':'admin_item_left']"></i>
      </div>
      <collapse>
        <div v-if="showaside===index1" >
        <div v-for="(i2,index2) in i1.chrildList"   :key="index2" >
          <div @click="choosechild(index2,index1,i2)" @mouseenter="choosechildenter(index2)" @mouseleave="choosechildlever(index2)" :class="[{'aside_header_item_conetnt_hover':index2===choosechildindex},{'childbg':index2===childbasicindex && index1 === childonlyindex}]" class="aside_header_item_conetnt">
        <i :class="[index2===childbasicindex && index1 === childonlyindex?'admin_item_content_logo_choose':'admin_item_content_logo']"></i>
        <div :class="[carousel?'admin_word_a':'admin_word_false']">
          <span :style="{'color':(index2===childbasicindex && index1 === childonlyindex?'#000':'#f5f5f5')}" :class="[carousel?'span_word_a':'span_word_false']">{{i2.chrildName}}</span>
       </div>
       <i v-if="i2.inChild" :class="[showinchild === index2?'admin_item_down_black':'admin_item_left_black']"></i>
       </div>

       <collapse>
        <div v-if="showinchild === index2" >
        <div v-for="(i3,index3) in i2.inChild"   :key="index3" style="height: 40px;line-height: 40px;transition: 1s;padding:1px 0;margin-bottom:10px">
          <div @click="inchoosechild(index3,index2,index1,i3)" @mouseenter="inchoosechildenter(index3)" @mouseleave="inchoosechildlever(index3)" :class="[{'aside_header_item_conetnt_child_hover':index3===inchoosechildindex},{'childbg':index3===inchildbasicindex && index2 === inchildonlyindex && index1 === infirstIndex}]" class="aside_header_item_conetnt_child">
        <i :class="[index3===inchildbasicindex && index2 === inchildonlyindex && index1 === infirstIndex?'admin_item_content_logo_choose':'admin_item_content_logo']"></i>
        <div :class="[carousel?'admin_word_a':'admin_word_false']">
          <span :style="{'color':(index3===inchildbasicindex && index2 === childbasicindex && index1 === infirstIndex?'#000':'#f5f5f5')}" :class="[carousel?'span_word_a':'span_word_false']">{{i3.inChildName}}</span>
       </div>
       </div>
      </div>
      </div>
      </collapse>
      </div>
       
      </div>
      </collapse>
    </div>

  </div>
</template>

<script>
let that

import collapse from "../../utils/col.js";
export default {
  components:{
    collapse,
  },
  props: ["message"],
  data(){
    return {
      isopen:'',
      showaside:false,
      showinchild:false,
      basicindex:0,
      childbasicindex:-1,
      choosechildindex:-1,
      childonlyindex:-1,
      inchildbasicindex:-1,
      inchoosechildindex:-1,
      inchildonlyindex:-1,
      infirstIndex:-1,
      needsop:-1,
      false_isshow:false,
      list: [       {name: '系统管理', chrildList:[
                      {chrildName:'主页',url:'fuck1'},
                      {chrildName:'服务器',url:'fuck2'},
                      {chrildName:'组件管理',url:'fuck3'},
                      {chrildName:'模板管理',url:'fuck4'},
                    ]
                    },{
                        name: '网页测试', chrildList:[
                      {chrildName:'Linux管理',inChild:[
                        {inChildName:'Linux监控',url:'fuck5'},
                        {inChildName:'Linux管理+监控',url:'fuck6'},
                        {inChildName:'Linux管理云监控',url:'fuck7'}
                      ]},
                      {chrildName:'网页预览效果',url:'fuck8'},
                      {chrildName:'网页预览视觉',url:'fuck9'},
                      {chrildName:'网页预览特效',url:'fuck10'},
                    ]
                        
                    }, {
                        name: '今日详情', 
                        chrildList:[
                      {chrildName:'网页预览数据',url:'fuck11'},
                    ]
                    }, {
                        name: '数据总览', url:'fuck12',
                        
                    }, {
                        name: '组件', chrildList:[
                      {chrildName:'电脑管理',inChild:[
                        {inChildName:'Linux管理监控平台',url:'fuck13'}
                      ]},
                      {chrildName:'电脑测试',url:'fuck14'},
                      
                    ]
                    }],
    }
  },
  watch:{
    
  },
  computed:{
    carousel(){
        return this.$store.state.isopen;
    }
  },
  methods:{
    

    //外层点击
    getThisAside(i1,index1){
      that.basicindex = index1;
      that.needsop=false;
      that.showinchild=false;
      // that.childbasicindex=-1;
      
      if(i1.chrildList){
        if(that.showaside === index1){
          that.showaside =false
        }else{
          that.showaside = index1;
        }
      }else if(!i1.chrildList){
        that.showaside=false;
        this.$emit('geturl',[i1,index1])
      }
      
    },
    //外面鼠标划入
    changeActive(index1){
      
      if(that.basicindex != index1){
        that.needsop=index1;
      }else if(that.basicindex === index1){
        that.name=false;
      }
  },
  //外面鼠标离开
  removeActive(){
    that.needsop=false
  },
  //内层点击
  choosechild(index2,index1,i2){
    
    if(i2.inChild){
      if(that.showinchild === index2){
        that.choosechildindex = -1;
    that.childbasicindex = index2;
    that.childonlyindex = index1;
    // that.sendMsg(i2,index1,index2)
          that.showinchild =false
        }else{
          that.choosechildindex = -1;
    that.childbasicindex = index2;
    that.childonlyindex = index1;
    // that.sendMsg(i2,index1,index2)
          that.showinchild = index2;
        }
    }else{
      // that.inchildonlyindex = -1
      // that.inchildbasicindex = -1,
      // that.inchoosechildindex = -1,
      // that.inchildonlyindex = -1,
      that.infirstIndex = -1,
       that.showinchild =false
      that.choosechildindex = -1;
    that.childbasicindex = index2;
    that.childonlyindex = index1;
    that.sendMsg(i2,index1,index2)
    }
    
    
  },
  //3层点击
  inchoosechild(index3,index2,index1,i3){
      that.inchoosechildindex = -1;
    that.inchildbasicindex = index3;
    that.inchildonlyindex = index2;
    that.infirstIndex = index1
    this.$emit('geturl',[i3,index1,index2,index3])
  },
  //3层鼠标划入
  inchoosechildenter(index3){
    that.inchoosechildindex = index3;
  },
  //3层鼠标离开
  inchoosechildlever(index3){
    that.inchoosechildindex = -1;
  },
  sendMsg(i2,index1,index2){
             //geturl: 是父组件指定的传数据绑定的函数
             this.$emit('geturl',[i2,index1,index2])
         },
  //内层划入
  choosechildenter(index2){
    that.choosechildindex = index2
    // console.log(index2)
  },
  //内层离开
  choosechildlever(){
    that.choosechildindex = -1
  },
  //最外层判断是否需要展开
  false_showaside(){
    if(window.innerWidth>900 && !this.$store.state.isshowaside){
      that.$store.commit({
          type:'change_isopen',
          isopen:true
      })
    }
  },
  //最外层判断是否需要关闭
  false_closeaside(){
    if(window.innerWidth>900 && !this.$store.state.isshowaside){
      that.$store.commit({
          type:'change_isopen',
          isopen:false
      })
    }
  }
  },
  created(){},
  mounted(){
    that = this;
    that.isopen = that.$store.state.isopen;
      // console.log(that.message)

    
    
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/commen/aside.scss';
   ::-webkit-scrollbar
{
	width: 0;
	height: 0;
  background-color: #F5F5F5;
  
}

</style>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  width: 100%;
  height: 100%;
}
.layout-header{
  display: flex;
  justify-content: flex-start;
}
.ivu-row-flex {
  width: 100%;
  height: 100%;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  background: #464c5b;
}
.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  padding: 0;
  border-radius: 3px;
  margin: 15px auto;
  background:url("../assets/data2.png") no-repeat center;
  background-size:contain; 
  
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-hide-text .layout-text {
  display: none;
}
.ivu-col {
  transition: width 0.2s ease-in-out;
}
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <div class="layout-logo-left"></div>
        <Menu active-name="1" theme="dark" width="auto">
          
          <Menu-item name="1">
            <Icon type="ios-navigate" :size="iconSize"></Icon>
            <span class="layout-text">学术关系</span>
          </Menu-item>
          <Menu-item name="2">
            <Icon type="ios-keypad" :size="iconSize"></Icon>
            <span class="layout-text">导师信息</span>
          </Menu-item>
          <Menu-item name="3">
            <Icon type="ios-analytics" :size="iconSize"></Icon>
            <span class="layout-text">更多功能</span>
          </Menu-item>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon  :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
          </i-button>
        </div>
        <div class="layout-content">
          <router-view></router-view>
        </div>
        <div class="layout-copy">&copy;TreeGraph</div>
      </i-col>
    </Row>
  </div>
</template>
<script>
import G6 from "@antv/g6";
export default {
  data() {
    return {
      spanLeft: 5,
      spanRight: 19
    };
  },
  computed: {
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24;
    }
  },
  mounted(){
  },
  methods: {
    toggleClick() {
      if (this.spanLeft === 5) {
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.spanLeft = 5;
        this.spanRight = 19;
      }
    }
  }
};
</script>


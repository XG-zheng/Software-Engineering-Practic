<template>
  <div class="page">
    <div class="main-content">
      <div class="header">
        <img src="../assets/data2.png" class="logo-box" />
        <p class="title">学术家族</p>
      </div>
      <div class="body">
        <textarea class="body-text" placeholder="请输入导师关系...." id="data"></textarea>
        <button class="create-btn" @click="handleData">Create Tree Graph</button>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edge: new Map(),
      info: new Map(),
      used: new Map(),
      data: [],
      ID: 1
    };
  },
  methods: {
    handleData() {
      let text = document.getElementById("data");
      var data = text.value;
      var lis = data.split("\n");
      console.log(lis);
      let rk = new Map();
      (rk["导师"] = 0),
        (rk["博士生"] = 1),
        (rk["硕士生"] = 2),
        (rk["本科生"] = 3);
      var ID = 0;
      let str = ["博士生", "硕士生", "本科生"];  
      var _this = this;
      for (var i = 0; i < lis.length; ) {
        var j;
        for (j = i + 1; j < lis.length; ++j) {
          if (lis[j] == "") break;
        }
        let th = lis[i].substring(3);

        _this.edge[th] = [];
        _this.info[th] = "导师";
        for (var k = i + 1; k < j; ++k) {
          var cur, idx;
          for (var value of str) {
            idx = lis[k].indexOf(value);
            if (idx != -1) {
              cur = lis[k].substring(0, idx + 3);
              _this.edge[th].push(lis[k].substring(0, idx + 3) + th);
              _this.edge[cur + th] = [];
              _this.info[cur + th] = value;
              _this.used[cur + th] = 1;
              break;
            }
          }
          var stu = lis[k].substring(idx + 4).split("、");
          for (var value of stu) {
            if (_this.info[value] == null || rk[_this.info[value]] > rk[cur])
              _this.info[value] = cur;
            _this.edge[cur + th].push(value);
            _this.used[value] = 1;
          }
        }
        i = j + 1;
      }
      for (var key in _this.info) {
        if (_this.used[key] == null) {
          _this.data.push(_this.formatData(key, -1));
        }
      }
      this.$router.push({
        path: "/user/relation",
        query: {
          data: JSON.stringify(_this.data)
        }
      });
    },
    formatData(rt, fa) {
      let now = {};
      now.name = rt;
      now.id = this.ID;
      this.ID += 1;
      now.lv = this.info[rt];
      now.children = [];
      let arr = this.edge[rt];
      if (arr == null) return now;
      for (var i = 0; i < arr.length; ++i) {
        now.children.push(this.formatData(arr[i], rt));
      }
      if (rt.indexOf(fa) != -1) {
        let tmp = rt.substring(0, rt.indexOf(fa));
        now.name = tmp;
      }
      return now;
    }
  }
};
</script>

<style scoped>
.page {
  width: 100vm;
  height: 100vh;
  background-color: rgb(70, 76, 91);
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content {
  padding: 5% 0%;

  background: rgb(244, 244, 245);
  background: url("../assets/back-img.png") no-repeat;
  background-position: center 0;
  width: 56.5%;
  height: 54%;
  box-shadow: 0px 8px 8px #1e1e1e;
  background-size: cover;
  border-radius: 0px;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  color: #fff;
  font-weight: 600;
  margin-left: 10px;
}
.body {
  margin-top: 20px;
  width: 100%;
}
.body-text {
  background: transparent;
  width: 49.5%;
  height: 25vh;
  resize: none;
  border-radius: 2px;
  display: block;
  margin: 0 auto;
  color: #fff;
}
textarea::-webkit-input-placeholder {
  color: #fff;
}
.logo-box {
  width: 30px;
  height: 30px;
}
.create-btn {
  padding: 0px 2px;
  margin-top: 15px;
  width: 50%;
  height: 5vh;
  border-radius: 2px;
  outline: none;
  border: 1px solid #dbdbdb;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
}

@-webkit-keyframes shine {
  from {
    -webkit-box-shadow: 0 0 5px rgb(12, 86, 121);
  }
  50% {
    -webkit-box-shadow: 0 0 10px rgb(145, 218, 208);
  }
  to {
    -webkit-box-shadow: 0 0 5px #bbb;
  }
}
.create-btn:hover {
  -webkit-animation-name: shine;
  -webkit-animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
}
</style>
<template>
  <div class="site-header" ref="active">
    <div class="site-img" ref="lazy">
      <div class="img-wrap"></div>
      <div class="site-master">
        <el-card class="box-card">
          <div class="avatar" @click="loginStart">
            <img :src="avatar" alt="头像" />
          </div>
          <p class="motto">
            <span class="spanleft">身虽囿核桃</span
            ><span class="spanright">心为无限王</span>
          </p>
        </el-card>
      </div>
      <el-dialog
        title="登录"
        :visible.sync="dialogFormVisible"
        :modal-append-to-body="false"
        :modal="false"
      >
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input
              v-model="form.password"
              autocomplete="off"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="commitConcel">取 消</el-button>
          <el-button type="primary" @click="commitData">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { commitLogin } from "network/commitLogin"
export default {
  name: "SiteHeader",
  data() {
    return {
      girl: require("assets/img/girl.png"),
      avatar: require("assets/img/avatar.jpg"),
      // backvideo: require("assets/img/backvideo.mp4"),
      dialogFormVisible: false,
      form: {
        name: "",
        password: "",
      },
      formLabelWidth: "300",
    }
  },
  mounted() {
    this.backGradient()
  },
  methods: {
    backGradient() {
      setTimeout(() => {
        this.$refs.lazy.classList.add("show")
      }, 900)
    },
    loginStart() {
      this.dialogFormVisible = true
    },
    commitData() {
      if (this.form.name && this.form.password) {
        commitLogin(this.form).then(res => {
          if (res.data == true) {
            this.form.name = ""
            this.form.password = ""
            this.dialogFormVisible = false
            this.$store.commit("login", true)
            alert("登陆成功")
          } else {
            alert("帐号或密码错误")
          }
        })
      } else {
        alert("请输入完整信息")
      }
    },
    commitConcel() {
      this.form.name = ""
      this.form.password = ""
      this.dialogFormVisible = false
    },
  },
}
</script>

<style>
.show {
  opacity: 1 !important;
}
.site-header {
  /* width: calc(100vw - 17px); */
  min-height: 40vh;
  margin: -60px auto 0;
  position: relative;
  z-index: 0;
}
.el-dialog {
  z-index: 2000;
}
.site-img {
  width: 100%;
  opacity: 0;
  transition: all 1s ease-in-out;
}
.site-img .img-wrap {
  height: 100vh;
  background: url("~assets/img/girl.png");
  background-position: center;
}
.site-master {
  height: 25vh;
  width: 50vw;
  max-width: 1024px;
  margin: 0 auto;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
.el-card.box-card {
  width: 100%;
  height: 100%;
  background: rgba(230, 244, 249, 0.7);
  border: none;
}
.box-card .el-card__body {
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
}
.avatar {
  height: 50%;
  text-align: center;
  cursor: pointer;
}
.avatar img {
  width: 100px;
  border-radius: 60px;
}
.motto {
  height: 40%;
  user-select: none;
  text-align: center;
  font-size: 30px;
  color: #97dffd;
  text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
}
.spanright {
  margin-left: 10px;
}
@media only screen and (max-width: 720px) {
  .site-master {
    width: 90%;
  }
  .site-header .img-wrap {
    display: none;
  }
  .avatar img {
    width: 80px;
    border-radius: 40px;
  }
  .motto {
    margin: 0;
    font-size: 20px;
    margin-top: 15px;
  }
}
@media only screen and (max-width: 420px) and (min-width: 200px) {
  .spanleft {
    display: block;
    margin-bottom: 10px;
  }
  .spanright {
    margin: 0;
  }
  .avatar img {
    width: 60px;
    border-radius: 30px;
  }
  .avatar {
    height: auto;
  }
  .motto {
    height: auto;
  }
  .site-master {
    height: auto;
  }
}
@media screen and (max-width: 480px) and (min-width: 0px) {
  .el-dialog__wrapper .el-dialog {
    width: auto;
    /* height: 200px; */
  }
  .el-dialog__wrapper .el-dialog__body {
    padding: 0 10px;
  }
  .el-dialog__wrapper .el-dialog__footer {
    padding: 0 10px;
  }
}
</style>

<!-- 组件说明 -->
<template>
  <el-form
    :model="loginUser"
    :rules="rules"
    ref="loginForm"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="loginUser.email"
        placeholder="请输入邮箱..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.passWord"
        type="password"
        placeholder="请输入密码..."
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="handleLogin('loginForm')"
        >提交</el-button
      >
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";

import { loginUser, rules } from "@/utils/loginValidators";
//import x from ''
export default defineComponent({
  name: "LoginForm",
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    // console.log(ctx);

    //提交
    const handleLogin = (form: String) => {
      //   console.log(ctx);
      ctx.$refs[form].validate((valid: Boolean) => {
        // console.log(valid);

        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return { loginUser, rules, handleLogin };
  },
});
</script>

<style scoped>
/*@import url('')*/
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>

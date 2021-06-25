<!-- 组件说明 -->
<template>
  <el-form
    :model="registerUser"
    :rules="registerRules"
    ref="registerForm"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="name">
      <el-input
        v-model="registerUser.name"
        placeholder="请输入用户名..."
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="registerUser.email"
        placeholder="请输入邮箱..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.passWord"
        type="password"
        placeholder="请输入密码..."
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.passWord2"
        type="password"
        placeholder="请第二次输入密码..."
      ></el-input>
    </el-form-item>
    <el-form-item label="选择身份" prop="password">
      <el-select v-model="registerUser.role" placeholder="请选择身份...">
        <el-option label="管理员" value="admin">admin</el-option>
        <el-option label="用户" value="user">user</el-option>
        <el-option label="游客" value="visitor">visitor</el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="handleRegister('registerForm')"
        >提交</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";

import { registerUser, registerRules } from "@/utils/registeValidators";

import { register } from "@/network/register";
//import x from ''
export default defineComponent({
  name: "RegisterForm",
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();

    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          register(registerUser)
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return {
      registerUser,
      registerRules,
      handleRegister,
    };
  },
});
</script>

<style scoped>
/*@import url('')*/
</style>

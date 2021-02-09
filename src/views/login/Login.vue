<!-- 登录页面 -->
<template>
    <div class="login_container">
        <div class="login_box">
            <div class="login_header">
              <i class="el-icon-user"></i>
              <span>后台管理系统</span>
            </div>
            <el-form :model="loginForm" ref="loginFormRef" :rules="rules" label-width="0" class="loginForm">
              <el-form-item prop="username">
                  <el-input type='text' v-model="loginForm.username" prefix-icon="el-icon-user" clearable></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-lock" show-password clearable>
                  <i slot="suffix"></i>
                </el-input>
              </el-form-item>
              <el-form-item class="btns">
                <el-button type="primary" @click="submit">提交</el-button>
                <el-button @click="reset">重置</el-button>
              </el-form-item>
          </el-form>
        </div>
    </div>
</template>

<script>
import { Form, FormItem } from 'element-ui'
export default {
    name: 'Login',
    props: {
    },
    components: {
        'el-form': Form,
        'el-form-item': FormItem
    },
    data () {
        return {
            loginForm: {
                username: '123',
                password: '123456'
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submit () {
            this.$refs.loginFormRef.validate(valid => {
                if (valid) {
                    const params = { ...this.loginForm }
                    this.$message.success('登录成功')
                    console.log(params)
                    // token应只在当前网页打开期间有效
                    // window.sessionStorage.setItem("token":res.data.token)
                    this.$router.push('/home')
                }
            })
        },
        reset () {
            this.$refs.loginFormRef.resetFields()
        }
    }
}
</script>

<style lang='less' scoped>
    .login_container{
        height: 100%;
        background-color: #000;
        .login_box{
          width: 360px;
          height: 300px;
          background-color: #fff;
          border-radius: 3%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          .login_header{
              text-align: center;
              span,.el-icon-user{
                  position: absolute;
                  left: 50%;
                  transform: translate(-50%,-50%);
              }
              .el-icon-user{
                  font-size: 110px;
                  border:1px solid #000;
                  border-radius: 50%;
                  box-shadow: 0 10px 10px #000;
                  background-color: #fff;
              }
              span{
                  top: 88px;
                  font-size: 22px
              }
          }
          .loginForm{
              width: 100%;
              position: absolute;
              left: 50%;
              bottom: 0;
              transform: translate(-50%,0);
              box-sizing: border-box;
              padding: 0px 25px;
              .btns{
                  display: flex;
                  justify-content:flex-end;
              }
          }
        }
    }
</style>

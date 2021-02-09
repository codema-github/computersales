<!-- 主页 -->
<template>
    <div>home
    <el-button @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
    },
    components: {
    },
    data () {
        return {
            msg: '123'
        }
    },
    methods: {
        logout () {
        // 清空token退出登录
        // window.sessionStorage.clear()
            this.router.push('/login')
        }
    }
}
</script>

<style lang='less' scoped>

</style>

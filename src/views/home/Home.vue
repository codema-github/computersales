<!-- 主页 -->
<template>
    <el-container class="home_container">
    <el-header height="90px">
        <div>
            <img src="../../assets/image/computerIcon.jpg"/>
            <span>电脑销售管理系统</span>
        </div>
        <el-button @click="logout">退出</el-button>
        </el-header>
    <el-container>
    <el-aside :width="isCollapse?'65px':'200px'">
        <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="isCollapse=!isCollapse"></i>
        <el-menu
        router
        :default-active='activeLink'
        :collapse-transition='false'
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        background-color="#1e1e1e"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-sell"></i>
                <span>销售管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/order" @click="saveAcitiveLink('/order') ">
                <template slot="title">
                    <i class="el-icon-document-copy"></i>
                    <span>订单管理</span>
                </template>
                </el-menu-item>
                <el-menu-item index="/achievement" @click="saveAcitiveLink('/achievement')" >
                <template slot="title">
                    <i class="el-icon-document-checked"></i>
                    <span>业绩管理</span>
                </template>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
            <el-menu-item index="/stock" @click="saveAcitiveLink('/stock')">
                <i class="el-icon-house"></i>
                <span slot="title">库存管理</span>
            </el-menu-item>
            <el-menu-item index="/staff" @click="saveAcitiveLink('/staff')">
                <i class="el-icon-user"></i>
                <span slot="title">员工管理</span>
            </el-menu-item>
            <el-menu-item index="/finance" @click="saveAcitiveLink('/finance')">
                <i class="el-icon-s-finance"></i>
                <span slot="title">财务报表</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
    <el-main>
        <router-view/>
    </el-main>
    </el-container>
</el-container>
</template>

<script>
import { Aside, Container, Header, Main, Menu, MenuItem, MenuItemGroup, Submenu } from 'element-ui'
export default {
    name: 'Home',
    props: {
    },
    components: {
        'el-container': Container,
        'el-header': Header,
        'el-aside': Aside,
        'el-main': Main,
        'el-menu': Menu,
        'el-menu-item': MenuItem,
        'el-submenu': Submenu,
        'el-menu-item-group': MenuItemGroup
    },
    created () {
        this.activeLink = window.sessionStorage.getItem('activeLink')
    },
    data () {
        return {
            isCollapse: false,
            activeLink: ''
        }
    },
    methods: {
        logout () {
        // 清空token退出登录
        // window.sessionStorage.clear()
            this.$router.push('/login')
        },
        saveAcitiveLink (path) {
            window.sessionStorage.setItem('activeLink', path)
            this.activeLink = path
        }
    }
}
</script>

<style lang='less' scoped>
.home_container{
    height: 100%;
}
.el-header{
    background-color: #1e1e1e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        display: flex;
        justify-content: start;
        align-items: center;
        img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        }
        span{
        margin-left: 22px;
        color: #fff;
        font-size: 25px;
        }
    }
}
.el-aside{
    background-color: #1e1e1e;
    i.el-icon-s-fold,.el-icon-s-unfold{
        font-size: 20px;
        color: #fff;
        width:100%;
        cursor: pointer;
        margin-left: 20px;
    }
    i.el-icon-s-unfold{
        color: #ffd04b;
    }
    .el-menu{
        border-right:none;
        span{
            font-size: 17px;
        }
        i{
            font-size: 20px;
        }
    }
}
</style>

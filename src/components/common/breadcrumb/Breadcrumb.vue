<!-- 面包屑模块 -->
<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :key="index" v-for="(item,index) in headTitles">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from 'element-ui'
export default {
    name: 'Breadcrumb',
    props: {
        headTitles: Array
    },
    components: {
        'el-breadcrumb': Breadcrumb,
        'el-breadcrumb-item': BreadcrumbItem
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style lang='less' scoped>

</style>

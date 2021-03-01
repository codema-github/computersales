<!-- 订单管理 -->
<template>
    <div class="order_container">
        <breadcrumb
        :headTitles='headTitles'/>
        <el-card class="box-card">
            <el-row>
                <el-col :span="2"><el-button type="primary" size="mini" @click="showAddDialog">添加订单</el-button></el-col>
                <el-col :span="6">
                    <el-input size="mini" placeholder="请输入订单号" v-model="querryInfo.id">
                        <el-button slot="append" icon="el-icon-search" @click="querry"></el-button>
                    </el-input>
                </el-col>
            </el-row>
        </el-card>
        <pagination
        @handleSizeChange='handleSizeChange'
        @handleCurrentChange='handleCurrentChange'
        :querryInfo='querryInfo'
        :total='total'/>
    </div>
</template>

<script>
import { Card, Col, Row } from 'element-ui'
import Breadcrumb from '../../../../components/common/breadcrumb/Breadcrumb'
import Pagination from '../../../../components/common/pagination/Pagination.vue'
export default {
    name: 'Order',
    props: {
    },
    components: {
        'el-card': Card,
        'el-row': Row,
        'el-col': Col,
        Breadcrumb,
        Pagination
    },
    data () {
        return {
            headTitles: ['销售管理', '订单管理'],
            showAddDialog: false,
            querryInfo: {
                id: '',
                pageSize: 3,
                currentPage: 1
            },
            total: 3
        }
    },
    methods: {
        querry () {
            console.log(this.querryInfo)
        },
        handleSizeChange (val) {
            console.log('当前页大小：' + val)
            this.querryInfo.pageSize = val
        },
        handleCurrentChange (val) {
            console.log('当前页码：' + val)
            this.querryInfo.currentPage = val
        }
    }
}
</script>

<style lang='less' scoped>

</style>

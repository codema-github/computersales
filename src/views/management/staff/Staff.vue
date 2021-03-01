<!-- 员工管理 -->
<template>
    <div class="staff_container">
        <breadcrumb
        :headTitles="headTitles"/>
        <el-card class="box-card">
            <el-row>
                <el-col :span="2"><el-button type="primary" size="mini" @click="showAdd()">
                    添加员工
                    </el-button></el-col>
                <el-col :span="6">
                    <el-input size="mini" placeholder="请输入员工姓名" v-model="querryInfo.staffName">
                        <el-button slot="append" icon="el-icon-search" @click="querry"></el-button>
                    </el-input>
                </el-col>
            </el-row>
            <el-table
                :data="staffList"
                stripe
                style="width: 100%">
                <el-table-column
                prop="staffId"
                label="员工编号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="staffName"
                label="姓名"
                min-width="100">
                </el-table-column>
                <el-table-column
                prop="sex"
                label="性别"
                width="100">
                <template slot-scope="scope">
                        <el-tag v-if="scope.row.sex === 1" type="primary">男</el-tag>
                        <el-tag v-if="scope.row.sex === 0" type="danger">女</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                prop="age"
                label="年龄"
                width="100">
                </el-table-column>
                <el-table-column
                prop="telphone"
                label="联系方式"
                min-width="100">
                </el-table-column>
                <el-table-column
                prop="salary"
                label="月薪"
                width="100">
                </el-table-column>
                <el-table-column
                prop="joinTime"
                label="入职时间"
                min-width="150">
                    <template slot-scope="scope">
                        <span>{{scope.row.joinTime | date-filter}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态"
                width="100">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.status" type="success">在职</el-tag>
                        <el-tag v-else type="danger">离职</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="120">
                    <template slot-scope="scope">
                        <el-button @click="handleCheck(scope.row)" type="text" size="small">查看</el-button>
                        <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
                        <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <pagination
        @handleSizeChange='handleSizeChange'
        @handleCurrentChange='handleCurrentChange'
        :querryInfo='querryInfo'
        :total='total'/>
        <!-- <add-staff :addDialogVisible="addDialogVisible" @closeAddDialog='closeAddDialog'/> -->
    </div>
</template>

<script>
import { Card, Col, Row, Table, TableColumn, Tag } from 'element-ui'
// import AddStaff from './children/addStaff.vue'
import Pagination from '../../../components/common/pagination/Pagination.vue'
import Breadcrumb from '../../../components/common/breadcrumb/Breadcrumb'
export default {
    name: 'Staff',
    props: {
    },
    components: {
        'el-card': Card,
        'el-row': Row,
        'el-col': Col,
        'el-table': Table,
        'el-table-column': TableColumn,
        'el-tag': Tag,
        // AddStaff,
        Pagination,
        Breadcrumb
    },
    data () {
        return {
            headTitles: ['员工管理'],
            querryInfo: {
                staffName: '',
                pageSize: 10,
                currentPage: 1
            },
            total: 3,
            staffList: [
                {
                    staffId: 1,
                    staffName: '张三',
                    sex: 1,
                    age: '2',
                    telphone: '2',
                    salary: '2',
                    joinTime: new Date(),
                    status: true,
                    idCard: '430281200002253635',
                    job: [0, 1]
                },
                {
                    staffId: 12,
                    staffName: '王老五',
                    sex: 0,
                    age: '23',
                    telphone: '22',
                    salary: '2t',
                    joinTime: 10000000,
                    status: false,
                    idCard: '430281200002253635',
                    job: [1, 0]
                }
            ]
            // addDialogVisible: false
        }
    },
    created () {
        this.loadStaffs()
    },
    methods: {
        loadStaffs () {
            // this.staffList =
        },
        handleSizeChange (val) {
            console.log('当前页大小：' + val)
            this.querryInfo.pageSize = val
        },
        handleCurrentChange (val) {
            console.log('当前页码：' + val)
            this.querryInfo.currentPage = val
            this.loadStaffs()
        },
        showAdd () {
            // this.addDialogVisible = true
            this.$router.push({
                name: 'AddStaff'
            })
        },
        querry () {
            console.log(this.querryInfo)
            console.log(typeof (this.staffList[0].date))
            console.log(this.staffList[0].date)
            console.log()
        },
        handleCheck (row) {
            this.$router.push({
                name: 'CheckStaff',
                params: { formData: row }
            })
        },
        handleEdit (row) {
            this.$router.push({
                name: 'AddStaff',
                params: { formData: row }
            })
            console.log(row)
        },
        handleDelete (row) {
            console.log(row.status)
            if (row.status) {
                this.$message({
                    message: '该员工在职，只能删除离职员工',
                    type: 'warning'
                })
            } else {
                this.$confirm('此操作将永久删除该员工, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log(row)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
            }
        }
    }
}
</script>

<style lang='less' scoped>

</style>

<!-- 查看页面 -->
<template>
    <div class="checkStaff_container">
        <div class="container_header">
            <breadcrumb :headTitles="headTitles"/>
            <el-page-header @back="$router.back(-1)"/>
        </div>
        <el-card class='box-card'>
            <el-form disabled class="form" ref="addFormRef" label-position='right' size="mini" :model="addForm" status-icon label-width="80px" >
                <el-form-item label="工号" prop="staffId">
                    <el-input clearable type="text" v-model.number="addForm.staffId" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="staffName">
                    <el-input clearable type="text" v-model="addForm.staffName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input clearable type="text" v-model.number="addForm.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <template>
                        <el-radio v-model="addForm.sex" :label="1">男</el-radio>
                        <el-radio v-model="addForm.sex" :label="0">女</el-radio>
                    </template>
                </el-form-item>
                <el-form-item label="入职时间" prop="joinTime">
                    <el-date-picker
                    v-model="addForm.joinTime"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="职位" prop="job">
                    <el-cascader
                    v-model="addForm.job"
                    :props="{ expandTrigger: 'hover' }"
                    >
                    </el-cascader>
                </el-form-item>
                <el-form-item label="月薪" prop="salary">
                    <el-input clearable type="text" v-model="addForm.salary" autocomplete="off" placeholder="单位/元"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="telphone">
                    <el-input clearable type="text" v-model="addForm.telphone" autocomplete="true"></el-input>
                </el-form-item>
                <el-form-item label="身份证" prop="idCard">
                    <el-input clearable type="text" v-model="addForm.idCard" autocomplete="true"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { Card, Cascader, DatePicker, Form, FormItem, PageHeader, Radio } from 'element-ui'
import Breadcrumb from '../../../../components/common/breadcrumb/Breadcrumb.vue'
export default {
    name: 'CheckStaff',
    props: {
    },
    components: {
        'el-form': Form,
        'el-form-item': FormItem,
        'el-date-picker': DatePicker,
        'el-cascader': Cascader,
        'el-radio': Radio,
        'el-card': Card,
        'el-page-header': PageHeader,
        Breadcrumb
    },
    created () {
        this.loadAddForm()
    },
    data () {
        return {
            headTitles: ['员工管理', '查看信息']
        }
    },
    methods: {
        loadAddForm () {
            const data = this.$route.params.formData
            this.addForm = { ...data }
        }
    }
}
</script>

<style lang='less' scoped>
.form{
    width: 300px;
}
</style>

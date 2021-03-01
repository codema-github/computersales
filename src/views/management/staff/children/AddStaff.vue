<!-- 添加员工 -->
<template>
    <div class="addStaff_container">
        <div class="container_header">
            <breadcrumb :headTitles="headTitles"/>
            <el-page-header @back="$router.back(-1)"/>
        </div>
        <el-card class='box-card'>
            <el-form class="form" ref="addFormRef" label-position='right' size="mini" :model="addForm" status-icon :rules="rules" label-width="80px" >
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
                    :options="options"
                    :props="{ expandTrigger: 'hover' }"
                    @change="handleChangeJob">
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
                <el-form-item>
                    <el-button type="primary" @click="add">添加</el-button>
                    <el-button @click="cancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { Card, Cascader, DatePicker, Form, FormItem, PageHeader, Radio } from 'element-ui'
import Breadcrumb from '../../../../components/common/breadcrumb/Breadcrumb.vue'
export default {
    name: 'AddStaff',
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
        if (this.$route.params.formData) {
            this.loadAddForm()
            console.log(this.addForm)
        }
        this.$nextTick(() => {
            this.headTitles.push(this.$route.params.formData ? '修改信息' : '添加员工')
            console.log(this.title)
        })
    },
    data () {
        const checkAge = (rule, value, callback) => {
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'))
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'))
                    } else if (value > 65) {
                        callback(new Error('请输入正确的年龄'))
                    } else {
                        callback()
                    }
                }
            }, 500)
        }
        const checkId = (rule, value, callback) => {
            if (!Number.isInteger(value)) {
                callback(new Error('只能输入数字型'))
            }
        }
        const checkSalary = (rule, value, callback) => {
            if (!/^(([0])|([1-9][0-9]{0,7}))(\.[0-9]{0,2})$/.test(value)) {
                callback(new Error('请输入数字且小数点后要保留2位小数'))
            }
        }
        const checkTel = (rule, value, callback) => {
            if (!/^1[3456789]\d{9}$/.test(value)) {
                callback(new Error('请输入正确的手机号'))
            }
        }
        const checkIdCard = (rule, value, callback) => {
            if (!/^(\d{6})(18|19|20)?(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X)?/.test(value)) {
                callback(new Error('请输入正确的身份证'))
            }
        }
        return {
            headTitles: ['员工管理'],
            visible: this.addDialogVisible,
            addForm: {
                staffId: null,
                staffName: '',
                sex: '',
                age: '',
                telphone: '',
                idCard: '',
                salary: '',
                joinTime: null
            },
            rules: {
                staffId: [
                    { required: true, message: '请输入id', trigger: 'blur' },
                    { validator: checkId, trigger: 'blur' }
                ],
                staffName: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                age: [
                    { required: false, validator: checkAge, trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'blur' }
                ],
                joinTime: [
                    { required: true, message: '请输入入职时间', trigger: 'blur' }
                ],
                job: [
                    { required: true, message: '请输入职位', trigger: 'blur' }
                ],
                salary: [
                    { required: true, message: '请输入月薪', trigger: 'blur' },
                    { validator: checkSalary, trigger: 'blur' }
                ],
                telphone: [
                    { required: true, message: '请输入电话号码', trigger: 'blur' },
                    { validator: checkTel, trigger: 'blur' }
                ],
                idCard: [
                    { required: true, message: '请输入身份证', trigger: 'blur' },
                    { validator: checkIdCard, trigger: 'blur' }
                ]
            },
            options: [
                {
                    value: 'yinxiaobu',
                    label: '营销部',
                    children: [{
                        value: 'jingli',
                        label: '经理'
                    },
                    {
                        value: 'kefu',
                        label: '客服'
                    }]
                },
                {
                    value: 'caiwubu',
                    label: '财务部',
                    children: [{
                        value: 'jingli',
                        label: '经理'
                    }]
                }
            ]
        }
    },
    methods: {
        loadAddForm () {
            const data = this.$route.params.formData
            this.addForm = { ...data }
        },
        handleChangeJob (val) {
            console.log(val)
        },
        add () {
            this.$refs.addFormRef.validate((valid) => {
                if (valid) {
                    console.log(valid)
                    // 网络请求
                    const date = this.toTime(this.addForm.joinTime)
                    this.addForm.joinTime = date
                    console.log(this.addForm)
                } else {
                    console.log('验证失败')
                }
            })
        },
        cancel () {
            this.$router.push('/staff')
            this.$refs.addFormRef.resetFields()
        }
    }
}
</script>

<style lang='less' scoped>
.form{
    width: 300px;
}
</style>

<!-- 分页模块 -->
<template>
    <div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="querryInfo.currentPage"
            :page-sizes="[2, 3, 4, 5]"
            :page-size='querryInfo.pageSize'
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
    </div>
</template>

<script>
import { Pagination } from 'element-ui'
export default {
    name: 'Pagination',
    props: {
        querryInfo: Object,
        total: Number
    },
    components: {
        'el-pagination': Pagination
    },
    data () {
        return {
        }
    },
    methods: {
        handleSizeChange (val) {
            this.$emit('handleSizeChange', val)
        },
        handleCurrentChange (val) {
            this.$emit('handleCurrentChange', val)
        }
    }
}
</script>

<style lang='less' scoped>

</style>

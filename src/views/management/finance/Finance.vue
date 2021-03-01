<!-- 财务报表 -->
<template>
    <div class="stock_container">
        <el-card>
            <breadcrumb
            :headTitles='headTitles'/>
        </el-card>
    </div>
</template>

<script>
import { Card } from 'element-ui'
import Breadcrumb from '../../../components/common/breadcrumb/Breadcrumb.vue'
export default {
    name: 'Finance',
    props: {
    },
    components: {
        'el-card': Card,
        Breadcrumb
    },
    data () {
        return {
            headTitles: ['财务报表'],
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
        }
    }
}
</script>

<style lang='less' scoped>

</style>

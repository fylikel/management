<template>
    <div class="preview">
        <div class="head">
            <a-space class="left">
                <div class="button">
                    <span>资源类型</span>
                    <a-select default-value="全部" style="width: 120px" @change="handleChange">
                        <a-select-option value="jack">
                            全部
                        </a-select-option>
                        <a-select-option value="路由器">
                            路由器
                        </a-select-option>
                        <a-select-option value="光纤交换机">
                            光纤交换机
                        </a-select-option>
                        <a-select-option value="交换机">
                            交换机
                        </a-select-option>
                        <a-select-option value="三层交换机">
                            三层交换机
                        </a-select-option>
                        <a-select-option value="工业交换机">
                            工业交换机
                        </a-select-option>
                    </a-select>
                </div>
                <div class="button">
                    <span>管理状态</span>
                    <a-select default-value="全部" style="width: 120px" @change="handleChange">
                        <a-select-option value="管理中">
                            管理中
                        </a-select-option>
                        <a-select-option value="未管理">
                            未管理
                        </a-select-option>
                    </a-select>
                </div>
                <div class="button">
                    <span>关键性</span>
                    <a-select default-value="全部" style="width: 120px" @change="handleChange">
                        <a-select-option value="关键">
                            关键
                        </a-select-option>
                        <a-select-option value="非关键">
                            非关键
                        </a-select-option>
                    </a-select>
                </div>
                <div class="button">
                    <span>资源状态</span>
                    <a-select default-value="全部" style="width: 120px" @change="handleChange">
                        <a-select-option value="全部">
                            全部
                        </a-select-option>
                        <a-select-option value="正常">
                            正常
                        </a-select-option>
                        <a-select-option value="中断">
                            中断
                        </a-select-option>
                        <a-select-option value="异常">
                            异常
                        </a-select-option>
                        <a-select-option value="未知">
                            未知
                        </a-select-option>
                    </a-select>
                </div>
                <div class="button">
                    <span>厂商</span>
                    <a-select default-value="全部" style="width: 120px" @change="handleChange">
                        <a-select-option value="全部">
                            全部
                        </a-select-option>
                        <a-select-option value="华为">
                            华为
                        </a-select-option>
                        <a-select-option value="H3C">
                            H3C
                        </a-select-option>
                        <a-select-option value="华为56812">
                            华为56812
                        </a-select-option>
                    </a-select>
                </div>
                <div class="button" style="display: flex; align-items: center;">
                    <span style="margin-right: 5px;">地域</span>
                    <a-dropdown :visible="dropdownVisible" @visibleChange="handleVisibleChange" :trigger="['click']">
                        <main style="display: flex; flex-direction: column; align-items: flex-start;">
                            <a-input placeholder="请输入地域" style="width: 200px;" />
                        </main>
                        <a-menu slot="overlay" style="width: 200px;">
                            <a-menu-item>
                                <a-tree v-model="checkedKeys" checkable :expanded-keys="expandedKeys"
                                    :auto-expand-parent="autoExpandParent" :selected-keys="selectedKeys"
                                    :tree-data="treeData" @expand="onExpand" @select="onSelect" />
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>



                <a-input-search placeholder="请输入搜索关键字" @search="onSearch" />

            </a-space>
            <a-button class="h5-left" type="link" style="display: none;">筛选与批量操作</a-button>
            <a-space class="right">
                <a-button style="display: block;" type="primary"><a-icon type="plus" />添加</a-button>
                <a-tooltip>
                    <template slot="title">
                        过保设备
                    </template>
                    <a-icon type="clock-circle" />
                </a-tooltip>
                <a-tooltip>

                    <template slot="title">
                        导出EXCEL
                    </template>
                    <a-icon type="snippets" />
                </a-tooltip>
                <a-tooltip>

                    <template slot="title">
                        列配置
                    </template>
                    <a-icon type="unordered-list" />
                </a-tooltip>
            </a-space>
        </div>
        <!-- 数据 -->
        <div style="margin-top: 10px;">
            <a-table ref="table" :columns="columns" :data-source="data" :row-selection="rowSelection"
                :expanded-row-keys.sync="expandedRowKeys" :pagination="false" :row-class-name="rowClassName"
                :scroll="{ x: shouldAddScroll ? 1500 : undefined, y: shouldAddScrollY ? 1920 : undefined }" />

            <template slot-scope="{ text }" slot="progress">
                <a-progress :percent="text" />
            </template>

        </div>
    </div>
</template>

<script>
const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        width: '5%'
    },
    {
        title: '资源状态',
        dataIndex: 'status',
        key: 'status',
        width: '5%'
    },
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: '10%'
    },

    {
        title: '厂商',
        dataIndex: 'trade',
        key: 'trade',
        width: '6%'
    },
    {
        title: 'IP地址',
        dataIndex: 'address',
        key: 'address',
        width: '8%'
    },
    {
        title: '资源类型',
        dataIndex: 'resource_type',
        key: 'resource_type',
        width: '6%'
    },
    {
        title: '资源心跳',
        dataIndex: 'resource_heartbeat',
        key: 'resource_heartbeat',
        width: '6%'
    },
    {
        title: '健康度',
        dataIndex: 'progress',
        key: 'progress',
        width: '8%'
    },
    {
        title: 'CPU利用率',
        dataIndex: 'cpu',
        key: 'cpu',
        width: '8%'
    },
    {
        title: '内存利用率',
        dataIndex: 'internal',
        key: 'internal',
        width: '8%'
    },
    {
        title: '管理人',
        dataIndex: 'custodian',
        key: 'custodian',
        width: '8%'
    },
    {
        title: '地域',
        dataIndex: 'territory',
        key: 'territory',
        width: '8%'
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
    }
]
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
}

import { getUserList, getTree } from '@/api/userList';
import axios from 'axios'
export default {
    data() {
        return {
            data: [],
            columns,
            rowSelection,
            expandedRowKeys: [],
            shouldAddScroll: false,
            shouldAddScrollY: false,
            search: '',
            // 
            expandedKeys: ['000001'],
            autoExpandParent: true,
            checkedKeys: ['a8ad54aa-1253-4a6b-89ce-065f73c32975'],
            selectedKeys: [],
            treeData: [],
            dropdownVisible: false,
        };
    },
    props: {
        pageSize: Number,
        current: Number
    },
    created() {
        this.data_list()
        this.getTreeList()
    },
    watch: {
        checkedKeys(val) {
            console.log('onCheck', val);
        },
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        onSearch(value) {
            this.search = value
            this.data_list(this.pageSize, this.current, value)
        },
        handleResize() {
            this.shouldAddScroll = window.innerWidth < 1920;
            this.shouldAddScrollY = window.innerHeight < 1080;
        },
        rowClassName(record, index) {
            return index % 2 === 0 ? 'even' : 'odd';
        },
        async data_list(pageSize, current, search) {
            const res = await getUserList(pageSize, current, search)
            console.log(res.data.data.data)
            const result = res.data.data.data
            this.data = []
            result.map((e, i) => {
                this.data.push({
                    key: e.id,
                    id: i + 1,
                    status: 1,
                    name: e.name,
                    trade: e.manufactureName,
                    address: e.ip,
                    resource_type: '交换机',
                    resource_heartbeat: e.indicatorValueVOList[0] ? (e.indicatorValueVOList[0].indicatorValue ? e.indicatorValueVOList[0].indicatorValue : '-') : '-',
                    progress: e.indicatorValueVOList[3] ? e.indicatorValueVOList[3].indicatorValue : '-',
                    cpu: e.indicatorValueVOList[1] ? e.indicatorValueVOList[1].indicatorValue : '-',
                    internal: e.indicatorValueVOList[3] ? e.indicatorValueVOList[3].indicatorValue : '-',
                    custodian: e.userName,
                    territory: e.areaNames,
                    operate: i,
                })
            })
        },
        // 
        onExpand(expandedKeys) {
            console.log('onExpand', expandedKeys);
            // if not set autoExpandParent to false, if children expanded, parent can not collapse.
            // or, you can remove all expanded children keys.
            this.expandedKeys = expandedKeys;
            this.autoExpandParent = false;
        },
        async onCheck(checkedKeys) {
            // console.log('onCheck', checkedKeys);
            this.checkedKeys = checkedKeys;
            const res = await getTree(checkedKeys[checkedKeys.length - 1])
            console.log(res)
        },
        onSelect(selectedKeys) {
            // , info
            // console.log('onSelect', info);
            this.selectedKeys = selectedKeys;
        },
        handleVisibleChange(visible) {
            this.dropdownVisible = visible;
        },
        // tree
        convertToTree(data) {
            return data.map(item => ({
                title: item.areaName,
                key: item.areaId,
                children: item.subAreaTree.length > 0 ? this.convertToTree(item.subAreaTree) : []
            }))
        },
        async getTreeList() {
            const res = await axios.post('http://192.168.166.148:1024/usercenter/area/getAreaTree')
            console.log(res.data.data[0])
            const tree = res.data.data
            this.treeData = this.convertToTree(tree)
        },
        handleChange(value) {
            console.log(`selected ${value}`);
        },

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>

<style lang="scss">
.preview {
    .head {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;

        .left {
            display: flex;

            .button {
                >span {
                    color: #595959;
                    margin-right: 5px;
                }
            }
        }

        @media (max-width: 1024px) {
            .left {
                display: none;
            }

            .h5-left {
                display: block !important;
            }
        }

        .right {
            display: flex;
            align-items: center;
            color: #1890ff;
            font-size: 26px;
        }

    }
}

.even {
    background-color: #fff;
}

.odd {
    background-color: rgba(250, 250, 250, 1);
}
</style>
<template>
    <div class="preview">
        <div class="head">
            <a-space class="left">
                <div class="button">
                    <span>资源类型</span>
                    <a-dropdown :trigger="['click']">
                        <a-button class="ant-dropdown-link" @click="e => e.preventDefault()">
                            全部 <a-icon type="down" />
                        </a-button>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
                <div class="button">
                    <span>状态管理</span>
                    <a-dropdown :trigger="['click']">
                        <a-button class="ant-dropdown-link" @click="e => e.preventDefault()">
                            全部 <a-icon type="down" />
                        </a-button>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
                <div class="button">
                    <span>关键性</span>
                    <a-dropdown :trigger="['click']">
                        <a-button class="ant-dropdown-link" @click="e => e.preventDefault()">
                            全部 <a-icon type="down" />
                        </a-button>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
                <div class="button">
                    <span>资源状态</span>
                    <a-dropdown :trigger="['click']">
                        <a-button class="ant-dropdown-link" @click="e => e.preventDefault()">
                            全部 <a-icon type="down" />
                        </a-button>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
                <div class="button">
                    <span>厂商</span>
                    <a-dropdown :trigger="['click']">
                        <a-button class="ant-dropdown-link" @click="e => e.preventDefault()">
                            全部 <a-icon type="down" />
                        </a-button>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
                <div class="button">
                    <a-dropdown :trigger="['click']">
                        <main style="display: flex; align-items: center;"> 
                            <span style="margin-right: 5px;">地域</span>
                            <a-input placeholder="请输入地域" style="width: 200px" />
                        </main>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
                <a-input-search placeholder="请输入搜索关键字" @search="onSearch" />
            </a-space>
            <a-button class="h5-left" type="link" style="display: none;">筛选</a-button>
        </div>
        <!-- content -->
        <a-row :gutter="16" style="padding: 0 0 0 20px;">
            <a-col :span="4" v-for="i in 20" :key="i">
                <a-card hoverable 
                style=" margin-top: 20px; text-align: center; border-radius: 10px; background-color: #f4f8fb;">
                <div>
                    <img src="http://192.168.166.148:1024/static/img/1010104.975148d9.svg" alt="">
                </div>
                <a-button type="link">模拟数据{{ i }}</a-button>
                <p style="color: #000; font-weight: 999;">(102.168.101.3)</p>
                <div style="color: #000;">健康度<a-progress style="width: 100px;" :percent="80" size="small" status="active" /></div>
                <div style="color: #000; display: flex; justify-content: space-evenly;">
                    <div>cpu 99.00%</div>
                    <div>内存 43.43%</div>
                </div>
            </a-card>
            </a-col>
        </a-row>
    </div>

</template>

<script>
export default {
    methods: {
        onSearch(value) {
            console.log(value)
        }
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

    }
}
</style>
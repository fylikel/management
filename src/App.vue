<template>
  <div class="app">
    <!-- 头部tap栏 -->
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="管理一览">
        <ControlPreviewVue ref="control" :pageSize="pageSize" :current="current" style="margin-bottom: 55px;" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="卡片视图" force-render>
        <CardViewVue :pageSize="pageSize" :current="current"/>
      </a-tab-pane>
    </a-tabs>
    <!-- 底部按钮和分页 -->
    <div class="divider">
      <a-divider style="margin-top: 0; margin-bottom: 10px;" />
      <div :class="['footer', { 'hide-button': isCardView }]">
        <a-space class="button">
          <a-button>状态管理</a-button>
          <a-button>关键性</a-button>
          <a-button>管理方式</a-button>
          <a-button>地域</a-button>
          <a-button>管理人</a-button>
          <a-button>更多设备类型</a-button>
          <a-button style="color: red;">删除</a-button>
        </a-space>
        <div class="pagination" style="display: flex; align-items: center;">
          <span style="margin-right: 10px;">显示1-{{pageSize}}条 总共98条</span>
          <a-pagination  v-model="current" show-size-changer :default-current='current' :default-pageSize="pageSize" :total="98" @showSizeChange="onShowSizeChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardViewVue from './components/CardView.vue';
import ControlPreviewVue from './components/ControlPreview.vue';
export default {
  name: 'App',
  data() {
    return {
      pageSize: 10,
      current: 1,
      isCardView: false
    };
  },
  components: {
    CardViewVue,
    ControlPreviewVue,
  },
  mounted() {
  },
  watch: {
    pageSize(val) {
      console.log('pageSize', val);
      this.$refs.control.data_list(this.pageSize,this.current)
    },
    current(val) {
      console.log('current', val);
      this.$refs.control.data_list(this.pageSize,this.current )
    },
  },
  methods: {
    callback(key) {
      console.log(key);
      // 判断当前是否为卡片视图
      this.isCardView = key === '2';
    },
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
      this.pageSize = pageSize;
      this.current = current
    },
  },
}
</script>

<style lang="scss">
.app {
  .divider {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding-bottom: 10px;

    .footer {
      display: flex;
      justify-content: space-between;

      @media (max-width: 1024px) {
        justify-content: center;
      }
    }
  }

  .hide-button {
    .button {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>

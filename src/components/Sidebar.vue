<template>
  <div>
    <template v-if="item.children">
      <el-submenu
        v-if="!(item.path!=''&&item.path!=' '&&item.path!='-')&&!item.IsButton"
        :index="item.id+'index'"
        :key="item.id"
      >
        <template slot="title">
          <i
            v-if="item.children&&item.children.length>0&&item.iconCls&&!item.IsButton"
            class="fa"
            :class="item.iconCls"
          ></i>
          <span class="title-name" slot="title">{{item.name}}</span>
        </template>
        <template v-for="child in item.children">
          <!-- 這裡實現自己遞歸嵌套 -->
          <template v-if="!child.IsHide&&!item.IsButton">
            <sidebar
              v-if="child.children&&child.children.length>0"
              :item="child"
              :index="child.id"
              :key="child.id"
            />
            <el-menu-item v-else :key="child.id" :index="child.path">
              <!-- {{child.name}}2 -->
              <i class="fa" :class="child.iconCls"></i>
              <template slot="title">
                <span class="title-name" slot="title">{{child.name}}</span>
              </template>
            </el-menu-item>
          </template>
        </template>
      </el-submenu>
      <template v-else>
        <el-menu-item v-if="!item.IsButton" :index="item.path" :key="item.path+'d'">
          <i class="fa" :class="item.iconCls"></i>
          <template slot="title">
            <span class="title-name" slot="title">{{item.name}}</span>
          </template>
        </el-menu-item>
      </template>
    </template>
    <!-- 沒有子節點，直接輸出 -->
    <template v-else>
      <el-menu-item :index="item.path" :key="item.id+'d'">
        <i class="fa" :class="item.iconCls"></i>
        <template slot="title">
          <span class="title-name" slot="title">{{item.name}}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      //   isCollapse: false
    };
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
      required: false
    },
    item: {
      type: Object,
      required: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang='scss'>
.sideBar {
  border: none;
}
.el-submenu {
  width: 200px;
}
.fa {
  margin-right: 0.5rem;
}
</style>
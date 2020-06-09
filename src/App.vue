<template>
  <div id="app">
    <div class="as" v-if="!$route.meta.NoNeedHome">
      <el-container class="mainLayout">
        <!-- header -->
        <el-header class="mainLayoutHeader">
          <div class="logoBox">文藻日曆系統後台</div>
          <div class="breads">
            <i
              :class="{'activeBar':isCollapse}"
              @click="isCollapse=!isCollapse"
              class="fas fa-bars"
            ></i>

            <!-- breads -->
            <el-breadcrumb separator="/" class="breadItems">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                <router-link :to="item.path" style="color:#fff;cursor:pointer">{{ item.name }}</router-link>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>

          <!-- user -->
          <div class="userBox">
            <el-dropdown trigger="hover">
              <span
                @click="$router.push('/login')"
                class="el-dropdown-link userinfo-inner userStyle"
              >User</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>設置</el-dropdown-item>
                <el-dropdown-item>退出登錄</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-container>
          <el-aside width="200px" class="mainLayoutAside">
            <!-- aside -->
            <el-menu
              :default-active="$route.path"
              class="sideBar"
              :unique-opened="uniqueOp"
              :collapse="isCollapse"
              background-color="#2f3e52"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true"
            >
              <Sidebar
                :isCollapse="isCollapse"
                v-for="(menu) in routes"
                :key="menu.id"
                :item="menu"
              ></Sidebar>
            </el-menu>
          </el-aside>
          <el-main>
            <div class="tags" v-if="showTags">
              <div id="tags-view-container" class="tags-view-container">
                <scroll-pane ref="scrollPane" class="tags-view-wrapper">
                  <router-link
                    v-for="(tag,index) in tagsList"
                    ref="tag"
                    :key="tag.path"
                    :class="{'active': isActive(tag.path)}"
                    :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
                    tag="span"
                    @click.middle.native="closeTags(index)"
                    class="tags-view-item"
                  >
                    {{ tag.title }}
                    <span
                      class="el-icon-close"
                      @click.prevent.stop="closeTags(index)"
                    />
                  </router-link>
                </scroll-pane>
              </div>
            </div>
            <div class="viewHeight">
              <router-view></router-view>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>

    <div v-else>
      <div class="content-az">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
import ScrollPane from "./components/ScrollPane";
export default {
  data() {
    return {
      isCollapse: false,
      uniqueOp: true,
      outerVisible: false,
      innerVisible: false,
      routes: [],
      tagsList: []
    };
  },
  components: {
    Sidebar,
    ScrollPane
  },
  methods: {
    closeAllDilog() {
      this.innerVisible = false;
      this.outerVisible = false;
    },
    // 設置標籤
    setTags(route) {
      if (!route.meta.NoTabPage) {
        const isExist = this.tagsList.some(item => {
          return item.path === route.fullPath;
        });
        !isExist &&
          this.tagsList.push({
            title: route.meta.title,
            path: route.fullPath
            // name: route.matched[1].components.default.name
          });
      }
    },
    isActive(path) {
      return path === this.$route.fullPath;
    },
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);

        this.$store.commit("saveTagsData", JSON.stringify(this.tagsList));
      } else {
        this.$router.push("/");
      }
    }
  },
  watch: {
    // 對router進行監聽，每當訪問router時，對tags的進行修改
    $route(newValue) {
      this.setTags(newValue);

      const tags = this.$refs.tag;
      this.$nextTick(() => {
        if (tags) {
          for (const tag of tags) {
            if (tag.to.path === this.$route.path) {
              this.$refs.scrollPane.moveToTarget(tag, tags);
              // when query is different then update
              // if (tag.to.fullPath !== this.$route.fullPath) {
              //     this.$store.dispatch('tagsView/updateVisitedView', this.$route)
              // }
              break;
            }
          }
        }
      });
    }
  },
  computed: {
    showTags() {
      if (this.tagsList.length > 1) {
        this.$store.commit("saveTagsData", JSON.stringify(this.tagsList));
      }
      return this.tagsList.length > 0;
    }
  },
  mounted() {
    this.routes = JSON.parse(
      window.localStorage.router ? window.localStorage.router : null
    );

    let tags = sessionStorage.getItem("Tags")
      ? JSON.parse(sessionStorage.getItem("Tags"))
      : [];

    if (tags && tags.length > 0) {
      this.tagsList = tags;
    }
  },
  created() {
    this.setTags(this.$route);
    // console.log(this.$route.matched);
  }
};
</script>

<style lang="scss">
$color-primary: #2f3e52;
* {
  padding: 0;
  margin: 0;
  font-family: "微軟正黑體";
}
.mainLayout {
  width: 100%;
  height: 100vh;

  .mainLayoutHeader {
    width: 100%;
    background: $color-primary;
    color: #fff;
    padding: 0;
    display: flex;
  }

  .mainLayoutAside {
    height: calc(100vh - 60px);
    background: $color-primary;
    color: #fff;
  }

  .logoBox {
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-right: 1px solid rgba(238, 241, 146, 0.3);
    font-weight: 700;
  }

  .breads {
    height: 60px;
    display: flex;
    align-items: center;
  }

  .fa-bars {
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 1.5rem;
    transition: 0.3s;

    &.activeBar {
      transform: rotate(90deg);
    }
  }

  .breadItem span {
    color: #fff;
    font-size: 16px;
  }

  .userBox {
    height: 60px;
    line-height: 60px;
    margin-left: auto;
    text-align: center;
    padding: 0 1rem;
  }

  .userStyle {
    color: #fff;
    font-size: 1rem;
  }

  .tags-view-wrapper {
    display: flex;
    align-items: center;
    background: #f0f0f0;
    height: 44px;
    margin-bottom: 12px;
    // margin-left: 1rem;
  }

  .el-main {
    padding: 0;
  }

  .viewHeight {
    height: calc(100% - 56px);
  }

  .tags-view-item {
    margin: 0 0.5rem;
    font-size: 15px;
    border: 1px solid #2f3e52;
    padding: 0 4px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #fff;
      background: #2f3e52;
    }

    &:first-child {
      margin-left: 1rem;
    }

    &.active {
      background: #2f3e52;
      color: #fff;
    }
  }
}
</style>

<template>
  <h1>roles</h1>
</template>

<script>
export default {
  data() {
    return {
      buttonList: []
    };
  },
  methods: {
    getButtonList(routePath, routers) {
      // console.log("1", routers);
      // console.log(routePath);
      const vm = this;
      var buttonList = [];
      routers.forEach(element => {
        if (routePath && element.path) {
          let path = routePath.toLowerCase();
          if (element.path && element.path.toLowerCase() === path) {
            buttonList = element.children;
            vm.buttonList = buttonList;
            return;
          } else if (element.children) {
            this.getButtonList(path, element.children);
          }
        }
      });
      return buttonList;
    }
  },
  mounted() {
    let routers = JSON.parse(window.localStorage.router);
    // ? JSON.parse(window.localStorage.router)
    // : [];
    this.getButtonList(this.$route.path, routers);
  }
};
</script>

<style>
</style>
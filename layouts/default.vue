<script setup lang='ts'>
const mailStore = useMailStore();
</script>

<template>
  <div class="layout">
    <Sidebar />
    <main class="layout-main">
      <section class="main-header">
        <slot name="header" />
      </section>
      <slot />
    </main>
    <Teleport to="body">
      <Transition :duration="500">
        <Drawer v-if="mailStore.isDrawerOpen" />
      </Transition>
    </Teleport>
  </div>
</template>

<style lang='scss' scoped>
.layout {
  display: flex;
  min-height: 100vh;

  &-main {
    flex: 1;
  }
}

.main-header {
  padding: 24px 24px 32px 24px;
  font-size: 32px;
}
</style>
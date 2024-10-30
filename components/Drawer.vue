<script setup lang='ts'>
import { useMailStore } from '~/stores/mail';

const mail = useMailStore()
</script>

<template>
  <div class="drawer">
    <div class="drawer-bg">
    </div>
    <section class="drawer-dialog">
      <div class="drawer-dialog__top">
        <button class="close-btn" @click="mail.close">Close (Esc)</button>
        <MailReadButton />
        <MailArchiveButton />
      </div>

      <h1 class="drawer-title">
        Wave hello with video, reactions and more now in huddles
      </h1>
      <p class="drawer-body">In the early days of the pandemic, audio-only huddles helped recreate the informal
        discussions that
        traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of
        both, working alongside your colleagues is as important as ever.</p>
    </section>
  </div>
</template>

<style lang='scss' scoped>
.drawer {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;

  &-bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 50%;
    z-index: 120;
    padding: 32px;
  }

  &-dialog {
    background-color: white;
    position: fixed;
    right: 0;
    height: 100vw;
    width: 752px;
    z-index: 150;
    padding: 32px;

    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
    }
  }

  &-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  &-body {
    font-size: 14px;
    line-height: 1.4;
  }
}

.close-btn {
  margin-right: auto;
  border: none;
  background-color: transparent;
}
</style>
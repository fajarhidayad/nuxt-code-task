<script setup lang='ts'>
import { useMailStore } from '~/stores/mail';

const mailStore = useMailStore()

const btnRef = ref(undefined)

function handleKey(event: any) {
  if (event.key === 'Escape') {
    mailStore.closeDrawer()
  }
  if (event.key === "a") {
    mailStore.archive(mailStore.currentMail!)
  }
}

onMounted(() => {
  window.addEventListener('keyup', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keyup', handleKey)
})
</script>

<template>
  <div class="drawer" @click="mailStore.closeDrawer">
    <div class="drawer-bg">
    </div>
    <section class="drawer-dialog" @click.stop>
      <div class="drawer-dialog__top">
        <button :ref="btnRef" class="close-btn" @click="mailStore.closeDrawer">Close
          (Esc)</button>
        <MailReadButton @click="mailStore.read(mailStore.currentMail!.id)" />
        <MailArchiveButton type="" :mail="mailStore.currentMail!" />
      </div>

      <h1 class="drawer-title">
        {{ mailStore.currentMail?.title }}
      </h1>
      <p class="drawer-body" v-if="mailStore.currentMail?.body">{{ mailStore.currentMail?.body }}</p>
      <p class="drawer-body__empty" v-else>empty</p>
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
    position: absolute;
    background-color: rgba(0, 0, 0, 0.445);
    top: 0;
    z-index: 120;
    width: 100vw;
    height: 100vh;
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

    &__empty {
      color: #4b55638a;
    }
  }
}

.close-btn {
  margin-right: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease-in-out;

  .drawer-dialog {
    transition: all 0.5s ease-out;
  }

  .drawer-bg {
    transition: all 0.5s ease-out;
  }
}

.v-enter-from,
.v-leave-to {
  .drawer-dialog {
    transform: translateX(100px);
    opacity: 0;
  }

  .drawer-bg {
    opacity: 0
  }
}

.v-enter-to,
.v-leave-from {
  .drawer-dialog {
    transform: translateX(0);
    opacity: 1;
  }

  .drawer-bg {
    opacity: 1
  }
}
</style>
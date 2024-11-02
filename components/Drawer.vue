<script setup lang='ts'>
import { useMailStore } from '~/stores/mail';

const mail = useMailStore()

const btnRef = ref(undefined)

function handleKeyEscape(event: any) {
  if (event.key === 'Escape') {
    mail.close()
  }
}

onMounted(() => {
  window.addEventListener('keyup', handleKeyEscape)
})

onUnmounted(() => {
  window.removeEventListener('keyup', handleKeyEscape)
})
</script>

<template>
  <div class="drawer" @click="mail.close">
    <div class="drawer-bg">
    </div>
    <section class="drawer-dialog">
      <div class="drawer-dialog__top">
        <button :ref="btnRef" class="close-btn" @click="mail.close">Close
          (Esc)</button>
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
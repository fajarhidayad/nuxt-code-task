<script setup lang='ts'>
import { useMailStore } from '~/stores/mail';

definePageMeta({
  title: 'Inbox',
  layout: 'default'
})

const drawerMail = useMailStore()

const mails = [
  {
    title: "Title 1",
    selected: false,
    isRead: false
  },
  {
    title: "Title 2",
    selected: false,
    isRead: false
  },
  {
    title: "Title 3",
    selected: false,
    isRead: true
  },
]
const selectedMail = ref([])

const selectAll = ref(false)
</script>

<template>
  <NuxtLayout>
    <template #header>
      Inbox
    </template>
    <template #default>
      <section style="position: relative;">
        <Title>Inbox</Title>
        <div class="mail-list__head">
          <input type="checkbox" :checked="selectAll" @change="" />
          <strong>Email Selected (12)</strong>
          <MailReadButton />
          <MailArchiveButton />
        </div>

        <ul>
          <MailItem v-for="mail in mails" :checked="mail.selected" :is-read="mail.isRead" @click="drawerMail.open">
            Wave hello with video
          </MailItem>
        </ul>
        <Teleport to="body">
          <Drawer v-if="drawerMail.isOpen" />
        </Teleport>
      </section>
    </template>
  </NuxtLayout>
</template>

<style lang='scss' scoped>
.mail-list {
  &__head {
    display: flex;
    padding: 24px;
    font-size: 14px;
    font-weight: 500;

    & input {
      margin-right: 12px;
    }

    & strong {
      margin-right: auto;
    }

    &-btn {
      display: flex;
      color: #4B5563;
      text-decoration: none;
      margin-left: 40px;

      svg {
        margin-right: 12px;
      }
    }
  }
}
</style>
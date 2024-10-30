<script setup lang='ts'>
definePageMeta({
  title: 'Inbox',
  layout: 'default'
})

const archives = [
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
const selectedArchives = ref([])

const selectAll = ref(false)
</script>

<template>
  <NuxtLayout>
    <template #header>
      Archive
    </template>
    <template #default>
      <Title>Archive</Title>
      <section style="position: relative;">
        <Title>Inbox</Title>
        <div class="mail-list__head">
          <input type="checkbox" :checked="selectAll" @change="" />
          <strong>Email Selected (12)</strong>
          <MailReadButton />
          <MailArchiveButton />
        </div>

        <ul>
          <MailItem v-for="mail in archives" :checked="mail.selected" :is-read="mail.isRead">
            Wave hello with video
          </MailItem>
        </ul>
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
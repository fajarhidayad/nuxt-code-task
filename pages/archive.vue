<script setup lang='ts'>

definePageMeta({
  title: 'Inbox',
  layout: 'default'
})

const mailStore = useMailStore()
const selectedArchives = ref<number[]>([])

const isAllSelected = computed({
  get() {
    if (selectedArchives.value.length !== mailStore.archivedMails.length && mailStore.archivedMails.length > 0) {
      return false;
    } else {
      return true;
    }
  },
  set(value) {
    return value
  }
})

function updateSelectedMail(id: number) {
  if (selectedArchives.value.find(item => item === id)) {
    selectedArchives.value = selectedArchives.value.filter(item => item !== id)
  } else {
    selectedArchives.value.push(id)
  }
}

function toggleSelectAll() {
  if (!isAllSelected.value) {
    selectedArchives.value = []
    for (var mail of mailStore.archivedMails) {
      selectedArchives.value.push(mail.id);
    }
    isAllSelected.value = true
  } else {
    isAllSelected.value = false;
    selectedArchives.value = []
  }
}
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
          <input type="checkbox" :checked="isAllSelected" @click="toggleSelectAll"
            :disabled="mailStore.archivedMails.length < 1">
          <strong v-if="selectedArchives.length > 0">Email Selected ({{ selectedArchives.length }})</strong>
          <strong v-else>Select all</strong>
          <MailReadButton v-if="selectedArchives.length > 0" />
          <!-- <MailArchiveButton v-if="selectedMails.length > 0" :mail="" /> -->
        </div>

        <ul>
          <MailItem v-for="mail in mailStore.archivedMails" :key="mail.id" :mail="mail"
            @@select-mail="updateSelectedMail"
            :is-selected="selectedArchives.find(item => item === mail.id) !== undefined" />
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
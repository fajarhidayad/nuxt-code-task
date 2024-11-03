<script setup lang='ts'>

definePageMeta({
  title: 'Inbox',
  layout: 'default'
})

const mailStore = useMailStore()
const selectedMails = ref<number[]>([]);

const isAllSelected = computed({
  get() {
    if (selectedMails.value.length !== mailStore.mails.length || selectedMails.value.length === 0) {
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
  if (selectedMails.value.find(item => item === id)) {
    selectedMails.value = selectedMails.value.filter(item => item !== id)
  } else {
    selectedMails.value.push(id)
  }
}

function toggleSelectAll() {
  if (!isAllSelected.value) {
    selectedMails.value = []
    for (var mail of mailStore.mails) {
      selectedMails.value.push(mail.id);
    }
    isAllSelected.value = true
  } else {
    isAllSelected.value = false;
    selectedMails.value = []
  }
}

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
          <input type="checkbox" :checked="isAllSelected" @click="toggleSelectAll"
            :disabled="mailStore.mails.length < 1" />
          <strong v-if="selectedMails.length > 0">Email Selected ({{ selectedMails.length }})</strong>
          <strong v-else>Select all</strong>
          <MailReadButton v-if="selectedMails.length > 0" />
          <!-- <MailArchiveButton v-if="selectedMails.length > 0" :mail="" /> -->
        </div>

        <ul>
          <MailItem v-for="(mail) in mailStore.mails" :key="mail.id" :mail="mail"
            :is-selected="selectedMails.find(item => item === mail.id) !== undefined"
            @@select-mail="updateSelectedMail" />
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
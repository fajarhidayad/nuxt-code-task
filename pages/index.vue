<script setup lang='ts'>
definePageMeta({
  title: 'Inbox',
  layout: 'default'
})

interface Mail {
  id: number;
  title: string;
  isRead: boolean;
}

const drawerMail = useMailStore()

const mails = ref<Mail[]>([
  {
    id: 1,
    title: "Title 1",
    isRead: false
  },
  {
    id: 2,
    title: "Title 2",
    isRead: false
  },
  {
    id: 3,
    title: "Title 3",
    isRead: true
  },
])
const selectedMails = ref<number[]>([]);

const isAllSelected = ref<boolean>(false)

function toggleSelectAll() {
  if (!isAllSelected.value) {
    selectedMails.value = []
    for (var mail of mails.value) {
      selectedMails.value.push(mail.id);
    }
    isAllSelected.value = true
  } else {
    isAllSelected.value = false;
    selectedMails.value = []
  }
}

function selectMail() {
  if (selectedMails.value.length !== mails.value.length) {
    isAllSelected.value = false;
  } else {
    isAllSelected.value = true;
  }
  console.log(selectedMails.value);
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
          <input type="checkbox" :checked="isAllSelected" @click="toggleSelectAll" />
          <strong v-if="selectedMails.length > 0">Email Selected ({{ selectedMails.length }})</strong>
          <strong v-else>Select all</strong>
          <MailReadButton v-if="selectedMails.length > 0" />
          <MailArchiveButton v-if="selectedMails.length > 0" />
        </div>

        <ul>
          <li v-for="mail in mails" @click="drawerMail.open" :class="{
            'mail-list__item': true,
            'mail-list__item-read': mail.isRead
          }">
            <input type="checkbox" v-model="selectedMails" :value="mail.id" @click.stop="selectMail" />
            <h3>
              {{ mail.title }}
            </h3>
          </li>
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

  &__item {
    display: flex;
    border-top: 1px solid #E5E7EB;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    padding: 20px 24px;
    width: 100%;
    background-color: transparent;
    cursor: pointer;


    &:hover {
      background-color: #eaeff9;
    }

    &-read {
      background-color: #D1E2FF;
    }

    input {
      margin-right: 20px;
    }

    h3 {
      font-size: 14px;
    }
  }
}
</style>
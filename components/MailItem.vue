<script setup lang='ts'>
import type { Mail } from '~/stores/mail';

interface MailItemProps {
  mail: Mail,
  isSelected: boolean;
}

const mailStore = useMailStore()
const { mail, isSelected } = defineProps<MailItemProps>()
const emits = defineEmits<{
  '@selectMail': [id: number]
}>()

</script>

<template>
  <li @click="() => mailStore.openDrawer(mail)" :class="{
    'mail-list__item': true,
    'mail-list__item-read': mail.isRead
  }">
    <input type="checkbox" :value="mail.id" :checked="isSelected" @click.stop="emits('@selectMail', mail.id)" />
    <h3>
      {{ mail.title }}
    </h3>
  </li>
</template>

<style lang='scss' scoped>
.mail-list__item {
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
    opacity: 50%;
  }

  input {
    margin-right: 20px;
    opacity: 1;
  }

  h3 {
    font-size: 14px;
  }
}
</style>
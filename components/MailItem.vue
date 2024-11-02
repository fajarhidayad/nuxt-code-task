<script setup lang='ts'>
interface MailItemProps {
  isSelected: boolean;
  isRead: boolean;
}

const { isSelected, isRead } = defineProps<MailItemProps>()
const drawerMail = useMailStore()
const selected = ref(isSelected)
</script>

<template>
  <li @click="drawerMail.open" :class="{
    'mail-list__item': true,
    'mail-list__item-read': isRead
  }">
    <input type="checkbox" :value="isSelected" v-model="selected" @click.stop />
    <h3>
      <slot />
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
    background-color: #D1E2FF;
  }

  input {
    margin-right: 20px;
  }

  h3 {
    font-size: 14px;
  }
}
</style>
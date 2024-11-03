<script setup lang='ts'>
const props = defineProps<{ href: string, length?: number, label: string }>()
</script>

<template>
  <NuxtLink :to="props.href" :activeClass="props.length !== undefined ? 'sidebar-link__item-active' : ''"
    class="sidebar-link__item">
    <slot name="icon" />
    <span class="sidebar-link__label">
      {{ props.label }}
    </span>
    <span class="sidebar-link__item-num">{{ props.length }}</span>
  </NuxtLink>
</template>

<style lang='scss' scoped>
.sidebar-link {
  &__item {
    border-radius: 999px;
    padding: 16px 26px;
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-bottom: 12px;
    text-decoration: none;

    &-num {
      margin-left: auto;
    }

    &-active {
      background-color: #D6E2FB;
    }

    &:hover {
      background-color: #D6E2FB;
    }
  }

  &__label {
    margin-left: 12px;
  }
}
</style>
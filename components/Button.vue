<template>
  <button class="Button" v-bind="$attrs">
    <slot name="icon" />
    <slot />
  </button>
</template>
<style lang="scss" scoped>
.Button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  text-wrap: nowrap;

  &:hover {
    color: $primary-color;
  }
}
</style>

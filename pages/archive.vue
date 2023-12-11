<template>
  <div class="Homepage">
    <h1 class="Homepage-Title">Archive</h1>
    <EmailList :emails="emailStore.getArchived" />
  </div>
</template>

<script lang="ts" setup>
const emailStore = useEmailStore();
</script>

<style lang="scss" scoped>
.Homepage {
  display: flex;
  padding-top: 24px;
  flex-direction: column;
  gap: 32px;
  flex: 1 0 0;

  &-Title {
    margin: 0 24px;
    text-align: start;
  }
}
</style>

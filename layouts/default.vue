<template>
  <div>
    <NavMenu />
    <div class="Container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Container {
  padding-left: max(25%, 260px);
}
</style>

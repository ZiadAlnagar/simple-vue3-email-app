<template>
  <div class="NavMenu flex flex-col">
    <div class="NavMenu-Top">
      <NuxtLink to="/" class="NavMenu-Logo">
        <IconLogo class="Logo-Icon" />
      </NuxtLink>
      <div class="NavMenu-Links p-2">
        <NuxtLink
          to="/"
          class="NavMenu-Link"
          active-class="NavMenu-Link--active"
        >
          <span>
            <IconInbox />
            inbox
          </span>
          {{ emailStore.getInboxSize }}
        </NuxtLink>
        <NuxtLink
          to="/archive"
          class="NavMenu-Link"
          active-class="NavMenu-Link--active"
        >
          <span>
            <IconArchive />
            Archive
          </span>
          {{ emailStore.getArchivedSize }}
        </NuxtLink>
      </div>
    </div>
    <div class="NavMenu-Bottom">
      <Button class="Logout" @click.prevent="handleEasterEgg">
        <template #icon>
          <IconLogout />
        </template>
        <span>Logout</span>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emailStore = useEmailStore();

const handleEasterEgg = () => alert("Yay! You found an easter egg 😉");
</script>

<style lang="scss" scoped>
.NavMenu {
  position: fixed;
  display: flex;
  width: 25%;
  min-width: 260px;
  min-height: 300px;
  height: 100vh;
  max-height: 100vh;
  padding: 20px 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  border: 1px solid #e5e7eb;
  background: #f8fafc;

  &-Top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    align-self: stretch;
  }

  &-Bottom {
    width: 100%;
    padding: 12px 24px;
    color: $secondary-color;

    .Logout {
      span {
        margin-bottom: 2px;
      }
    }
  }

  &-Logo {
    display: flex;
    width: 100%;
    padding-inline: 24px;
  }

  &-Links {
    display: flex;
    padding: 0px 10px;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    text-transform: capitalize;
  }

  &-Link {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
    text-wrap: nowrap;
    padding: 12px 24px;
    justify-content: space-between;
    border-radius: 54px;
    transition: background 150ms ease-in-out;

    &:hover {
      background: lighten(#d6e2fb, 5);
    }

    &--active {
      background: #d6e2fb;

      &:hover {
        background: #d6e2fb;
      }
    }

    span {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
}
</style>

<template>
  <div class="EmailView">
    <div class="Overlay" @click.prevent="closeView" />
    <div class="EmailView-Panel">
      <div class="EmailView-Actions">
        <Button @click.prevent="closeView">
          <template #icon>
            <IconXMark />
          </template>
          Close (Esc)
        </Button>
        <div class="Email-Actions">
          <Button @click.prevent="dispatcher([email.id], 'isRead')">
            <template #icon>
              <IconOpenMail />
            </template>
            Mark as read (r)
          </Button>
          <Button @click.prevent="handleArchiveClick(email.id)">
            <template #icon>
              <IconTrash />
            </template>
            Archive (a)
          </Button>
        </div>
      </div>
      <div class="EmailView-Content">
        <h2 class="EmailView-Subject">
          {{ email.subject }}
        </h2>
        <p class="EmailView-Message">
          {{ email.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Email } from "~/types/email";

interface Props {
  email: Email;
}
const props = defineProps<Props>();

const emit = defineEmits(["closeView"]);

const closeView = () => emit("closeView");

useEmailKeyboardActions({ closeView }, props.email.id);

const dispatcher = useEmailDispatcher();

const handleArchiveClick = (id: number) => {
  dispatcher([id], "archive");
  closeView();
};
</script>

<style lang="scss" scoped>
.EmailView {
  position: fixed;
  z-index: 5;
  inset: 0;
  width: 100%;
  height: 100%;

  &-Panel {
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    z-index: 15;
    display: flex;
    min-width: 648px;
    width: 50%;
    height: 100vh;
    padding: 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    flex-shrink: 0;
    animation: slide 150ms ease-out both;
  }

  &-Actions {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: $secondary-color;

    .Email-Actions {
      display: flex;
      align-items: center;
      gap: 40px;
    }
  }

  &-Content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-Subject {
    color: $primary-color;
    font-weight: 500;
    font-size: 20px;
    margin: 0;
  }

  &-Message {
    color: $secondary-color;
    font-weight: 500;
    margin: 0;
  }

  .Overlay {
    position: absolute;
    z-index: 10;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(76, 87, 100, 0.8);
    animation: fade 150ms ease-in-out both;
  }
}
</style>

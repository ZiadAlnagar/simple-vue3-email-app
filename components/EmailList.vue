<template>
  <div class="EmailList">
    <TopNav :emails="emails" :selected="getSelected" />
    <EmailView
      v-if="isEmailOpen"
      :is-email-open="isEmailOpen"
      :email="emailRef"
      @close-view="closeView"
    />
    <div class="EmailList-Container">
      <Button
        v-for="email in emails"
        :key="email.id"
        class="EmailList-Item"
        :class="{ 'EmailList-Item--isUnread': !email.isRead }"
        @click.prevent="openView(email)"
      >
        <input
          v-model="email.isChecked"
          type="checkbox"
          class="Checkbox"
          @click.stop=""
        />
        {{ email.subject }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Email } from "~/types/email";

interface Props {
  emails: Email[];
}
const props = defineProps<Props>();

const isEmailOpen: Ref<boolean> = ref(false);
const emailRef: Ref<Email> = ref({
  id: -1,
  folder: "INBOX",
  isRead: true,
  message: "",
  subject: "",
  isChecked: false,
});

const getSelected = computed(() =>
  props.emails.filter(({ isChecked }) => isChecked === true),
);

const openView = (data: Email) => {
  emailRef.value = data;
  isEmailOpen.value = true;
};

const closeView = () => (isEmailOpen.value = false);
</script>

<style lang="scss" scoped>
.EmailList {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &-Container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 80vh;
  }

  &-Item {
    display: flex;
    height: 60px;
    padding: 20px 24px;
    align-items: center;
    border-top: 1px solid #e5e7eb;
    transition: background 150ms ease-in-out;

    &:last-child {
      border-bottom: 1px solid #e5e7eb;
    }

    &:hover {
      background: #d1e2ff;
    }

    &--isUnread {
      background: #f3f6fb;
    }

    .Checkbox {
      width: 16px;
      height: 16px;
    }
  }
}
</style>

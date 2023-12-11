<template>
  <div class="TopNav">
    <div class="TopNav-Selected">
      <input
        id="selected"
        v-model="isChecked"
        type="checkbox"
        @change="handleSelectAll"
      />
      Email Selected ({{ selected.length }})
    </div>
    <div class="TopNav-Actions">
      <Button
        class="TopNav-Action"
        @click.prevent="dispatcher(selectedEmailIds, 'isRead')"
      >
        <template #icon>
          <IconOpenMail />
        </template>
        Mark as read (r)
      </Button>
      <Button
        class="TopNav-Action"
        @click.prevent="dispatcher(selectedEmailIds, 'archive')"
      >
        <template #icon>
          <IconTrash />
        </template>
        Archive (a)
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Email } from "~/types/email";

interface Props {
  emails: Email[];
  selected: Email[];
}
const props = defineProps<Props>();

const dispatcher = useEmailDispatcher();

const { setIsChecked } = useEmailStore();

const allEmailIds = computed(() => props.emails.map(({ id }) => id));
const selectedEmailIds = computed(() => props.selected.map(({ id }) => id));

const { replaceIds } = useEmailKeyboardActions();

const isChecked: Ref<boolean> = ref(false);

const handleSelectAll = () => {
  if (!isChecked.value) {
    setIsChecked(allEmailIds.value, false);
  } else setIsChecked(allEmailIds.value, true);

  replaceIds(selectedEmailIds.value);
};

watch(selectedEmailIds, (to, from) => {
  if (to !== from) {
    replaceIds(selectedEmailIds.value);
  }
});
</script>

<style lang="scss" scoped>
.TopNav {
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-wrap: nowrap;
  min-width: 640px;

  &-Selected {
    display: flex;
    gap: 12px;
    font-weight: 500;
    align-items: center;

    #selected {
      width: 16px;
      height: 16px;
      margin: 0;
    }
  }

  &-Actions {
    display: flex;
    gap: 40px;
    color: $secondary-color;
  }
}
</style>

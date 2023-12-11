import { useEmailDispatcher } from "./EmailDispatcher";

export const useEmailKeyboardActions = (
  options?: { closeView?: Function; setIsChecked?: Function },
  id?: number,
) => {
  const { closeView, setIsChecked } = options ?? {};

  const idsRef: Ref<number[]> = ref([]);

  if (id) idsRef.value = [id];

  const handleKeydown = (e: KeyboardEvent) => {
    const { key } = e;

    const dispatcher = useEmailDispatcher();

    if (key === "Escape" && closeView) {
      closeView();
    }

    if (key === "r") {
      dispatcher(idsRef.value, "isRead");
    }

    if (key === "a") {
      dispatcher(idsRef.value, "archive");
      const { resetChecked } = useEmailStore();

      if (closeView) return closeView();

      resetChecked();

      if (setIsChecked) setIsChecked();
    }
  };

  onMounted(() => {
    document.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
  });

  return {
    replaceIds: (ids: number[]) => {
      idsRef.value = [...ids];
    },
  };
};

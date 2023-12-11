export const useEmailDispatcher =
  () => (ids: number[], type: "isRead" | "archive") => {
    const { setIsRead, setFolder } = useEmailStore();

    if (type === "isRead") {
      setIsRead(ids, true);
    }

    if (type === "archive") {
      setFolder(ids, "ARCHIVE");
    }
  };

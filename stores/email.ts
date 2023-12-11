import { defineStore } from "pinia";
import data from "~/emails.json";
import type { Email, EmailFolder } from "~/types/email";

export const useEmailStore = defineStore({
  id: "emailStore",
  state: () => ({
    emails: data.emails as Email[],
  }),
  actions: {
    setFolder(ids: number[], folder: EmailFolder) {
      ids.forEach((id) => {
        const index = this.emails.findIndex((email) => email.id === id);

        if (index < 0) return;

        this.emails[index].folder = folder;
      });
    },
    setIsRead(ids: number[], isRead: boolean) {
      ids.forEach((id) => {
        const index = this.emails.findIndex((email) => email.id === id);

        if (index < 0) return;

        this.emails[index].isRead = isRead;
      });
    },
    setIsChecked(ids: number[], isChecked: boolean) {
      ids.forEach((id) => {
        const index = this.emails.findIndex((email) => email.id === id);

        if (index < 0) return;

        this.emails[index].isChecked = isChecked;
      });
    },
    getEmail(id: number) {
      return this.emails.find((email) => email.id === id);
    },
  },
  getters: {
    getInbox: function (state): Email[] {
      return state.emails.filter(({ folder }) => folder === "INBOX");
    },
    getArchived: function (state): Email[] {
      return state.emails.filter(({ folder }) => folder === "ARCHIVE");
    },
    getInboxSize: function (): number {
      return this.getInbox.length;
    },
    getArchivedSize: function (): number {
      return this.getArchived.length;
    },
  },
});

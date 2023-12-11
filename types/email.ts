export type EmailFolder = "INBOX" | "ARCHIVE";

export interface Email {
  id: number;
  subject: string;
  message: string;
  folder: EmailFolder;
  isRead: boolean;
  isChecked: boolean;
}

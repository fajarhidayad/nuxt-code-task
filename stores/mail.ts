import { defineStore } from 'pinia';

export interface Mail {
  id: number;
  title: string;
  body: string;
  isRead: boolean;
}

interface MailStore {
  mails: Mail[];
  archivedMails: Mail[];
  isDrawerOpen: boolean;
  currentMail: undefined | Mail;
}

export const useMailStore = defineStore('mailStore', {
  state: (): MailStore => ({
    mails: [
      {
        id: 1,
        title: 'Wave hello with video, reactions and more now in huddles',
        isRead: false,
        body: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
      },
      {
        id: 2,
        title:
          '[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file',
        isRead: false,
        body: 'lorem ipsum',
      },
      {
        id: 3,
        title: 'Some mail title',
        isRead: true,
        body: '',
      },
    ],
    archivedMails: [],
    currentMail: undefined,
    isDrawerOpen: false,
  }),
  actions: {
    openDrawer(mail: Mail) {
      this.isDrawerOpen = true;
      this.currentMail = mail;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
      this.currentMail = undefined;
    },
    archive(mail: Mail) {
      this.archivedMails = [...this.archivedMails, mail];
      this.mails = this.mails.filter((item) => item.id !== mail.id);
      this.closeDrawer();
    },
    read(id: number) {
      this.mails = this.mails.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isRead: true,
          };
        }
        return item;
      });
    },
    deleteInbox(id: number) {
      this.mails.filter((mail) => mail.id !== id);
      this.closeDrawer();
    },
    deleteArchive(id: number) {
      this.archivedMails.filter((mail) => mail.id !== id);
      this.closeDrawer();
    },
  },
});

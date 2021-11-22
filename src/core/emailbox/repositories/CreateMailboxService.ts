import { IMailbox } from '../application/CreateMailboxController';

class CreateMailboxService {
  async create(mailbox: IMailbox) {
    return mailbox;
  }
}

export { CreateMailboxService };

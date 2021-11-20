interface IMailbox {
  mb_id: 'string';
  mb_name: 'string';
  mb_email: 'string';
  mb_password: 'string';
  mb_host: 'string';
  mb_port: 'string';
  mb_secure: boolean;
}

class CreateMailboxService {
  async create(mailbox: IMailbox) {
    return mailbox;
  }
}

export { CreateMailboxService };

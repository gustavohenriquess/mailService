import { IEmailbox } from '../application/CreateEmailBoxController';

class CreateEmailBoxService {
  async create(mailbox: IEmailbox) {
    return mailbox;
  }
}

export { CreateEmailBoxService };

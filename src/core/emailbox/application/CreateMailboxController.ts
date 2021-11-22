import { Request, Response } from 'express';
import { uuid } from 'uuidv4';

import { CreateMailboxService } from '../repositories/CreateMailboxService';
import { created } from '../../infra/HttpResponse';

export interface IMailbox {
  mb_id: 'string';
  mb_name: 'string';
  mb_email: 'string';
  mb_password: 'string';
  mb_host: 'string';
  mb_port: 'string';
  mb_secure: boolean;
}

class CreateMailboxController {
  async create(request: Request, response: Response) {
    let { mb_id, mb_name, mb_email, mb_password, mb_host, mb_port, mb_secure } =
      request.body;

    if (!mb_id) mb_id = uuid();

    const mailbox: IMailbox = {
      mb_id,
      mb_name,
      mb_email,
      mb_password,
      mb_host,
      mb_port,
      mb_secure,
    };

    await new CreateMailboxService().create(mailbox);
    const result = created();

    return response.status(result.statusCode).json(result.body);
  }
}

export { CreateMailboxController };

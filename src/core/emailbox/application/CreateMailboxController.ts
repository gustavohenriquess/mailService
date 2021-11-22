import { Request, Response } from 'express';
import { v4 } from 'uuid';

import { CreateMailboxService } from '../repositories/CreateMailboxService';
import { clientError, created } from '../../infra/HttpResponse';
import { validEmail } from '../../infra/validations/email';

export interface IMailbox {
  mb_id: 'string';
  mb_name: 'string';
  mb_email: 'string';
  mb_password: 'string';
  mb_host: 'string';
  mb_port: number;
  mb_secure: boolean;
}

class CreateMailboxController {
  async create(request: Request, response: Response) {
    let { mb_id, mb_name, mb_email, mb_password, mb_host, mb_port, mb_secure } =
      request.body;

    if (!mb_id) mb_id = v4();

    if (!validEmail(mb_email)) {
      let result = await clientError(new Error('Invalid email'));
      return response.status(result.statusCode).json(result.body);
    }

    if (typeof mb_secure !== 'boolean') {
      let result = await clientError(new Error('Invalid secure value'));
      return response.status(result.statusCode).json(result.body);
    }

    if (typeof mb_port !== 'number') {
      let result = await clientError(new Error('Invalid secure value'));
      return response.status(result.statusCode).json(result.body);
    }

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
    let result = await created();

    return response.status(result.statusCode).json(result.body);
  }
}

export { CreateMailboxController };

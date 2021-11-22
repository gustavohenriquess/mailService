import { Request, Response } from 'express';
import { v4 } from 'uuid';

import { CreateMailboxService } from '../repositories/CreateMailboxService';
import { clientError, created } from '../../infra/HttpResponse';
import { validEmail } from '../../infra/validations/email';

export interface IMailbox {
  eb_id: 'string';
  eb_name: 'string';
  eb_email: 'string';
  eb_password: 'string';
  eb_host: 'string';
  eb_port: number;
  eb_secure: boolean;
  eb_active: boolean;
}

class CreateMailboxController {
  async create(request: Request, response: Response) {
    let {
      eb_id,
      eb_name,
      eb_email,
      eb_password,
      eb_host,
      eb_port,
      eb_secure,
      eb_active,
    } = request.body;

    if (!eb_id) eb_id = v4();
    if (!eb_active) eb_active = true;

    if (!validEmail(eb_email)) {
      let result = await clientError(new Error('Invalid email'));
      return response.status(result.statusCode).json(result.body);
    }

    if (typeof eb_secure !== 'boolean') {
      let result = await clientError(new Error('Invalid secure value'));
      return response.status(result.statusCode).json(result.body);
    }

    if (typeof eb_port !== 'number') {
      let result = await clientError(new Error('Invalid secure value'));
      return response.status(result.statusCode).json(result.body);
    }

    const mailbox: IMailbox = {
      eb_id,
      eb_name,
      eb_email,
      eb_password,
      eb_host,
      eb_port,
      eb_secure,
      eb_active,
    };

    await new CreateMailboxService().create(mailbox);
    let result = await created();

    return response.status(result.statusCode).json(result.body);
  }
}

export { CreateMailboxController };

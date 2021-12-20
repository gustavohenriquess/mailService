import { Request, Response } from 'express';
import { v4 } from 'uuid';

import { CreateEmailBoxService } from '../repositories/CreateEmailBoxService';
import * as httpResponse from '../../infra/HttpResponse';
import { validEmail } from '../../infra/validations/email';

export interface IEmailbox {
  eb_id: 'string';
  eb_name: 'string';
  eb_email: 'string';
  eb_password: 'string';
  eb_host: 'string';
  eb_port: number;
  eb_secure: boolean;
  eb_active: boolean;
}

export class CreateEmailBoxController {
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
      let result = await httpResponse.clientError(new Error('Invalid email'));
      return response.status(result.statusCode).json(result.body);
    }

    if (typeof eb_secure !== 'boolean') {
      let result = await httpResponse.clientError(
        new Error('Invalid secure value'),
      );
      return response.status(result.statusCode).json(result.body);
    }

    if (typeof eb_port !== 'number') {
      let result = await httpResponse.clientError(
        new Error('Invalid secure value'),
      );
      return response.status(result.statusCode).json(result.body);
    }

    const mailbox: IEmailbox = {
      eb_id,
      eb_name,
      eb_email,
      eb_password,
      eb_host,
      eb_port,
      eb_secure,
      eb_active,
    };

    await new CreateEmailBoxService().create(mailbox);
    let result = await httpResponse.created();

    return response.status(result.statusCode).json(result.body);
  }
}

import { Request, Response } from 'express';
import { v4 } from 'uuid';

import { CreateEmailBoxService } from '../repositories/CreateEmailBoxService';
import * as httpResponse from '../../infra/HttpResponse';
import { validEmail } from '../../infra/validations/email';

export interface IEmailbox {
  id: 'string';
  name: 'string';
  email: 'string';
  password: 'string';
  host: 'string';
  port: number;
  secure: boolean;
  active: boolean;
}

export class CreateEmailBoxController {
  async create(request: Request, response: Response) {
    let { id, name, email, password, host, port, secure, active } =
      request.body;

    if (!id) id = v4();
    if (!active) active = true;

    if (!validEmail(email)) {
      let result = await httpResponse.clientError(new Error('Invalid email'));
      return response.status(result.statusCode).json(result.body);
    }

    if (typeof secure !== 'boolean') {
      let result = await httpResponse.clientError(
        new Error('Invalid secure value'),
      );
      return response.status(result.statusCode).json(result.body);
    }

    if (typeof port !== 'number') {
      let result = await httpResponse.clientError(
        new Error('Invalid secure value'),
      );
      return response.status(result.statusCode).json(result.body);
    }

    const mailbox: IEmailbox = {
      id,
      name,
      email,
      password,
      host,
      port,
      secure,
      active,
    };

    await new CreateEmailBoxService().create(mailbox);
    let result = await httpResponse.created();

    return response.status(result.statusCode).json(result.body);
  }
}

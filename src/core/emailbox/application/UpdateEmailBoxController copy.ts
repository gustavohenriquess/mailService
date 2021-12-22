import { Request, Response } from 'express';
import { IEmailbox } from './CreateEmailBoxController';

export class UpdateEmailBoxController {
  update(request: Request, response: Response) {
    let { id, name, email, password, host, port, secure, active } =
      request.query as unknown as IEmailbox;

    return response.json(request.query);
  }
}

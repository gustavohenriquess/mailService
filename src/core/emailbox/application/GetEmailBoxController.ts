import { Request, Response } from 'express';
import { IEmailbox } from './CreateEmailBoxController';

interface IGetEmailBox extends IEmailbox {
  limit: Number;
  page: Number;
}

export class GetEmailBoxController {
  get(request: Request, response: Response) {
    let { id, name, active, limit, page } =
      request.query as unknown as IEmailbox as IGetEmailBox;

    if (limit == 0) limit = 10;
    if (page == 0) page = 1;

    return response.json(request.query);
  }
}

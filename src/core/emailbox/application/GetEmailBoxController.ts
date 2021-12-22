import { Request, Response } from 'express';
import { IEmailBox } from '../interface/IEmailBox';
import { IGetEmailBox } from '../interface/IGetEmailBox';

export class GetEmailBoxController {
  get(request: Request, response: Response) {
    let { id, name, active, limit, page } =
      request.query as unknown as IEmailBox as IGetEmailBox;

    if (limit == 0) limit = 10;
    if (page == 0) page = 1;

    return response.json(request.query);
  }
}

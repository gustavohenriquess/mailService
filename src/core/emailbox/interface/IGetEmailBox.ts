import { IEmailBox } from './IEmailBox';

export interface IGetEmailBox extends IEmailBox {
  limit: Number;
  page: Number;
}

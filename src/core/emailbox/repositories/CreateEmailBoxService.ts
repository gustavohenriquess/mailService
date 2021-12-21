import { IEmailbox } from '../application/CreateEmailBoxController';
import PrismaClient from '../../infra/prisma';

export class CreateEmailBoxService {
  async create(emailBox: IEmailbox) {
    PrismaClient.emailBox
      .create({
        data: emailBox,
      })
      .catch((err) => {
        console.error(err);
      })
      .then((emailBox) => {
        return;
      });
  }
}

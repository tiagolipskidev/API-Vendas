import AppError from '@shared/erros/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/user';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IORequest {
  user_id: string;
}

class ShowProfileService {
  public async execute({ user_id }: IORequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError(`User ${user_id} nor found!`);
    }

    return user;
  }
}

export default ShowProfileService;

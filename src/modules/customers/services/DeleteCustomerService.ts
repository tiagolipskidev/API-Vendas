import AppError from '@shared/erros/AppError';
import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IORequest {
  id: string;
}

class DeleteCustomer {
  public async execute({ id }: IORequest): Promise<void> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError(`customer ${id} nor found!`);
    }

    await customersRepository.remove(customer);
  }
}

export default DeleteCustomer;

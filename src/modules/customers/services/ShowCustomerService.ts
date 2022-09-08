import AppError from '@shared/erros/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IORequest {
  id: string;
}

class ShowCustomer {
  public async execute({ id }: IORequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError(`customer ${id} nor found!`);
    }

    return customer;
  }
}

export default ShowCustomer;

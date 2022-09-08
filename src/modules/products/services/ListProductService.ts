import RedisCache from '@shared/cache/RedisCache';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from './../typeorm/repositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const rediscache = new RedisCache();

    const products = await productsRepository.find();

    await rediscache.save('chave', 'valor');

    return products;
  }
}

export default ListProductService;

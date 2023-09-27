import logger from '../logger';
import ItemRepository from '../repositories/itemRepository';

class ItemService {
  retrieve = async () => {
    logger.info('retrieving items');
    return await ItemRepository.retrieve();
  };
}

export default new ItemService();

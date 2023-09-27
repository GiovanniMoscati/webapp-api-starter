import database from '../database';
import { APIError500 } from '../errors';
import { Item } from '../types/itemTypes';
import { removeUndefined } from '../utils';

class ItemRepository {
  fromSql = (sqlResult: any): Item => {
    return {
      id: sqlResult.id,
      userId: sqlResult.userId,
      brand: sqlResult.brand,
      description: sqlResult.description,
      type: sqlResult.type,
      price: sqlResult.price,
      size: sqlResult.size,
    };
  };

  toSql = (job: Partial<Item>): any => {
    const sqlJob: any = {
      id: job.id,
      userId: job.userId,
      brand: job.brand,
      description: job.description,
      type: job.type,
      price: job.price,
      size: job.size,
    };

    return removeUndefined(sqlJob);
  };
  retrieve = async () => {
    const query = `SELECT * FROM items`;
    try {
      const [result] = await database.query<any>(query);
      return Array.isArray(result) ? result.map(this.fromSql) : result ? [this.fromSql(result)] : [];
    } catch (e) {
      throw new APIError500(e.message);
    }
  };
}

export default new ItemRepository();

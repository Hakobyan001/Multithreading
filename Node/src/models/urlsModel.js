// NPM Modules

import PSQLStorage from '../storage/psql.storage';

class UrlsModel {
  // // Methods
  static async getUrls(offset, limit) {
    const { knex } = PSQLStorage;
    var urls = await knex
      .from('links')
      .select('domain', 'id')
      .orderBy('id')
      .offset(offset)
      .limit(limit)
      .then((rows) => rows);
    return urls;
  }
}
export default UrlsModel;

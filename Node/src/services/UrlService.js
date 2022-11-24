import fetch from 'node-fetch';
import { UrlsModel } from '../models';
import PSQLStorage from '../storage/psql.storage';

const array = [];

class UrlService {
  static async checkUrls(offset, limit) {
    const items = await UrlsModel.getUrls(offset, limit);
    const invalidIds = this.getInvalidUrls(items);
    return invalidIds;
  }
  //Adding https to Urls
  static buildUrlFromDomains(domain) {
    return `https://${domain}`;
  }
  static async getInvalidUrls(urls) {
    try {
      const startTime = new Date();
      const result = await Promise.allSettled(urls.map((item) => {
        const url = this.buildUrlFromDomains(item.domain);
         return fetch( url );
      }));
      for (let i = 0; i < result.length; i += 1) {
        console.log(result[i].status);
        if (result[i].status == 'fulfilled') {
          console.log(i);
        } else {
          console.log('Rejected', i);
          array.push(i);
          console.log(array);
          const { knex } = PSQLStorage;
          knex
            .from('links')
            .whereIn('id', array)
            .update({ status: 'passive' }) 
            .then((rows) => {
              // console.log('Table updated');
              for(let row in rows){
                console.log(row);
              }
            });
        }
      }
      const endTime = new Date();
      console.log((endTime - startTime) / 1000 + 's');
       
      } catch (e) {
      console.log(e);
    }
  }
}

export default UrlService;

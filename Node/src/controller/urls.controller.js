import UrlService from '../services/UrlService';

export default class UrlsController {
  static async getAllUrls(req, res, next) {
    const { offset, limit } = await req.query;
      const url = await UrlService.checkUrls(offset, limit);
  }
}

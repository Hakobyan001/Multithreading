import express from 'express';

import UrlsController from '../controller/urls.controller';

const router = express.Router();

router.get('/urls/all', UrlsController.getAllUrls);

export default router;

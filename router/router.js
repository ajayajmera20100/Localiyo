const route = require('express').Router();
const controller =require('../controllers/controller');
const store = require('../middleware/multer');
require('../src/app')

// route.get('/',controller.home);
// route.post('/feedimg',store.array('images'),controller.uploads);
// route.post('/feed:uname',isAuth,store.array('images'),controller.uploads);
// route.get('/feed',controller.feed);
module.exports=route;
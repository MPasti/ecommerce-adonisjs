/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const StoreItemController = () => import('#controllers/StoreItemController')

router.on('/').render('pages/home')

router.get('/products', [StoreItemController,'getStoreItems'])

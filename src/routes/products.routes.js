import { Router } from "express"
import * as productsCtrl from '../controllers/products.controller'

const router = Router()

router.get('/', productsCtrl.getProducts)

router.post('/', productsCtrl.createProduct)

router.get('/:productId', productsCtrl.getProductsById)

router.put('/:productId', productsCtrl.updateProductsById)

router.delete('/:productId', productsCtrl.deleteProductsById)

export default router
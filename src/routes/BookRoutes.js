import { Router } from 'express'
import BookController from '../controllers/BookController'

const router = Router()

router.post('/books', BookController.addNew)
router.get('/books', BookController.getAll)
router.get('/books/:id', BookController.getOne)
router.put('/books/:id', BookController.update)
router.delete('/books/:id', BookController.delete)

export default router
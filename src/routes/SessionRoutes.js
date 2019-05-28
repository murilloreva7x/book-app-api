import { Router } from 'express'
import SessionController from '../controllers/SessionController'

const router = Router()

router.post('/sessions', SessionController.login)
export default router
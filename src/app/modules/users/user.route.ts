import express from 'express'
import userController from './user.controller'

const router = express.Router()

router.get('')
router.post('/create-user',userController.createUser)
router.put('')
router.patch('')
router.delete('')

export default router
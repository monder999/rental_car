import { Router } from 'express'
import AuthRoutes from './auth.route.js'
import UserRoutes from './user.route.js'
import RoleRoutes from './role.route.js'
import VehicaleRoutes from './vehicale.route.js'

// Middleware
import AuthMiddleware from '../middlewares/auth.middlewares.js'

const router = Router()

//Health Checker
router.use('/health', (_req, res) => res.status(200).json({ status: 'ok' }))

// Application Routes
router.use('/api/v1/auth', AuthRoutes)
router.use('/api/v1/users', AuthMiddleware.authenticate, UserRoutes)
router.use('/api/v1/roles', AuthMiddleware.authenticate, RoleRoutes)
router.use('/api/v1/vehicales', AuthMiddleware.authenticate, VehicaleRoutes)

// Module Exports
export default router

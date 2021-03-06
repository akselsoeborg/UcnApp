import FrontPage from '../components/FrontPage'
import Users from '@/components/Users'
import SingleUser from '../components/SingleUser'
import Pricing from '../components/Pricing'
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'
import MonthlyMeasurements from '../components/MonthlyMeasurements'

  const routes = [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: SingleUser,
      props: true,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/users/',
      component: Users
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/pricing',
      component: Pricing
    },
    {
      path: '/user/:userId/monthly',
      name: 'monthly',
      component: MonthlyMeasurements
    }
  ]

  export default routes
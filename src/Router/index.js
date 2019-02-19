import App from '@/App';
import Content from '@/Components/Content/Views/Content';
import DashBoardView from '@/Components/DashBoard/Views/DashBoardView';
import Home from '@/Components/Home/Views/Home';
import NotFound from '@/Components/NotFound/Views/NotFound';
import SignInContainer from '@/Components/SignIn/Container';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
        routes: [
          {
            path: '',
            component: Content,
          },
        ],
      },
      {
        path: '/signin',
        component: SignInContainer,
      },
      {
        path: '/dashboard',
        component: DashBoardView,
      },
      {
        path: '',
        component: NotFound,
      },
    ],
  },
];

export default routes;

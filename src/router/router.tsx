import { createBrowserRouter } from 'react-router-dom';

import { paths } from '~/router/paths';

import Home from '../pages/Home';

export const browserRouter = createBrowserRouter([{ path: paths.home, element: <Home /> }]);

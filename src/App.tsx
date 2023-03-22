import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import router from './router';

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

function App() {
  return <RouterProvider router={router} />;
}

export default App;

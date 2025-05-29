import { BrowserRouter } from 'react-router-dom';

import { RouterOutlet } from './app/core/modules/custom-router-dom/RouterOutlet';
import appRoutes from './app/app.route';

import { Storage } from './app/shared/contexts/storage.context';
import { ToastProvider } from './app/shared/contexts/toast.context';

import './stylesheet/style.scss';

function App() {
  return (
    <ToastProvider>
      <Storage>
        <BrowserRouter>
          <RouterOutlet routes={appRoutes} />
        </BrowserRouter>
      </Storage>
    </ToastProvider>
  );
}

export default App;

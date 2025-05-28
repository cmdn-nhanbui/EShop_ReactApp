import { BrowserRouter } from 'react-router-dom'
import { RouterOutlet } from './app/core/modules/custom-router-dom/RouterOutlet'
import appRoutes from './app/app.route'
import './stylesheet/style.scss'
import { Storage } from './app/shared/contexts/storage.context'
import { ToastProvider } from './app/shared/contexts/toast.context'

function App() {
  return (
    <ToastProvider>
      <Storage>
        <BrowserRouter>
          <div className='app'>
            <RouterOutlet routes={appRoutes} />
          </div>
        </BrowserRouter>
      </Storage>
    </ToastProvider>
  )
}

export default App

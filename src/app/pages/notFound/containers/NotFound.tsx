import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../constants/routes'
import { Button } from '../../../shared/components/Button'

const NotFound = () => {
  return (
    <>
      <div className='cart-header'></div>
      <main>
        <div className='notfound container'>
          <div className='notfound-404'>
            <h1 className='notfound-status'>404</h1>
          </div>
          <h2 className='notfound-title'>Oops! This Page Could Not Be Found</h2>
          <p className='notfound-description'>
            Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily
            unavailable
          </p>
          <div className='notfound-navigate'>
            <Link to={ROUTES.root}>
              <Button rounded outlined>
                Go to home page
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound

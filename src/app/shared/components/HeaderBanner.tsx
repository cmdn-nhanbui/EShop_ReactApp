import { Icon } from './Icons'

export const HeaderBanner = () => {
  return (
    <>
      <section className='section header-banner'>
        <div className='header-banner-overlay'></div>
        <div className='header-banner-main'>
          <div className='header-banner-content'>
            <div className='container banner-container'>
              <p className='header-banner-title'>
                <span>Sale of the</span>
                <br />
                <span className='text-primary'>summer </span>
                <br />
                <span>collection</span>
              </p>
              <a href='/shops'>
                <button className='flex items-center button-shop'>
                  <div className='button-arrow'>
                    <Icon icon='arrow-right' />
                  </div>
                  <span> SHOP NOW </span>
                </button>
              </a>
            </div>
          </div>

          <div className='flex items-center pill-container'>
            <ul className='pill-list flex flex-1'>
              <li className='pill-item flex-1 flex'>
                <div className='pill-icon-background flex items-center justify-center'>
                  <Icon icon='truck' width={16} height={16} />
                </div>
                <div className='pill-content flex-1'>
                  <h5 className='pill-item-title'>Free Shipping</h5>
                  <span className='pill-item-desc'>On purchases over $199</span>
                </div>
              </li>
              <li className='pill-item flex-1 flex'>
                <div className='pill-icon-background flex items-center justify-center'>
                  <Icon icon='happy' width={16} height={16} />
                </div>
                <div className='pill-content flex-1'>
                  <h5 className='pill-item-title'>99% Satisfied Customers</h5>
                  <span className='pill-item-desc'>Our clients' opinions speak for themselves</span>
                </div>
              </li>
              <li className='pill-item flex-1 flex'>
                <div className='pill-icon-background flex items-center justify-center'>
                  <Icon icon='guarantee' width={16} height={16} />
                </div>
                <div className='pill-content flex-1'>
                  <h5 className='pill-item-title'>Originality Guaranteed</h5>
                  <span className='pill-item-desc'>30 days warranty for each product from our store</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className='flex items-center pill-container-mobile'>
        <ul className='pill-list flex'>
          <li className='pill-item flex-1 flex'>
            <div className='pill-icon-background flex items-center justify-center'>
              <Icon icon='truck' className='pill-icon'></Icon>
            </div>
            <div className='pill-content flex-1'>
              <h5 className='pill-item-title'>Free Shipping</h5>
              <span className='pill-item-desc'>On purchases over $199</span>
            </div>
          </li>
          <li className='pill-item flex-1 flex'>
            <div className='pill-icon-background flex items-center justify-center'>
              <Icon icon='happy' className='pill-icon'></Icon>
            </div>
            <div className='pill-content flex-1'>
              <h5 className='pill-item-title'>99% Satisfied Customers</h5>
              <span className='pill-item-desc'>Our clients' opinions speak for themselves</span>
            </div>
          </li>
          <li className='pill-item flex-1 flex'>
            <div className='pill-icon-background flex items-center justify-center'>
              <Icon icon='guarantee' className='pill-icon'></Icon>
            </div>
            <div className='pill-content flex-1'>
              <h5 className='pill-item-title'>Originality Guaranteed</h5>
              <span className='pill-item-desc'>30 days warranty for each product from our store</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

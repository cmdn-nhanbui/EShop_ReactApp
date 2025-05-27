import React from 'react'
import type { ToastContainerProps } from '../../../../constants/types'
import { CheckIcon, XMarkIcon } from '../../../shared/components/Icons'
import clsx from 'clsx'

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return (
    <div className='toast-container'>
      {toasts.map((toast) => {
        const Icon = toast.type === 'success' ? CheckIcon : XMarkIcon
        return (
          <div key={toast.id} className='toast-item'>
            <div
              className={clsx('check-container', {
                'toast-error': toast.type === 'error',
              })}
            >
              <Icon width={20} height={20} className='check-icon' />
            </div>
            <p className='toast-message'>{toast.message}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ToastContainer

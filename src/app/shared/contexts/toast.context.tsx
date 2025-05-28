import React, { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import ToastContainer from '../../pages/home/components/ToastContainer'
import type { ShowToastOptions, Toast } from '../../../constants/types'

type ToastContextType = {
  showToast: ({ type, message, duration }: ShowToastOptions) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback(({ message, duration = 1500, type = 'success' }: ShowToastOptions) => {
    const id = Math.random().toString(36).slice(2)
    const newToast: Toast = { id, message, duration, type }
    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, duration)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
}

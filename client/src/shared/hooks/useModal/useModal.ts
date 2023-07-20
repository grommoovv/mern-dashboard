import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

/**
 * Переиспользуемый хук для модальных компонентов
 * @param delay
 * @param isActive
 * @param onClose
 **/

interface useModalProps {
  delay: number
  isActive?: boolean
  onClose?: () => void
}

export const useModal = (props: useModalProps) => {
  const { delay, isActive, onClose } = props
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  useEffect(() => {
    if (isActive) {
      setIsMounted(true)
    }
  }, [isActive])

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, delay)
    }
  }, [delay, onClose])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    },
    [close]
  )

  useEffect(() => {
    if (isActive) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isActive, onKeyDown])

  return {
    isClosing,
    isMounted,
    close,
  }
}

import { useRef, useEffect } from 'react'

export const usePreviousState = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value //assign the value of ref to the argument
  }, [value]) //this code will run when the value of 'value' changes
  return ref.current //in the end, return the current ref value.
}

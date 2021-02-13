import { useState, useEffect } from "react"

const useUnMount = (isMount, delayTime) => {
  const [isRender, setIsRender] = useState(false)
  useEffect(() => {
    let timeoutId
    if (isMount && !isRender) {
      setIsRender(true)
    } else if (!isMount && isRender) {
      timeoutId = setTimeout(() => {
        setIsRender(false)
      }, delayTime)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [delayTime, isRender, isMount])

  return isRender
}

export default useUnMount

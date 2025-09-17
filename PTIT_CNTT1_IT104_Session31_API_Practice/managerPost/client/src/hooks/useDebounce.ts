import { useEffect, useState } from 'react'

function useDebounce(value : string, delayTime : number) {
  const [searchKeyWord, setSearchKeyWord] = useState<string>(value)
  useEffect(() => {
    const timeOutId = setTimeout(()=>{
        setSearchKeyWord(value)
    }, delayTime)

    // Dọn dẹp
    return () => clearTimeout(timeOutId);
  }, [delayTime, value])
  return searchKeyWord
}

export default useDebounce

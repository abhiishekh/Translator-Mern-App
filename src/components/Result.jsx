import React from 'react'
import { useTranslate } from '../hooks/useTranslate'

const Result = () => {
  const {result, language} = useTranslate()
  return (
    <div className='w-full h-32 bg-blue-200 rounded-xl m-3 overflow-hidden'>
        <div className='w-full h-full bg-red-200  rounded-md overflow-y-scroll p-2 '>
            {result ? `${result}`:''}
        </div>
    </div>
  )
}

export default Result
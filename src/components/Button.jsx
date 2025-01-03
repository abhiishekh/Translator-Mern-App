  import React from 'react'
  import { useTranslate } from '../hooks/useTranslate'

  const Button = () => {
    const {handleClick} = useTranslate()

    return (
      <div>
          <button onClick={handleClick}
          type='submit' className='text-white bg-blue-600/90 hover:bg-blue-600 rounded-xl p-3 mt-10 text-2xl'>Translate</button>
      </div>
    )
  }

  export default Button
import React from 'react'
import { useTranslate } from '../hooks/useTranslate'
import Select from './Select'

const Input = () => {
    const {formdata, handleChange} = useTranslate()
  return (
    <div className='w-full'>
        <div className='flex flex-col gap-2'>

        <div className='w-full flex justify-between items-center mb-5'>
        <label className='font-semibold text-xl capitalize'>Inter the text</label>
        <Select/>
        </div>
        <textarea 
        name="text" 
        id="text"
        value={formdata}
        onChange={handleChange}
        placeholder='Enter the text to translate'
        className='p-2 rounded-xl outline-offset-1 w-full h-32'
        > 
        </textarea>
        </div>


    </div>
  )
}

export default Input
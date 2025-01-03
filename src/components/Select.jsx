import React from 'react'
import { useTranslate } from '../hooks/useTranslate'

const Select = () => {
    const {select, handleChange } = useTranslate()
  return (
    <div>
        <select name="select" id="" value={select} onChange={handleChange}
        className='p-2 rounded-md bg-neutral-300'
        >
            <option value="select language">select language</option>
            <option value="Hindi">Hindi</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>


        </select>
    </div>
  )
}

export default Select
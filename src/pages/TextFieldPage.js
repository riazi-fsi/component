import React from 'react'
import { useState } from 'react'
import TextField from '../components/TextField/TextField'

function TextFieldPage() {
    const [value, setValue] = useState('value')
    const change = (e, value) => {
        setValue(value)
      }
    return (
        <div className='m-2'>

            <TextField type='number' 
            label="name" 
            placeholder="Number" 
            onChange={(e, value) => change(e, value)} 
            value={value} 
            helper="just put number"
            />
            {value}
        </div>
    )
}

export default TextFieldPage
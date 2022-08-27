import React from 'react'
import { useState } from 'react'
import TextField from '../components/TextField/TextField'

function TextFieldPage() {
    const [value, setValue] = useState('sds')
    const change = (e, value) => {
        setValue(value)
      }
    return (
        <div>

            <TextField type='number' label='تست' placeholder='کمکی' onChange={(e, value) => change(e, value)} value={value} />
            {value}
        </div>
    )
}

export default TextFieldPage
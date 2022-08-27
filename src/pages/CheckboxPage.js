import React from 'react'
import Checkbox from '../components/CheckBox/Checkbox'

function CheckboxPage() {
    const veggies = [
        { name: 'ss', label: 'test', checked: true },
        { name: 'bbb', label: 'aa', checked: false }
    ];
    const handleChange = (e, value) => {
        console.log(value)
    }
  return (
    <div>


<Checkbox option={veggies} handleChange={(e, value) => handleChange(e, value)} />
    </div>
  )
}

export default CheckboxPage
import React from 'react'
import Button from '../components/Button/Button';
import Checkbox from '../components/CheckBox/Checkbox';
import TextField from '../components/TextField/TextField';
import Table from "../components/Table/Table"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [value, setValue] = useState('sds')
    const [data, setData] = useState([])
 
    const navigate = useNavigate()
    const submit = (e) => {
      console.log(value)
    }
    const change = (e, value) => {
      setValue(value)
    }
    const onOptionChange = (selectedOptions) => {
      setData(selectedOptions)
    }
    const veggies = [
      { name: 'ss', label: 'test', checked: true },
      { name: 'bbb', label: 'aa', checked: false }
    ];
    const handleChange = (e, value) => {
      console.log(value)
    }
  return (
    <div className="App">
    <Button
      className='bottom-8'
      label='Button component'
      type='danger'
      onClick={() => {
                  navigate(`/button-page`)
                }}

    />
    <Button
      className='bottom-8'
      label='confirm'

      onClick={submit}

    />
    <Table
      option={veggies}
      data={veggies}
    />
    <Checkbox option={veggies} handleChange={(e, value) => handleChange(e, value)} />

    <p>{data}</p>
    <TextField type='number' label='تست' placeholder='کمکی' onChange={(e, value) => change(e, value)} value={value} />
    {value}
  </div>
  )
}

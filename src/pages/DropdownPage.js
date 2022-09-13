import React, { useState } from 'react'
import Dropdown from '../components/Dropdown/Dropdown'


function DropdownPage() {
  const [data, setData] = useState('')
  const handleClick = (key) => {
    setData(key)
  }
  return (
    <div className='m-4'>
      <Dropdown title={'choose item '}
        items={[
          { name: 'one', value: '1' },
          { name: 'two', value: '2', disabled: true },
          { name: 'three', value: '3' }
        ]}
        onClick={handleClick}

      />
      <p>{data}</p>
    </div>
  )
}

export default DropdownPage

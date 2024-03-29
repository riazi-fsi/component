import React, { useEffect } from 'react'
import { useState } from 'react'
import Toast from '../components/Toast/Toast'


function ToastPage(props) {
  const [visible, setVisible] = useState(true)
  const [close, setClose] = useState(true)
  const [visibleSucc, setVisibleSuccess] = useState(true)
  const [visibleinfo, setVisibleinfo] = useState(true)
  useEffect(() => {
    setVisible(true)
    setTimeout(() => setVisibleSuccess(false), 2000)

  }, [], setVisibleSuccess)
  const handleClose = () => {
    setVisible(false)
 
  }
  const handleClose2 = () => {
    setVisibleinfo(false)
 
  }
  return (
    <div className=''>

      <Toast
        visible={visible}
        close={close}
        onClick={handleClose}
        title="title"
        className='mt-2'
        type='danger'
        message="write something"
      />
      <Toast
        visible={visibleinfo}
        close={close}
        onClick={handleClose2}
        title="title"
        className='mt-2'
        type='info'
        message="write something"
      />
      <Toast
        visible={visibleSucc}

      
        title="title"
        className='mt-2'
        type='success'
        message="write something"
      />
    </div>
  )
}


export default ToastPage

import React from 'react'
import { useState } from 'react'
import Countdown from '../components/Countdown/Countdown'

function CountDownPage() {
    const [count, setCount] = useState(1)
    const add = () => {
        setCount(count + 1)
    }
    return (

        <div>
            <Countdown time={'70'} setTimeOut={() => { alert('2') }} key={'1'} />
            count again auto
            <Countdown time={'7'} setTimeOut={add} key={count} />
        </div>
    )
}

export default CountDownPage
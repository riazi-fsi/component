import React from 'react'
import Button from '../components/Button/Button'

export default function ButtonPage() {
    return (
        <div>
            <Button
                label='Confirm'
                type='confirm'
                onClick={() => {
                    alert('test')
                }}

            />
            <Button
                label='Cancel'
                type='danger'
                onClick={() => {
                   alert('test')
                }}

            />
        </div>
    )
}

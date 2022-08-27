import React from 'react'
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="App">
            <Button
                label='Button component'
                type='confirm'
                onClick={() => {
                    navigate(`/button-page`)
                }}

            />
            <Button
                label='Table component'
                type='confirm'
                onClick={() => {
                    navigate(`/table-page`)
                }}

            />
            <Button
                label='TextFeild component'
                type='confirm'
                onClick={() => {
                    navigate(`/textFeild-page`)
                }}

            />
            <Button
                label='Chechbox component'
                type='confirm'
                onClick={() => {
                    navigate(`/checkbox-page`)
                }}

            />

        </div>
    )
}

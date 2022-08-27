import React from 'react'
import { useState } from 'react';
import Table from '../components/Table/Table'

function TablePage() {
    const [data, setData] = useState([])
    const veggies = [
        { name: 'ss', label: 'test', checked: true },
        { name: 'bbb', label: 'aa', checked: false }
    ];
    return (
        <div>

            <Table
                option={veggies}
                data={veggies}
            />


            <p>{data}</p>
        </div>
    )
}

export default TablePage
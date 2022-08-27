import React from 'react'
import PropTypes from 'prop-types'

function Table(props) {
  return (
    <div>

<thead>
            <tr>
            {props.option.map(item => (
              <th scope="col">{item.name}</th>
            ))}
            </tr>
            <tbody>
            {props.data.map(item => (
              <th scope="col">{item.label}</th>
            ))}
            </tbody>
          </thead>
    </div>
  )
}

Table.propTypes = {}

export default Table

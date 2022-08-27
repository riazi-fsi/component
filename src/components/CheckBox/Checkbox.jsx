import React, { useState } from 'react'
import PropTypes from 'prop-types'





function Checkbox(props) {
    const [checkedItems, setCheckedItems] = useState({});
    const [select,setSelect]=useState([])

    const handleChange = (event,select) => {
    //   setCheckedItems({
    //     ...checkedItems,
    //     [event.target.name]: event.target.checked
    //   });
console.log(select)
      props.handleChange(select)
    };


    return (
        <div>
        {props.option.map(item => (
          <label key={item}>
            {item.label}
            <input
              type="checkbox"
              name={item}
              checked={item.checked}
              value={item.value}
              onChange={handleChange(item.value)}
            />
          </label>
        ))}
  
        <br />
      </div>
    )
}





Checkbox.propTypes = {}

export default Checkbox

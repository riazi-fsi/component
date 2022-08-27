import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextField(props) {
    const [helper, setHelper] = useState('')
    const handleChange = (type, e) => {
        const { length, onChange } = props;
        const { value } = e.target;
        let allowedValue = '';
        let reg;
        if (type === 'number') {
            allowedValue = value.replace(/,/g, '').replace(/[^\d]/, '')
            setHelper('لطفا فقط عدد وارد شود')
        } else {
            reg = /[~`!\^&()+=\[\]\\';/{}|\\"<>\?]/g;
            allowedValue = value.replace(reg, '')
        }
        if (length && typeof (length) == 'number') {
            allowedValue = allowedValue.substring(0, length);
        }
        if (onChange && typeof (onChange) == 'function') {
            props.onChange(e, allowedValue);
        }
    }
  const  handleFocus = (e)=>{
        props.onFocus && props.onFocus(e);
    };

    const  handleBlur= (e)=>{
        props.onBlur && props.onBlur(e);
    };

    const  handleOnEnter= (e)=>{
        props.onEnter && props.onEnter(e);
    };
    const {type,value,placeholder,id,dir,length}=props
    return (
        <div className="mb-3 xl:w-96 text-right">
            <label className="form-label inline-block mb-2 text-gray-700">{props.label}</label>
            <input
                id={id}
                dir={dir}
                length={length}
                placeholder={placeholder}
                onChange={(e)=>handleChange( type,e)}
                value={value}
                type={type}
                onBlur={handleBlur}
                   onFocus={handleFocus}
                   onPressEnter={handleOnEnter}
                className=' form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            />
            <div className="text-sm text-gray-500 mt-1">{props.helper?props.helper:helper}</div>
        </div>
    )
}

TextField.propTypes = {
    value:PropTypes.any,
    onChange: PropTypes.func,
     onEnter: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    type: PropTypes.string,
    helper:PropTypes.string
}


export default TextField

import React from 'react';
import './Toast.css';
import PropTypes from 'prop-types'

function Toast({title,message,className,visible,type,onClick,close}) {
  
    
   const  levelType= ()=> {
        switch (type) {
            case 'warning':
                return ' bg-orange-500';
            case 'danger':
                return 'bg-red-700';
            case 'success':
                return 'bg-green-700'
            default:
                break
        }
    }
    return (
        <div className={(visible ? 'visible' : '') + ' ' + className}>
      
            <div className={'fixed w-[250px] right-[50%] top-[3%] z-50 min-h-[110px]  rounded-md text-white Toast ' + " " + levelType()}>

                {close ?
                    <div className="cursor-pointer px-1 absolute right-0 font-bold  text-white " onClick={onClick}> x</div> : null}

                <div>
                </div>
                <h6 className='p-2 font-bold'>{title}</h6>
                <p className="p-2">{message}</p>
            </div>
        </div>
    )
}

Toast.propTypes = {
    title:PropTypes.string,
    message:PropTypes.string,
    className:PropTypes.string,
    onClick:PropTypes.func,
    visible:PropTypes.bool,
    close:PropTypes.bool,
    type:PropTypes.oneOf(['success','danger',"warning"]).isRequired
}

export default Toast

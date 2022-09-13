import React from 'react';
import './Toast.css';
import PropTypes from 'prop-types'

function Toast({title,message,className,visible,type,onClick,close}) {
  
    
   const  levelType= ()=> {
        switch (type) {
            case 'warning':
                return ' bg-yellow-500  ';
            case 'danger':
                return 'bg-red-600 ';
            case 'success':
                return 'bg-green-500 ';
                case 'info':
                    return 'bg-blue-600 '
            default:
                break
                

        }
    }
    const  levelTypBorder= ()=> {
        switch (type) {
            case 'warning':
                return ' bg-yellow-500 border-yellow-400 ';
            case 'danger':
                return 'bg-red-600 border-red-500';
            case 'success':
                return 'bg-green-500 border-green-400';
                case 'info':
                    return 'bg-blue-600 border-blue-500'
            default:
                break
                

        }
    }
    return (
      <div className='flex flex-col justify-center'>
        <div className={(visible ? 'visible ' : '') + ' ' + className}>
      
            <div className={'  shadow-lg  w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3 text-white Toast ' + " " + levelType()}>
            <div className={" flex justify-between items-center py-2 px-3 bg-clip-padding border-b  rounded-t-lg " + levelTypBorder()}>
            <p className='font-bold text-white flex items-center'>{title}</p>
                {close ?
                    <button className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline " onClick={onClick}> x</button> : null}

                    </div>
                <div>
                </div>
           
                <p className={"p-3  rounded-b-lg break-words text-whit" + levelType()}>{message}</p>
            </div>
       
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
    type:PropTypes.oneOf(['success','danger',"warning","info"]).isRequired
}

export default Toast

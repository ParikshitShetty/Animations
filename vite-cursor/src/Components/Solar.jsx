import React, { useEffect } from 'react'

const Solar = () => {

    useEffect(() => {
        document.title = 'Solar System';
    }, []);

  return (
    <>
    <div className=' text'>
        <div className='sun'></div>
        <div className='earth'>
            <span className='moon'></span>
        </div>   
    </div>
    </>    
  )
}

export default Solar
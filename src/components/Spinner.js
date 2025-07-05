import React from 'react'
import loading from './assets/loading.gif'

const Spinner =() => {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                <img src={loading} alt="loader" />
            </div>
        )
}

export default Spinner

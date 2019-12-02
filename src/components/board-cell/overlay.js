import React from 'react'
import PropTypes from 'prop-types'

function Overlay({ color }) {
    return (
        <div className={'overlay'}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '80px',
                width: '80px',
                zIndex: 1,
                opacity: 0.5,
                backgroundColor: color,
            }}
        />
    )
}

Overlay.propTypes = {
    color: PropTypes.string
}

export default Overlay

import React from 'react'

const Output =  ({ heading, description, name }) => {
    return (
        <div style={{pageBreakAfter:"always"}}>
            {heading}
            {description}
            from {name}
        </div> 
    )
}

export default Output
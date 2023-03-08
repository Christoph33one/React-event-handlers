import React from 'react'

function EventsFunctional() {
    // define the clickHandle function - always define inside the component as shown!
    function clickHandler() {
        console.log("Clicked on functional button")
    }
    return (
        <div>
            <button onClick={clickHandler}>click me - functional component</button>
        </div>
    )
}

export default EventsFunctional
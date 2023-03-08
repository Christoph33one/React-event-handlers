import React, { Component } from 'react'

export class EventsClass extends Component {
    // defining clickHandler in a class component 
    clickhandler(){
        console.log("Click the class button")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>click me - class component</button>
            </div>
        )// remember to use (this.) keyword when adding clickHandler to onClick attribute!
    }
}

export default EventsClass
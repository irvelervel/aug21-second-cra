// a class component can hold a STATE object, a function cannot
// the STATE object will live as long as the component is mounted into the DOM
// in the STATE object you want to store properties you want to keep track of

import { Component } from "react";

class StateComponent extends Component {

    // 'state' is a reserved name for this state object
    state = {
        count: 0
    }

    render() {
        // SUPER WRONG, this is not supposed to happen!
        // you cannot mutate the state object directly!
        // this.state.count = 1
        console.log(this)
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                </div>
                {this.state.count}
                <div>
                    <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
                </div>
            </div >
        )
    }
}

export default StateComponent
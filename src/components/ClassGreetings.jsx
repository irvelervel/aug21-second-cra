import { Component } from "react";

class ClassGreetings extends Component {
    render() {
        console.log(this.props)
        // this is how you can destructure the props even in a class
        // const {color, student} = this.props
        return (
            <p className={'text-' + this.props.color}>Hello {this.props.student}!</p>
        )
    }
}

export default ClassGreetings
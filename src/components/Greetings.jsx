// this is how you use the props object in a functional component
// const Greetings = (props) => {
//     // console.log(props)
//     return (
//         <p className={'text-' + props.color}>Hello {props.student}!</p>
//     )
// }

// this is how you destructure the props object into individual properties
const Greetings = ({ student, color }) => {
    console.log(student, color)
    return (
        <p className={'text-' + color}>Hello {student}!</p>
    )
}

export default Greetings

// props = {
// student: 'Wako',
// color: 'red'
// }
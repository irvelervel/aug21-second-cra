import './App.css'
// import Greetings from './components/Greetings'
import ClassGreetings from './components/ClassGreetings'
import StateComponent from './components/StateComponent'

// you can create react components in two ways!
// 1) function -> a functional component is simple to write, its sole purpose is to
// return some JSX
// 2) class -> a class component is a little longer to write, provide a more fixed structure
// and it's necessary for some advanced features

// PROPS

const App = () => (
  <div className="App">
    <header className="App-header">
      {/* <Greetings student="Wako" color="red" />
      <Greetings student="Matiss" color="green" />
      <Greetings student="Hilary" color="yellow" /> */}
      {/* <ClassGreetings student="Wako" color="red" /> */}
      {/* <ClassGreetings student="Matiss" color="green" /> */}
      <ClassGreetings student="Hilary" color="yellow" />
      <StateComponent title="COUNTER COMPONENT" />
      <StateComponent title="SECOND COUNTER COMPONENT" />
      <StateComponent title="THIRD COUNTER COMPONENT" />
    </header>
  </div>
)

export default App

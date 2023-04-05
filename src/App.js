import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import RegisterContext from './context/RegisterContext'
import './App.css'

class App extends Component {
  state = {
    topic: 'Arts and Culture',
    name: '',
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {topic, name, isRegistered, showError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          topic,
          name,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/bad-path" component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App

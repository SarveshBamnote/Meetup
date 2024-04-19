import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import MeetupContext from './context/MeetupContext'

import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    nameInput: '',
    topic: topicsList[0].id,
    showErrorMsg: false,
  }

  changeName = name => {
    this.setState({nameInput: name})
  }

  changeTopics = activeTopic => {
    this.setState({topic: activeTopic})
  }

  toggleErrorMsg = () => {
    this.setState(prevState => ({showErrorMsg: !prevState.showErrorMsg}))
  }

  render() {
    const {nameInput, topic, showErrorMsg} = this.state

    return (
      <MeetupContext.Provider
        value={{
          nameInput,
          topic,
          showErrorMsg,
          changeName: this.changeName,
          changeTopics: this.changeTopics,
          toggleErrorMsg: this.toggleErrorMsg,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App

import {Link} from 'react-router-dom'

import MeetupContext from '../../context/MeetupContext'
import './index.css'

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

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {nameInput, topic} = value
      const validName = nameInput === ''

      const topicDisplayText = topicsList.find(each => each.id === topic)

      return (
        <div className="home-container">
          <div className="header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div className="home-page">
            {validName ? (
              <div className="home">
                <h1 className="welcome-heading">Welcome to Meetup</h1>
                <p className="home-para">Please register for the topic</p>
                <Link to="/register">
                  <button className="register-button" type="button">
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <div className="home-registerd-view">
                <h1 className="registered-name">Hello {nameInput}</h1>
                <p className="registered-para">
                  Welcome to {topicDisplayText.displayText}
                </p>
              </div>
            )}

            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="meetup-image"
            />
          </div>
        </div>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home

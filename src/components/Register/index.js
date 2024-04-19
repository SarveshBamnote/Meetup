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

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        nameInput,
        topic,
        changeName,
        changeTopics,
        showErrorMsg,
        toggleErrorMsg,
      } = value

      const {history} = props

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopics = event => {
        changeTopics(event.target.value)
      }

      const onClickBtn = event => {
        event.preventDefault()

        if (nameInput === '') {
          toggleErrorMsg()
        } else {
          history.replace('/')
        }
      }

      return (
        <div className="register-page-container">
          <div className="header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div className="image-and-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="website-register-image"
            />
            <form onSubmit={onClickBtn} className="form-container">
              <h1 className="main-heading">Let us join</h1>

              <label className="label" htmlFor="name">
                NAME
              </label>
              <input
                value={nameInput}
                id="name"
                type="text"
                placeholder="Your name"
                onChange={onChangeName}
                className="input"
              />

              <label className="label" htmlFor="name">
                TOPICS
              </label>
              <select className="input" value={topic} onChange={onChangeTopics}>
                {topicsList.map(each => (
                  <option value={each.id} key={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>

              <button className="register-now-btn" type="submit">
                Register Now
              </button>
              {showErrorMsg && (
                <p className="error-msg">Please enter your name</p>
              )}
            </form>
          </div>
        </div>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register

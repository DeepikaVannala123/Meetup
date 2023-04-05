import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'
import {
  Heading,
  HomeContainer,
  WelcomeText,
  RegisterButton,
  HomeImage,
} from './styledComponents'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic, isRegistered} = value
        return (
          <>
            <Header />
            {isRegistered === true ? (
              <HomeContainer>
                <Heading>Hello {name}</Heading>
                <WelcomeText>Welcome to {topic}</WelcomeText>
                <HomeImage
                  alt="meetup"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <Heading>Welcome to Meetup</Heading>
                <WelcomeText>Please register for the topic</WelcomeText>
                <Link to="/register">
                  <RegisterButton onClick={onRegister}>Register</RegisterButton>
                </Link>
                <HomeImage
                  alt="meetup"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                />
              </HomeContainer>
            )}
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home

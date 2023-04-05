import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'
import {
  RegisterContainer,
  Heading,
  Image,
  Container,
  FormContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  Button,
  ErrorMsg,
} from './styledComponents'

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
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const onSubmitForm = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <Container>
              <Heading>Let us join</Heading>
              <FormContainer onSubmit={onSubmitForm}>
                <CustomLabel htmlFor="name">NAME</CustomLabel>
                <CustomInput
                  onChange={onChangeName}
                  value={name}
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
                <CustomLabel htmlFor="topic">TOPICS</CustomLabel>
                <CustomSelect value={topic} onChange={onChangeTopic} id="topic">
                  {topicsList.map(eachOption => (
                    <CustomOption value={eachOption.id} key={eachOption.id}>
                      {eachOption.displayText}
                    </CustomOption>
                  ))}
                </CustomSelect>
                <Button type="submit">Register Now</Button>
                {showError === true ? (
                  <ErrorMsg>Please enter your name</ErrorMsg>
                ) : (
                  ''
                )}
              </FormContainer>
            </Container>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register

import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/icons
import People from '@material-ui/icons/People'
import Email from '@material-ui/icons/Email'
import Feedback from '@material-ui/icons/Feedback'

// core components
import Card from '../components/Card/Card.jsx'
import CardBody from '../components/Card/CardBody.jsx'
import CardFooter from '../components/Card/CardFooter.jsx'
import Button from '../components/CustomButtons/Button.jsx'
// import CustomInput from '../components/CustomInput/CustomInput.jsx'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import loginStyle from '../assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx'
import Recaptcha from 'react-recaptcha'
import { Helmet } from 'react-helmet'

class CustomValidationForm extends React.Component {
  handleSubscribe = this.handleSubscribe.bind(this)
  recaptchaLoaded = this.recaptchaLoaded.bind(this)
  verifyCallback = this.verifyCallback.bind(this)
  state = {
    formData: {
      FirstName: '',
      Surname: '',
      email: '',
      message: '',
      isVerified: false,
      submitted: false,
    },
  }
  // change = (e) => {
  //   this.props.onChange({ [e.target.name]: e.target.value })
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }
  // validate = () => {
  //   let isError = false
  //   const errors = {
  //     messageError: '',
  //     FirstNameError: '',
  //     // lastNameError: "",
  //     // usernameError: "",
  //     // emailError: "",
  //   }
  //   if (this.state.message.length < 5) {
  //     isError = true
  //     errors.FirstNameError = 'Username needs to be atleast 5 characters long'
  //   }

  // if (this.state.email.indexOf("@") === -1) {
  //   isError = true;
  //   errors.emailError = "Requires valid email";
  // }

  //   this.setState({
  //     ...this.state,
  //     ...errors,
  //   })

  //   return isError
  // }

  recaptchaLoaded() {
    console.log('capcha successfully loaded')
  }
  handleSubscribe() {
    if (this.state.isVerified) {
      alert('You have successfully subscribed!')
    } else {
      alert('Please verify that you are a human!')
    }
  }
  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true,
      })
    }
  }

  handleChange = (event) => {
    const { formData } = this.state
    formData[event.target.name] = event.target.value
    this.setState({ formData })
  }

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000)
      alert(JSON.stringify(this.state.formData))
    })
  }

  // onSubmit = (e) => {
  //   e.preventDefault()
  //   // this.props.onSubmit(this.state);
  //   const err = this.validate()
  //   if (!err) {
  //     // clear form
  //     this.setState({
  //       firstName: '',
  //       firstNameError: '',
  //       Surname: '',
  //       SurnameError: '',
  //       message: '',
  //       messageError: '',
  //       email: '',
  //       emailError: '',
  //     })
  //     this.props.onChange({
  //       firstName: '',
  //       Surname: '',
  //       username: '',
  //       email: '',
  //       message: '',
  //     })
  //   }
  // }

  render() {
    const { classes } = this.props
    const { formData, submitted } = this.state
    return (
      <Card>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          className={classes.form}
        >
          <CardBody>
            {/* <CustomInput */}
            <TextValidator
              label="First Name..."
              name="FirstName"
              onChange={this.handleChange}
              value={formData.FirstName}
              validators={['required']}
              errorMessages={['First Name is required']}
              success
              errorText={this.state.firstNameError}
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                maxLength: '20',

                type: 'text',
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
            <TextValidator
              label="Surname..."
              name="Surname"
              onChange={this.handleChange}
              value={formData.Surname}
              validators={['required']}
              errorMessages={['Surname is required']}
              success
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                maxLength: '20',
                type: 'text',
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
            <TextValidator
              label="Email..."
              name="email"
              onChange={this.handleChange}
              value={formData.email}
              validators={['required', 'isEmail']}
              errorMessages={['Email is required', 'email is not valid']}
              success
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: 'email',
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />

            <TextValidator
              label="Your Message"
              name="message"
              onChange={this.handleChange}
              value={formData.message}
              validators={['required']}
              errorMessages={['Your Message is required']}
              success
              maxLength={12}
              formControlProps={{
                fullWidth: true,
                className: classes.textArea,
              }}
              inputProps={{
                multiline: true,
                rows: 5,
                maxLength: '20',
                endAdornment: (
                  <InputAdornment position="end">
                    <Feedback className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />

            <Helmet>
              <script
                src={`https://www.google.com/recaptcha/api.js?r=${Math.random()}`}
                async
                defer
              ></script>
            </Helmet>

            <div
              className="g-recaptcha"
              data-sitekey="6LcNU8EZAAAAAByNFUSvDPiJCLfMQRHXYsTLyQSe"
            ></div>
          </CardBody>
          <CardFooter className={classes.cardFooter}>
            <Button
              color="primary"
              size="lg"
              round
              type="submit"
              // onClick={(e) => this.onSubmit(e)}
              disabled={submitted}
              onClick={this.handleSubscribe}
            >
              {(submitted && 'Your form is submitted!') ||
                (!submitted && 'Submit')}
            </Button>
          </CardFooter>
        </ValidatorForm>
      </Card>
    )
  }
}

export default withStyles(loginStyle)(CustomValidationForm)

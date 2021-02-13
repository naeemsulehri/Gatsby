import React from 'react'
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'
import DialpadIcon from '@material-ui/icons/Dialpad'
import InputAdornment from '@material-ui/core/InputAdornment'

// core components
import completedStyle from '../assets/jss/material-kit-react/views/componentsSections/completedStyle.jsx'

import { Formik } from 'formik'
import Paper from '@material-ui/core/Paper'
import Button from '../components/CustomButtons/Button.jsx'
import CustomInput from '../components/CustomInput/CustomInput.jsx'

import Card from '../components/Card/Card.jsx'
import CardBody from '../components/Card/CardBody.jsx'
import CardFooter from '../components/Card/CardFooter.jsx'
import CardHeader from '../components/Card/CardHeader.jsx'
import GridContainer from '../components/Grid/GridContainer.jsx'
import GridItem from '../components/Grid/GridItem.jsx'
import { FormControl } from '@material-ui/core'
import { Input } from '@material-ui/core'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'
import Rater from '../Rating/rating'

class CustomHeatingOilPriceCalculatorSection extends React.Component {
  constructor(props) {
    super(props)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      zipCode: '',
      quantity: '',
      oilType: '',
      deliveryTime: '',
      tankTruck: '',
      hoseLength: '',
      paymentMethod: '',
      unloadingPoints: '',
      hasError: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handleOilTypeChange = this.handleOilTypeChange.bind(this)
    this.handleDeliveryTimeChange = this.handleDeliveryTimeChange.bind(this)
    this.handleTankTruckChange = this.handleTankTruckChange.bind(this)
    this.handleHoseLengthChange = this.handleHoseLengthChange.bind(this)
    this.handlePaymentChange = this.handlePaymentChange.bind(this)
    this.handleUnloadingPointChange = this.handleUnloadingPointChange.bind(this)
  }

  handleZipCodeChange = (event) => {
    const value = event.target.value
    const { zipCode } = this.state
    this.setState({ zipCode: value })
  }
  handleQuantityChange = (event) => {
    const value = event.target.value
    const { quantity } = this.state
    this.setState({ quantity: value })
  }

  handleOilTypeChange = (event) => {
    const value = event.target.value
    const { oilType } = this.state
    this.setState({ oilType: value })
  }

  handleDeliveryTimeChange = (event) => {
    const value = event.target.value
    const { deliveryTime } = this.state
    this.setState({ deliveryTime: value })
  }

  handleTankTruckChange = (event) => {
    const value = event.target.value
    const { tankTruck } = this.state
    this.setState({ tankTruck: value })
  }

  handleHoseLengthChange = (event) => {
    const value = event.target.value
    const { hoseLength } = this.state
    this.setState({ hoseLength: value })
  }
  handlePaymentChange = (event) => {
    const value = event.target.value
    const { paymentMethod } = this.state
    this.setState({ paymentMethod: value })
  }
  handleUnloadingPointChange = (event) => {
    const value = event.target.value
    const { unloadingPoints } = this.state
    this.setState({ paymentMethod: value })
  }

  handleClick = () => {
    this.setState({ hasError: false })
    if (!this.state.selected) {
      this.setState({ hasError: true })
      console.log(this.selected)
    }
  }

  render() {
    const { classes } = this.props
    const { selected, hasError } = this.state
    // const { classes } = this.props
    const oilType = [
      'Low sulfur fuel oil',
      'Low-sulfur heating oil Super',
      'Heating oil Ecotherm low sulfur',
      'Diesel EN590',
      'Diesel additive',
    ]
    const oilTypeMenuItem = []
    oilType.forEach((element = 0) => {
      oilTypeMenuItem.push(<MenuItem value={element}>{element}</MenuItem>)
    })

    const DeliveryTime = [
      'open',
      'up to 10 working days',
      'up to 4 working days',
      '48h',
      '24 hours',
    ]
    const DeliveryTimeMenuItem = []
    DeliveryTime.forEach((element = 0) => {
      DeliveryTimeMenuItem.push(<MenuItem value={element}>{element}</MenuItem>)
    })

    const TruckCapactiy = ['any', '26t / 2.60m', '18t / 2.55m', '10t / 2.30m']
    const TruckCapactiyMenuItem = []
    TruckCapactiy.forEach((element = 0) => {
      TruckCapactiyMenuItem.push(<MenuItem value={element}>{element}</MenuItem>)
    })

    const HoseLength = ['40', '60', '80', '90']
    const HoseLengthMenuItem = []
    HoseLength.forEach((element = 0) => {
      HoseLengthMenuItem.push(<MenuItem value={element}>{element}</MenuItem>)
    })

    const PaymentMethod = [
      'bar',
      'Payment in advance',
      'Cashier check',
      'Online transfer on site',
      'EC',
      'on account (with examination)',
    ]
    const PaymentMethodMenuItem = []
    PaymentMethod.forEach((element = 0) => {
      PaymentMethodMenuItem.push(<MenuItem value={element}>{element}</MenuItem>)
    })

    const UnloadingPoints = []
    for (let index = 1; index <= 30; index++) {
      UnloadingPoints.push(index)
    }

    const UnloadingPointsMenuItem = []
    UnloadingPoints.forEach((element = 0) => {
      UnloadingPointsMenuItem.push(
        <MenuItem value={element}>{element}</MenuItem>
      )
    })

    return (
      <div className={classes.section} style={{ marginTop: '5%' }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <Paper elevation={1} className={classes.paper}>
                <Card>
                  <form className={classes.root} autoComplete="off">
                    <FormControl
                      className={classes.formControl}
                      error={hasError}
                    >
                      <CardHeader color="primary">
                        Start your request here
                      </CardHeader>
                      {/* /* <form className={classes.form}> */}
                      <CardBody>
                        <CustomInput
                          labelText="Enter Zip Code Here"
                          id="ZipCode"
                          required
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'text',
                            endAdornment: (
                              <InputAdornment position="end">
                                <LocationOnRoundedIcon
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <CustomInput
                          labelText="Enter Quantity Here"
                          id="Quantity"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'text',
                            endAdornment: (
                              <InputAdornment position="end">
                                <DialpadIcon
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />

                        <FormControl
                          style={{ width: '100%' }}
                          className={classes.formControl}
                          error={hasError}
                        >
                          <InputLabel htmlFor="oilType">Oil Type</InputLabel>
                          <Select
                            name="oilType"
                            value={selected}
                            onChange={this.handleOilTypeChange}
                            input={<Input id="oilType" />}
                          >
                            {oilTypeMenuItem}
                          </Select>
                          {hasError && (
                            <FormHelperText>This is required!</FormHelperText>
                          )}
                        </FormControl>

                        <FormControl
                          style={{ width: '100%' }}
                          className={classes.formControl}
                          error={hasError}
                        >
                          <InputLabel htmlFor="DeliveryTime">
                            Delivery Time
                          </InputLabel>
                          <Select
                            name="DeliveryTime"
                            value={selected}
                            onChange={(event) =>
                              this.handleDeliveryTimeChange(event.target.value)
                            }
                            input={<Input id="DeliveryTime" />}
                          >
                            {DeliveryTimeMenuItem}
                          </Select>
                          {hasError && (
                            <FormHelperText>This is required!</FormHelperText>
                          )}
                        </FormControl>

                        <FormControl
                          style={{ width: '100%' }}
                          className={classes.formControl}
                          error={hasError}
                        >
                          <InputLabel htmlFor="tankTruck">
                            Tanker Truck
                          </InputLabel>
                          <Select
                            name="tankTruck"
                            value={selected}
                            onChange={(event) =>
                              this.handleTankTruckChange(event.target.value)
                            }
                            input={<Input id="tankTruck" />}
                          >
                            {TruckCapactiyMenuItem}
                          </Select>
                          {hasError && (
                            <FormHelperText>This is required!</FormHelperText>
                          )}
                        </FormControl>
                        <FormControl
                          style={{ width: '100%' }}
                          className={classes.formControl}
                          error={hasError}
                        >
                          <InputLabel htmlFor="hoseLength">
                            Hose Length
                          </InputLabel>
                          <Select
                            name="hoseLength"
                            value={selected}
                            onChange={(event) =>
                              this.handleHoseLengthChange(event.target.value)
                            }
                            input={<Input id="hoseLength" />}
                          >
                            {HoseLengthMenuItem}
                          </Select>
                          {hasError && (
                            <FormHelperText>This is required!</FormHelperText>
                          )}
                        </FormControl>
                        <FormControl
                          style={{ width: '100%' }}
                          className={classes.formControl}
                          error={hasError}
                        >
                          <InputLabel htmlFor="paymentMethod">
                            Payment Method
                          </InputLabel>
                          <Select
                            name="paymentMethod"
                            value={selected}
                            onChange={this.handlePaymentChange}
                            input={<Input id="paymentMethod" />}
                          >
                            {PaymentMethodMenuItem}
                          </Select>
                          {hasError && (
                            <FormHelperText>This is required!</FormHelperText>
                          )}
                        </FormControl>
                        <FormControl
                          style={{ width: '100%' }}
                          className={classes.formControl}
                          error={hasError}
                        >
                          <InputLabel htmlFor="unloadingPoints">
                            Unloading Points
                          </InputLabel>
                          <Select
                            name="unloadingPoints"
                            value={selected}
                            onChange={this.handleUnloadingPointChange}
                            input={<Input id="unloadingPoints" />}
                          >
                            {UnloadingPointsMenuItem}
                          </Select>
                          {hasError && (
                            <FormHelperText>This is required!</FormHelperText>
                          )}
                        </FormControl>
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button
                          color="primary"
                          size="md"
                          round
                          onClick={() => this.handleClick()}
                        >
                          Order Now
                        </Button>
                      </CardFooter>
                    </FormControl>
                  </form>
                </Card>
              </Paper>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <GridContainer>
                <GridItem>
                  <Card>
                    <CardHeader color="primary">
                      Net (100l without VAT):
                    </CardHeader>
                    <CardBody>Amount = </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardHeader color="primary">
                      Gross (100l incl. 16% VAT):
                    </CardHeader>
                    <CardBody>Amount = </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardHeader color="primary">
                      Delivery price (including 16% VAT):
                    </CardHeader>
                    <CardBody>Amount = </CardBody>
                  </Card>
                </GridItem>
                <GridItem></GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <Rater />
        </div>
      </div>
    )
  }
}

export default withStyles(completedStyle)(
  CustomHeatingOilPriceCalculatorSection
)

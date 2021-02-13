import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import PhoneIcon from '@material-ui/icons/Phone'
import InputAdornment from '@material-ui/core/InputAdornment'

// core components
import GridContainer from '../components/Grid/GridContainer.jsx'
import GridItem from '../components/Grid/GridItem.jsx'
import Button from '../components/CustomButtons/Button.jsx'
import exampleStyle from '../assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx'

import landing from '../assets/img/landing.jpg'
import profile from '../assets/img/profile.jpg'
import CustomInput from '../components/CustomInput/CustomInput.jsx'
import Card from '../components/Card/Card.jsx'
import CardBody from '../components/Card/CardBody.jsx'
import CardHeader from '../components/Card/CardHeader.jsx'

class CustomContactSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section} style={{ marginTop: '1%' }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <Card>
                <CardHeader color="primary">Address</CardHeader>
                <CardBody className={classes.CardBody}>
                  <h5>extraleicht &amp; GmbH Co.KG</h5>
                  <h5>Daimlerstrasse 6a</h5>
                  <h5>50354 Hürth</h5>
                  <h5>Germany</h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={3}>
              <Card>
                <CardHeader color="primary">Telephone fax</CardHeader>
                <CardBody className={classes.CardBody}>
                  <h5>Service hotline 0800/1699 6655</h5>
                  <h5>Emergency service +49 (0) 2238 969680-80</h5>
                  <h5>phone +49 (0) 2238 969680-0</h5>
                  <h5>fax +49 (0) 2238 969680-19</h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-11"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-19"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                href={'mailto:pinto@extraleicht.com'}
                color="primary"
                size="md"
                round
              >
                Alexander Da Costa Pinto
              </Button>
            </GridItem>

            <GridItem xs={12} sm={12} md={3}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-14"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-19"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                href={'mailto:rs@extraleicht.com'}
                color="primary"
                size="md"
                round
              >
                Rüdiger Schirrmeister
              </Button>
            </GridItem>

            <GridItem xs={12} sm={12} md={3}>
              <img
                src={landing}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-16"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-19"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                href={'mailto:ag@extraleicht.com'}
                color="primary"
                size="md"
                round
              >
                Alexander Gürtler
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-12"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-19"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                href={'mailto:as@extraleicht.com'}
                color="primary"
                size="md"
                round
              >
                Andreas Schirrmeister
              </Button>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-18"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-19"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                href={'mailto:cs@extraleicht.com'}
                color="primary"
                size="md"
                round
              >
                Celina stone
              </Button>
            </GridItem>

            <GridItem xs={12} sm={12} md={3}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-22"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-19"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                href={'mailto:tc@extraleicht.com'}
                color="primary"
                size="md"
                round
              >
                Tina Çakır
              </Button>
            </GridItem>

            <GridItem xs={12} sm={12} md={3}>
              <img
                src={landing}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-13"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-19"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                href={'mailto:cm@extraleicht.com'}
                color="primary"
                size="md"
                round
              >
                Christiane Mentges
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-11"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="+49 (0) 2238 - 96 96 80-19"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  disabled: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                href={'mailto:cm@extraleicht.com'}
                color="primary"
                size="md"
                round
              >
                Can Cevirel
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(exampleStyle)(CustomContactSection)

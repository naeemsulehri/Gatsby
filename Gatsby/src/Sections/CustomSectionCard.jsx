import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Card from '../components/Card/Card.jsx'
import CardBody from '../components/Card/CardBody.jsx'
import CardFooter from '../components/Card/CardFooter.jsx'
import Button from '../components/CustomButtons/Button.jsx'

import loginStyle from '../assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx'
import { Grid } from '@material-ui/core'
import GridItem from '../components/Grid/GridItem.jsx'

class CustomCardSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Grid>
        <Grid item xs={4}>
          <Card style={{ width: '20rem' }}>
            <CardBody>
              <h4 className={classes.cardTitle}>Special title treatment</h4>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="primary">Do something</Button>
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(loginStyle)(CustomCardSection)

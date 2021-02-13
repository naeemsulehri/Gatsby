import React from 'react'
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

// core components
import GridContainer from '../components/Grid/GridContainer.jsx'
import GridItem from '../components/Grid/GridItem.jsx'
import exampleStyle from '../assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx'

import CustomSectionCarousel from './CustomSectionCarousel.jsx'
import CustomTimelineSection from './CustomTimelineSection.jsx'
import CustomContactUsSection from './CustomContactUsSection.jsx'

class CustomSectionFooter extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <h4>So einfach geht es!</h4>
              <CustomSectionCarousel />
            </GridItem>

            <GridItem xs={12} sm={12} md={3}>
              <h4>Kundenmeinungen</h4>
              <CustomTimelineSection />
            </GridItem>

            <GridItem xs={12} sm={12} md={3}>
              <h4>Nachricht senden</h4>
              <CustomContactUsSection />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(exampleStyle)(CustomSectionFooter)

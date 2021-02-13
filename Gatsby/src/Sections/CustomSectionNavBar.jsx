import React from 'react'
import { Link } from 'gatsby'
// react components for routing our app without refresh

import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons

// core components
import Header from '../components/Header/Header.jsx'
import Button from '../components/CustomButtons/Button.jsx'

import navbarsStyle from '../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx'

class CustomSectionNavBar extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div id="navbar" className={classes.navbar}>
        <div>
          <Header
            leftLinks={
              <Link to="/">
                <Button className={classes.registerNavLink} color="rose" round>
                  EXTRALEICHT
                </Button>
              </Link>
            }
            fixed={true}
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Link to="/price">
                    <Button className={classes.navLink} color="transparent">
                      ORDER HEATING OIL
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to="/products">
                    <Button className={classes.navLink} color="transparent">
                      HEATING INFO
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to="/service">
                    <Button className={classes.navLink} color="transparent">
                      FUEL SERVICE
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="http://www.oelpartner.de/"
                    className={classes.registerNavLink}
                    target="_blank"
                    color="rose"
                    round
                  >
                    LUBRICANTS
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to="/contact">
                    <Button className={classes.navLink} color="transparent">
                      CONTACT US
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="https://twitter.com/"
                    target="_blank"
                    color="transparent"
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + ' fab fa-twitter'} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://facebook.com/"
                    target="_blank"
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + ' fab fa-facebook'} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://instagram.com/"
                    target="_blank"
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + ' fab fa-instagram'} />
                  </Button>
                </ListItem>
              </List>
            }
          />
        </div>
      </div>
    )
  }
}

export default withStyles(navbarsStyle)(CustomSectionNavBar)

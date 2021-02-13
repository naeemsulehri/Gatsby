/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh
import { Link } from 'gatsby'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons'

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx'

import Button from '../CustomButtons/Button.jsx'

import headerLinksStyle from '../../assets/jss/material-kit-react/components/headerLinksStyle.jsx'

class HeaderLinks extends React.Component {
  state = { pos: 'top' }

  componentDidMount() {
    this.setState(() => ({ pos: window.innerWidth > 959 ? 'top' : 'left' }))
  }

  render() {
    const { classes } = this.props
    const pos = this.state.pos
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          {/* <Link to="/" className={classes.dropdownLink}>
            Home
          </Link> */}
          ,
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Home"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/home" className={classes.dropdownLink}>Home Page</Link>,
              <Link to="/testPage" className={classes.dropdownLink}>
                Home
              </Link>,
            ]}
          />
        </ListItem>

        <ListItem className={classes.listItem}>
          <CustomDropdown          
            noLiPadding
            buttonText="INFORMATION"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/contact-page" className={classes.dropdownLink}>
                Contact
              </Link>,

              <Link
                to="/heating-oil-price-calculator-page"
                className={classes.dropdownLink}
              >
                Heating oil price calculator
              </Link>,
            ]}
          />
        </ListItem>

        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="ORDER HEATING OIL"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/order-online-page" className={classes.dropdownLink}>
                Order online
              </Link>,

              <Link to="/order-by-phone-page" className={classes.dropdownLink}>
                Order by phone
              </Link>,
            ]}
          />
        </ListItem>

        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="HEATING INFO"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/oil-el-standard-page" className={classes.dropdownLink}>
                Heating oil El standard
              </Link>,

              <Link to="/oil-el-super-page" className={classes.dropdownLink}>
                Heating oil El super
              </Link>,
              <Link
                to="/oil-el-low-sulfur-page"
                className={classes.dropdownLink}
              >
                Heating oil El low sulfur
              </Link>,

              <Link
                to="/oil-el-low-sulfur-super-page"
                className={classes.dropdownLink}
              >
                Heating oil El low sulfur super
              </Link>,
              <Link to="/diesel-dn-en-590" className={classes.dropdownLink}>
                Diesel DIN EN 590
              </Link>,

              <Link to="/all-product-page" className={classes.dropdownLink}>
                All products
              </Link>,
            ]}
          />
        </ListItem>

        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="FUEL SERVICE"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/oil-el-standard-page" className={classes.dropdownLink}>
                Cleaning
              </Link>,

              <Link to="/oil-el-super-page" className={classes.dropdownLink}>
                Fuel Check
              </Link>,
              <Link
                to="/oil-el-low-sulfur-page"
                className={classes.dropdownLink}
              >
                TUV test
              </Link>,

              <Link
                to="/oil-el-low-sulfur-super-page"
                className={classes.dropdownLink}
              >
                Tank dismanting
              </Link>,
              <Link to="/diesel-dn-en-590" className={classes.dropdownLink}>
                Inner shell
              </Link>,

              <Link to="/all-product-page" className={classes.dropdownLink}>
                Plastic coating
              </Link>,

              <Link to="/diesel-dn-en-590" className={classes.dropdownLink}>
                Cathodic protection against corrosion
              </Link>,

              <Link to="/all-product-page" className={classes.dropdownLink}>
                Tank room renovation
              </Link>,
            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Lubricant"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/lubricant-page" className={classes.dropdownLink}>
                Lubricant
              </Link>,
            ]}
          />
        </ListItem>
        {/* <ListItem className={classes.listItem}>
          <Link to="/lubricant-page" className={classes.dropdownLink}>
            LUBRICANT
          </Link>
        </ListItem> */}

        <ListItem className={classes.listItem}>
          <Button
            href="https://www.creative-tim.com/product/material-kit-react"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <CloudDownload className={classes.icons} /> Download
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={pos}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-twitter'} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={pos}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-facebook'} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Follow us on instagram"
            placement={pos}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-instagram'} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    )
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks)

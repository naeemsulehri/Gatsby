import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Schedule from '@material-ui/icons/Schedule'
import List from '@material-ui/icons/List'

// core components
import GridContainer from '../components/Grid/GridContainer.jsx'
import GridItem from '../components/Grid/GridItem.jsx'
import NavPills from '../components/NavPills/NavPills.jsx'
import pillsStyle from '../assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx'
import Button from '../components/CustomButtons/Button.jsx'

class CustomSectionPills extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 },
                  }}
                  tabs={[
                    {
                      tabButton: 'Heating oil El standard',
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <p>
                            <div>
                              <h2>
                                <small>Heating oil El standard</small>{' '}
                              </h2>
                            </div>
                            Standard heating oil has proven itself as an
                            important energy source in the German space heating
                            market for decades, not least because of the high
                            cost-effectiveness of this fuel. Despite generally
                            rising energy costs, heating oil is still an
                            inexpensive energy source. 1 liter provides approx.
                            10 kWh of energy..
                          </p>
                          <br />
                          <p>
                            The abbreviation EL stands for "extra light" and
                            represents important additional information. As a
                            counterpart to light heating oil, there is also
                            heavy heating oil. However, due to its properties,
                            heavy fuel oil is usually not suitable for
                            generating room heat, for example because it has to
                            be preheated for combustion.
                          </p>
                          <br />
                          <p></p>
                          {/* <Button Component={Link} to="/price">
                            order
                          </Button> */}
                          <Button href="/price" color="primary" size="md" round>
                            Order Now..
                          </Button>
                        </span>
                      ),
                    },
                    {
                      tabButton: 'Heating Oil EL super',
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <p>
                            <div>
                              <h2>
                                <small>Heating Oil EL super</small>{' '}
                              </h2>
                            </div>
                            The most common product is called premium heating
                            oil and is based on the proven heating oil EL. In
                            addition, it also contains valuable additives that
                            significantly improve the product properties. This
                            saves you heating costs, protects your entire tank
                            system and also does something for the environment.
                          </p>
                          <br />
                          <p>
                            With premium heating oil you have more power liter
                            by liter!
                          </p>
                          <br />
                          <p>
                            <div className={classes.title}>
                              <h2>
                                <small>All benefits at a glance:</small>{' '}
                              </h2>
                              <h3>
                                <small>Low heating costs.</small>{' '}
                              </h3>
                            </div>
                            In comparison to standard heating oil EL, premium
                            heating oil burns much cleaner and effectively
                            counteracts soot deposits on the boiler wall. With
                            premium heating oil an optimal heat transfer is
                            guaranteed. Studies have shown that 1 mm of soot on
                            the boiler wall costs 4% more heating energy. At 2
                            mm, heating oil consumption increases by over 8%.
                            Greater storage stability: Super heating oil
                            protects against the formation of aging products
                            (sediments) in the oil tank, which is particularly
                            important for storage quantities that exceed annual
                            consumption. It counteracts clogging of filters and
                            nozzles and ensures trouble-free long-term operation
                            of your system. This significantly reduces repair
                            and maintenance costs.
                          </p>
                          <p>
                            <div>
                              <h3>
                                <small>Active environmental protection.</small>{' '}
                              </h3>
                            </div>
                            The cleaner combustion of premium heating oil
                            pollutes the environment with up to 94% less soot
                            emissions, while the absolute amount of oil burned
                            decreases. Two plus points for our environment.
                          </p>
                          <p>
                            <div>
                              <h3>
                                <small>Pleasant smell.</small>{' '}
                              </h3>
                            </div>
                            Super heating oil surprises with a pleasant "fruity"
                            fragrance. The usual mineral oil smell, which is
                            often perceived as annoying, is a thing of the past.
                            Premium heating oil is suitable for all conventional
                            burner types, except rocket burners.
                            <br />
                            <br />
                            Reduce heating and maintenance costs and choose
                            premium heating oil the next time you fill up your
                            tank.
                          </p>

                          <Button href="/price" color="primary" size="md" round>
                            Order Now..
                          </Button>
                        </span>
                      ),
                    },
                    {
                      tabButton: 'Heating Oil EL Sulfur ARM',
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <p>
                            <div>
                              <h2>
                                <small>Heating Oil EL Sulfur ARM</small>{' '}
                              </h2>
                            </div>
                            <br />
                            100% environment - 95% less sulfur
                            <br />
                            <br />
                            In contrast to the classic heating oil EL standard,
                            the heating oil EL low-sulfur only has a maximum
                            sulfur content of 50 mg / kg. Classic heating oil
                            contains up to 1000 mg / kg. Heating oil EL low
                            sulfur is the latest development in the market
                            segment of liquid fuels. Pioneering in terms of
                            technology and environmental protection, it is
                            optimally coordinated for use in modern systems with
                            oil condensing technology, but can also be used in
                            many conventional combustion systems.
                            <br />
                            <br />
                            In July 2005 all oil boilers and oil burners were
                            classified as suitable by the manufacturers. For
                            some oil condensing boilers, low-sulfur heating oil
                            is even expressly prescribed. In general, the
                            neutralization device otherwise required may be
                            dispensed with when used in oil condensing systems,
                            which also saves costs. The particularly clean
                            combustion of low-sulfur EL heating oil reduces
                            pollutant emissions to a minimum. The risk of
                            deposits on the boiler walls is significantly
                            reduced. Optimal conditions for a long service life
                            and the best possible efficiency for your heating
                            system.
                          </p>

                          <Button href="/price" color="primary" size="md" round>
                            Order Now..
                          </Button>
                        </span>
                      ),
                    },
                    {
                      tabButton: 'Heating Oil EL Sulfur ARM Super',
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <p>
                            <div>
                              <h2>
                                <small>Heating Oil EL Sulfur ARM Super</small>{' '}
                              </h2>
                            </div>
                            <br />
                            100% environment - 95% less sulfur
                            <br />
                            <br />
                            In contrast to the classic heating oil EL standard,
                            the heating oil EL low-sulfur only has a maximum
                            sulfur content of 50 mg / kg. Classic heating oil
                            contains up to 1000 mg / kg. Heating oil EL low
                            sulfur is the latest development in the market
                            segment of liquid fuels. Pioneering in terms of
                            technology and environmental protection, it is
                            optimally coordinated for use in modern systems with
                            oil condensing technology, but can also be used in
                            many conventional combustion systems.
                            <br />
                            <br />
                            In July 2005 all oil boilers and oil burners were
                            classified as suitable by the manufacturers. For
                            some oil condensing boilers, low-sulfur heating oil
                            is even expressly prescribed. In general, the
                            neutralization device otherwise required may be
                            dispensed with when used in oil condensing systems,
                            which also saves costs. The particularly clean
                            combustion of low-sulfur EL heating oil reduces
                            pollutant emissions to a minimum. The risk of
                            deposits on the boiler walls is significantly
                            reduced. Optimal conditions for a long service life
                            and the best possible efficiency for your heating
                            system.
                          </p>
                          <Button href="/price" color="primary" size="md" round>
                            Order Now..
                          </Button>
                        </span>
                      ),
                    },
                    {
                      tabButton: 'Diesel DIN EN 509',
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <p>
                            <div>
                              <h2>
                                <small>Diesel DIN EN 509</small>{' '}
                              </h2>
                            </div>
                            In their original form, heating oil and diesel are
                            identical. Both products belong to the group of
                            middle distillates and are traded on the stock
                            exchange as gas oil. The difference between heating
                            oil and diesel, which can be seen at first glance,
                            lies in the price. This is almost exclusively
                            tax-related. In contrast to heating oil, diesel is
                            used as a fuel and not as a fuel.
                            <div>
                              <h3>
                                <small>A rule of thumb:</small>{' '}
                              </h3>
                            </div>
                            Engines that are used for locomotion or can be used
                            for mobile purposes must be operated with diesel. In
                            addition to cars and trucks, mobile generators are
                            therefore operated with diesel. The use of heating
                            oil is only permitted under tax law in stationary
                            systems. The requirements for the quality of
                            (predominantly) mineral diesel are laid down in the
                            European standard EN 590. The German standard DIN
                            590 not only follows the EN standard numerically,
                            but also in terms of content. The following three
                            factors are characteristic of the product
                            differences between diesel and heating oil:
                            <div>
                              <h3>
                                <small>Mineral oil tax:</small>{' '}
                              </h3>
                            </div>
                            The significantly higher diesel price results from
                            the tax burden. The mineral oil tax on diesel is €
                            470.40 per 1,000 liters. Light heating oil is taxed
                            in Germany at only € 61.35 per 1,000 liters (as of
                            February 2010). In Austria, the mineral oil tax on
                            diesel is € 347 and € 98 per 1,000 liters on heating
                            oil (sulfur content below 10 ppm / above 10 ppm €
                            128). Diesel is therefore taxed lower and heating
                            oil higher than in Germany. To prevent abuse / tax
                            evasion, heating oil is colored red and provided
                            with a chemical marker that can be detected for a
                            very long time and in a very low concentration.
                            <div>
                              <h3>
                                <small>Additive:</small>{' '}
                              </h3>
                            </div>
                            To increase the cetane number (ignitability), diesel
                            is mixed with appropriate additives at the refinery.
                            In winter, diesel is also added cold protection as
                            standard. This is not the case with heating oil. The
                            increase in resistance to cold is partly due to the
                            increase in the amount of kerosene in the diesel
                            (blending of the various refinery products from the
                            range of middle distillates) and partly through the
                            addition of special cold protection additives that
                            prevent the formation of paraffin crystals
                            <div>
                              <h3>
                                <small>Biogenic fraction:</small>{' '}
                              </h3>
                            </div>
                            While standard heating oil according to the DIN
                            standard currently has to be of purely mineral
                            origin (except bio heating oil according to the
                            pre-standard DIN V 51603-6), diesel fuel according
                            to DIN EN 590 has had a permissible bio content
                            (FAME - fatty acid methyl ester) of 5% since 2008 in
                            order to meet environmental protection targets
                            fulfill. According to the BImSchV (Federal Immission
                            Control Ordinance), DIN 51628 also applies to diesel
                            in Germany, which admixes up to 7% vol. FAME
                            allowed.
                          </p>
                          <Button href="/price" color="primary" size="md" round>
                            Order Now..
                          </Button>
                        </span>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(pillsStyle)(CustomSectionPills)

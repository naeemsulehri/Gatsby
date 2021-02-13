import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// core components
import InfoArea from '../components/InfoArea/InfoArea'
import Timeline from '@material-ui/icons/Timeline'
import Card from '../components/Card/Card.jsx'

import loginStyle from '../assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx'

class CustomTimelineSection extends React.Component {
  render() {
    const comments = [
      {
        id: 1,
        title: 'Marketing',
        description:
          "We've created the marketing campaign of the website. It was a very interesting collaboration.",
      },
      {
        id: 2,
        title: 'Marketing',
        description:
          "We've created the marketing campaign of the website. It was a very interesting collaboration.",
      },
      {
        id: 3,
        title: 'Marketing',
        description:
          "We've created the marketing campaign of the website. It was a very interesting collaboration.",
      },
      {
        id: 4,
        title: 'Marketing',
        description:
          "We've created the marketing campaign of the website. It was a very interesting collaboration.",
      },
      {
        id: 5,
        title: 'Development',
        description:
          "We've created the Development campaign of the website. It was a very interesting collaboration.",
      },
    ]

    const cards = []

    for (const comment of comments) {
      cards.push(
        <Card key={comment.id}>
          <InfoArea
            title={comment.title}
            description={comment.description}
            icon={Timeline}
            iconColor="rose"
          />
        </Card>
      )
    }

    return (
      <React.Fragment>
        {cards.slice(Math.max(cards.length - 3, 0))}
      </React.Fragment>
    )
  }
}

export default withStyles(loginStyle)(CustomTimelineSection)

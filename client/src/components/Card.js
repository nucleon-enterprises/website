import {Card, CardActions, CardActionButton, CardMedia, CardActionButtons, CardActionIcon, CardActionIcons, CardPrimaryAction} from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import React, {Component} from 'react';

class NCard extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    return(
        <Card>
        <CardPrimaryAction>
        <CardMedia
          sixteenByNine
          style={{
            backgroundImage: `url(${this.props.media})`
          }}
        />
        <div style={{ padding: '0rem 1rem 1rem 1rem' }}>
          <Typography use="headline6" tag="h2">
            {this.props.title}
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="textSecondaryOnBackground"
            style={{ marginTop: '-1rem' }}
          >
            {this.props.subtitle}
          </Typography>
          <Typography
            use="body1"
            tag="div"
            theme="textSecondaryOnBackground"
          >
            {this.props.content}
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <CardActionButton>{this.props.buttonA}</CardActionButton>
          <CardActionButton>{this.props.buttonB}</CardActionButton>
        </CardActionButtons>

      </CardActions>
      </Card>
    )
}
}
export default NCard;
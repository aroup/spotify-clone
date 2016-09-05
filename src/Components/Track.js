import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mouseOverColor = '#ADD8E6';
const mouseOutColor = 'white';

class Track extends React.Component{
  constructor(props){
    super(props);
    this.handleOnMouseOver=this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut=this.handleOnMouseOut.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnMouseOver(event){
    event.target.style.backgroundColor=mouseOverColor;
  }
  handleOnMouseOut(event){
    event.target.style.backgroundColor=mouseOutColor;
  }
  handleOnClick(event){
    this.props.playPreview(this.props.track.preview_url);
  }
  render() {
    return (
      <MuiThemeProvider>
        <ListItem
          style = {Track.styles.li}
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
          onClick = {this.handleOnClick}
          >
          {this.props.track.name}
        </ListItem>
      </MuiThemeProvider>
    );
  }
}

Track.propTypes={
  track : React.PropTypes.object.isRequired,
  playPreview: React.PropTypes.func.isRequired
};

Track.styles={
  li : {
    fontSize :'1.5em',
    padding :'0.2em',
    listStyleType : 'none',
    backgroundColor : mouseOutColor
  }
};

export default Track;

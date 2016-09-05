import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';


class Album extends React.Component{
  constructor(props){
    super(props);
    this.handleOnClick=this.handleOnClick.bind(this);
  }
  handleOnClick(event){
    this.props.getTracks(this.props.album.id);
  }
  render(){
    return (
      <MuiThemeProvider>
        <ListItem>
          <img
            src={this.props.album.images[1].url}
            alt={this.props.album.name}
            style = {Album.styles.img}
            onClick={this.handleOnClick}
          />
        </ListItem>
      </MuiThemeProvider>
    );
  }
}

Album.propTypes = {
  album : React.PropTypes.object.isRequired,
  getTracks: React.PropTypes.func.isRequired
};

Album.styles = {
  img : {
    marginBottom : '1em'
  }
};

export default Album;

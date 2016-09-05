import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Track from './Track';

class TrackList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const tracks = this.props.tracks.map((track)=><Track key={track.id} track={track} playPreview={this.props.playPreview}/>);
    return (
      <div className="col-md-8">
        <ul style={TrackList.styles.ul}>
          {tracks}
        </ul>
      </div>
    );
  }
}

TrackList.styles={
  ul : {
    listStyle : 'none'
  }
};

TrackList.propTypes={
  tracks: React.PropTypes.array.isRequired,
  playPreview : React.PropTypes.func.isRequired
};

export default TrackList;

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Album from './Album';

const AlbumList = (props) =>{
  const albums = props.albums.map((album)=>
  <Album key={album.id} album ={album} getTracks={props.getTracks}/>);
  return (
    <div className="col-md-4" style={AlbumList.styles.div}>
      <ul  style={AlbumList.styles.ul}>
      {albums}
      </ul>
    </div>

  );
};

AlbumList.styles = {
  div: {
    width: 370,
    marginLeft: 30,
    textAlign: 'right',
    maxHeight: '85vh',
    overflowY: 'auto'
  },
  ul: {
    listStyle: 'none'
  }
};


AlbumList.propTypes= {
  albums : React.PropTypes.array.isRequired,
  getTracks : React.PropTypes.func.isRequired
};

export default AlbumList;

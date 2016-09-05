import React from 'react';
import SearchBar from './SearchBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {render} from 'react-dom';
import AlbumList from './AlbumList';
import * as musicApi from '../Api/musicApi';
import ShowError from './ShowError';
import TrackList from './TrackList';

class App extends React.Component {
  constructor(){
    super() ; // we don't need props , but have to call super , because without super, we couldn't call this
    this.state= {
      albums:[],
      tracks: []
    };
    this.currentPreview=null,
    this.getAlbums=this.getAlbums.bind(this);
    this.processAlbums=this.processAlbums.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.processTracks= this.processTracks.bind(this);
    this.playPreview = this.playPreview.bind(this);
  }

  getAlbums(artist){
    musicApi.getAlbums(artist,this.processAlbums);
  }

  getTracks(albumId){
    musicApi.getTracks(albumId,this.processTracks);
  }

  playPreview(previewUrl) {
    if (this.currentPreview) {
      const curAudioObject = this.currentPreview;
      curAudioObject.pause();
    }

    const newAudioObject = new Audio(previewUrl);
    this.currentPreview = newAudioObject,

    newAudioObject.play();
  }
  
  processAlbums(payload){
      if(typeof payload.albums ==='undefined'){
        this.setState({
          albums: [],
          tracks : []
        });
      }
      else{
        this.setState({
          albums: payload.albums.items
        });
      }
  }

  processTracks(payload){
    //console.log(payload.tracks);

      this.setState({
        tracks : payload.tracks.items
      });

  }


  render() {

    return (
      <div>
       <SearchBar getAlbums={this.getAlbums}/>
       <AlbumList albums={this.state.albums} getTracks={this.getTracks}/>
       <TrackList tracks={this.state.tracks} playPreview={this.playPreview}/>
      </div>
    );
  }
}

export default App;

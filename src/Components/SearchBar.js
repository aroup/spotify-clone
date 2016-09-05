import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SearchBar extends React.Component {
  constructor(props){
    super(props); // if we don't call super , 'this' keyword would be undefined
                  // we can't call this.props if we don't pass props to super
    this.state = {
      searchTerm :''
    };
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleInputChange(event){
    this.setState({
      searchTerm : event.target.value
    });
  }
  handleKeyPress(event){
    if(event.key==='Enter'){
      this.props.getAlbums(this.state.searchTerm);
    }
  }
  render() {
    return(
      <MuiThemeProvider>
      <div style={SearchBar.styles.div}>
      <TextField
        hintText="Artist Name"
        floatingLabelText="Search Artist"
        onChange={this.handleInputChange}
        onKeyPress={this.handleKeyPress}
        fullWidth={false}
        style={SearchBar.styles.input}
      /> <br />
      </div>
      </MuiThemeProvider>
    );
  }
}

SearchBar.propTypes={
  getAlbums: React.PropTypes.func.isRequired
};

SearchBar.styles = {
  div: {
    margin: 30,
    textAlign: 'center'
  },
  input: {
    width: '60%'
  }
};


export default SearchBar;

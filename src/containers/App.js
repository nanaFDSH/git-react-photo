import React, { Component } from 'react';
import PhotoWall from './photoWall/photoWall'
import '../common/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotoWall/>
        <div className="txt"><a href={'https://github.com/nanaFDSH/git-react-photo'}>github地址</a></div>
      </div>
    );
  }
}

export default App;

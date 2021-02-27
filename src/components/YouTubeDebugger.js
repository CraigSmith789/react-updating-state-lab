// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
     
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  } 

  handleClick() {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }); 
  };

  handleClick2() {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
        ...this.state.settings.video,
        resolution: '720p'
        }
      }
    }); 
  };
  

  
  render() {
    return (
      <div>
        
        <button className="bitrate" onClick={(e) => this.handleClick(e)}>bitrate</button>
        <button className="resolution" onClick={(e) => this.handleClick2(e)}>resolution</button>
      </div>
    );
  }
} 
 
  export default YouTubeDebugger;
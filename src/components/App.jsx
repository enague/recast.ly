class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: exampleVideoData,
      title: exampleVideoData[0].snippet.title,
      description: exampleVideoData[0].snippet.description,
      vidId: exampleVideoData[0].id.videoId
    };
  }
  

  render() {
    
    console.log(this.state.vidId);
    //this.setState({name: 'Jace'})
    // console.log(this.state.name);

    return (
        <div>
            <nav className="navbar">
              <div className="col-md-6 offset-md-3">
                <Search />
              </div>
            </nav>
            <div className="row">
              <div className="col-md-7">
                <VideoPlayer 
                  video={this.state.data} 
                  title={this.state.title}
                  description={this.state.description}
                  vidId={this.state.vidId}
                />
              </div>
              <div className="col-md-5">
                <VideoList videos={this.state.data}/>
              </div>
            </div>
          </div>
    );
  };

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
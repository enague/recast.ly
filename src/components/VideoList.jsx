var VideoList = (props) => {
  // console.log(props.collection[0]);
  //var videos = props.videos[0];
   console.log(props);

  var entries = [];

  for (var i = 0; i < props.videos.length; i++) {
    var title = props.videos[i].snippet.title;
    var description = props.videos[i].snippet.description;
    var imgurl = props.videos[i].snippet.thumbnails.default.url;
    entries.push(<VideoListEntry title={title} description={description} imgurl={imgurl}/>);
  }
  
  return (<div className="video-list">{entries}</div>);
};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};



// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

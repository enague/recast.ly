var VideoList = (props) => {
  // console.log(props.collection[0]);
  var videos = props.videos[0];
  // console.log(videos);

  var entries = [];

  for (var i = 0; i < videos.length; i++) {
    var title = videos[i].snippet.title;
    var description = videos[i].snippet.description;
    var imgurl = videos[i].snippet.thumbnails.default.url;
    entries.push(<VideoListEntry title={[title]} description={[description]} imgurl={[imgurl]}/>);
  }
  
  console.log(videos);
  // return;
  return (<div className="video-list">{entries}</div>);
};
// pseudocode
// we think we need to use for each.
/*
    problems with instantiating videoListEntry with the appropriate
title and description. what we want to happen is:
    go thru each title/description in the videos collection
      for each one, call <VideoListEntry ... />

    the problem we run into is that React only knows about returning
    once
*/

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};



// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

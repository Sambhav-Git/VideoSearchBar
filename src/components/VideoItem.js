import './VideoItem.css'
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" alt="" src={video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                <a href="ww.google.com" className="header">{video.snippet.title}</a>
            </div>
        </div>
    );
}

export default VideoItem;
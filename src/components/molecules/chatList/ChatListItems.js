import React, { Component } from "react";
import Avatar from "./Avatar";
import {withRouter} from 'react-router-dom'

 class ChatListItems extends Component {
  
  constructor(props) {
    super(props);
  }

 
  render() {
    function selectChat(uid) {
      //this.props.history.push('/live-chat/'+this.props.uid)
  
      window.location.href = process.env.REACT_APP_BASE_URL+'/live-chat/'+uid
      // for (
      //   let index = 0;
      //   index < e.currentTarget.parentNode.children.length;
      //   index++
      // ) {
      //   e.currentTarget.parentNode.children[index].classList.remove("active");
      // }
      // e.currentTarget.classList.add("active");
    };
    return (
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={() => selectChat(this.props.uid)}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Avatar
          image={
            this.props.image ? this.props.image : "http://placehold.it/80x80"
          }
          isOnline={this.props.isOnline}
        />

        <div className="userMeta">
          <p>{this.props.name}</p>
          <span className="activeTime">32 mins ago</span>
        </div>
      </div>
    );
  }
}

export default withRouter(ChatListItems)

import React, { Component} from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";


export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChats: props.dataUser,
    }; 
  }

  render() {
    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i> 
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                uid={item.uid}
                name={item.fullName}
                key={item.uid}
                animationDelay={index + 1}
                active={item.uid === this.props.uid ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

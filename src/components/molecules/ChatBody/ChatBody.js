import React, { Component , useState } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../ChatContent/ChatContent";
import Empty from '../../../parts/EmptyState'

export default class ChatBody extends Component {
  constructor(props) {
    super(props)
    
    console.log("dataChat" , this.props.uid)
  }

  render() {
    return (
      <div className="main__chatbody">
        <ChatList uid={this.props.uid}  dataUser={this.props.dataUser} />
        {this.props.uid ? (<ChatContent uid={this.props.uid} />) : (<div className="mx-auto flex-row"><h3>Pilih user chat</h3></div>) }
        
      </div>
    );
  }
}

import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import moment from "moment";
import chats from "../../../constants/api/chat";
import users from "../../../constants/api/users";
import chat from "../../../store/reducers/chat";
import changeHumanize from '../../../helpers/hummanDate'

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);

 

  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      msg: "",
      is_loading: false,
      user: {},
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  getUser = () => {
    const sender = this.props.uid;
    users.details(sender, (data) => {
      this.setState({ user: data.val() });
    });
  };

  getChat = () => {
    this.setState({ is_loading: true });
    const user = JSON.parse(localStorage.getItem("KHASMA:token"));
    const sender = this.props.uid;
    console.log(sender);
    const chatId = `${user.uid}_${sender}`;
    const date = "06092021"; //moment(new Date()).format("MMDDYYYY");
    console.log(date);

    chats.getContentChat(chatId, date, (res) => {
      const response = res.val();
      
      const list = [];
      if (response) {
        Object.keys(response).map((val, key) => {
          const dataChat = response[val];
          const newDataChat = [];

          Object.keys(dataChat).map((itemChat , k) => {
            var object = {
              key: itemChat,
              image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
              type: dataChat[itemChat].sendBy === user.uid ? "" : "other",
              msg: dataChat[itemChat].chatContent,
              date : dataChat[itemChat].chatDate
            };
            // newDataChat.push({
            //   id: itemChat,
            //   data: object,
            // });
            list.push(object);
          });


         
        });
      }

      this.setState({ chat: list });
      this.setState({ is_loading: false });
      
      this.scrollToBottom()
    });
  };

  sendMsg = (data) => {
    const user = JSON.parse(localStorage.getItem("KHASMA:token"));
    const sender = this.props.uid;
    const chatId = `${user.uid}_${sender}`;
    const date = moment(new Date()).format("DD-MM-YYYY");

    chats.sendMessage(chatId, date, { ...data, sendBy: user.uid }, (res) => {
      console.log(res);
    });
  };

  componentDidMount() {
    this.getUser();
    this.getChat();

    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.state.chat.push({
            key: 1,
            type: "",
            date : moment(Date.now()).format("DD-MM-YYYY HH:mm"),
            msg: this.state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          });

          const sendingData = {
            chatContent: this.state.msg,
            chatDate: moment(Date.now()).format("DD-MM-YYYY HH:mm"),
            chatTime: moment(Date.now()).format("HH:mm"),
          };

          this.sendMsg(sendingData);

          this.setState({ chat: this.state.chat });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }

  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

 

  send = () =>
  {
    if (this.state.msg != "") {
      this.state.chat.push({
        key: 1,
        type: "",
        msg: this.state.msg,
        date : moment(Date.now()).format("DD-MM-YYYY HH:mm"),
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      });

      const sendingData = {
        chatContent: this.state.msg,
        chatDate: moment(Date.now()).format("DD-MM-YYYY HH:mm"),
        chatTime: moment(Date.now()).format("HH:mm"),
      };

      this.sendMsg(sendingData);

      this.setState({ chat: this.state.chat });
      this.scrollToBottom();
      this.setState({ msg: "" });
    }

  }

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              />
              <p>{this.state.user ? this.state.user.fullName : ""}</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.is_loading ? (
              <div>Loading</div>
            ) : (
              this.state.chat.map((itm, index) => {
                
                return (
                  <ChatItem
                    animationDelay={index + 2}
                    key={itm.key}
                    user={itm.type ? itm.type : "me"}
                    msg={itm.msg}
                    image={itm.image}
                    date={changeHumanize(itm.date)}
                  />
                );
              })
            )}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button onClick={this.send} className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

import React, { useEffect , useState } from "react";
import ListChat from "../../components/atoms/ListChat";
import ChatBox from "../../components/molecules/ChatBox";
import Navbar from "../../components/atoms/Navbar";
import ChatBody from "../../components/molecules/ChatBody/ChatBody";
import users from "../../constants/api/users";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { fetchUsers } from "../../store/actions/getUser";
import { fetchChat } from "../../store/actions/chat";
import chats from "../../constants/api/chat";
import { list } from "postcss";
export default function LiveChat({match , history}) {
  const dispatch = useDispatch();
  const GETUSER = useSelector((state) => state.getUser);
  const GETCHAT = useSelector((state) => state.chat);

  function getUser() {
    users.get((data) => {
      data = data.val();
      var list = [];
      if (data && Object.keys(data).map.length > 0) {
        Object.keys(data).map((val, key) => {
          var object = {
            fullName: data[val].fullName,
            uid: val,
          };
          list.push(object);
        });
      }
      dispatch(fetchUsers(list));
    });
  }

  
  useEffect(() => {
    window.scroll(0, 0);
    getUser();
    console.log("state chat" , GETCHAT)
  }, [dispatch]);

  return (
    <>
      <Navbar></Navbar>
      <div className="py-8 align-middle inline-block min-w-full sm:px-6 lg:px-20 ml-40">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          {GETUSER.status === "error" && GETUSER.message}
          {GETUSER.status === "ok" &&
            (GETUSER.total > 0 ? (
              <ChatBody  uid={match.params.uid ? match.params.uid : '' } dataUser={GETUSER.data} />
            ) : (
              <div></div>
            ))}
        </div> 
      </div>
    </>
  );
}

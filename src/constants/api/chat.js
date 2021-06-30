import firebase from "../../configs/firebase";

export default {
    getContentChat : (id_chat , date  ,cb ,ecb) => {
        firebase.database().ref(`/chatting/${id_chat}/allChat/`).on('value' , cb , ecb);
    },
    sendMessage : (id_chat , date , data , cb ) => {
        const uid = Date.now()
        firebase.database().ref(`/chatting/`).child(id_chat).child('allChat').child(date).child(uid).set({...data} , cb)
    }
}

import React from 'react';
import './App.css';



function IsMe() {

    // const [user] = useAuthState(auth);
  
    return (
      <div className="App">
        <header>
          <h1>⚛️🔥💬</h1>
          {/* <SignOut /> */}
        </header>
  
        <section>
          {/* {user ? <ChatRoom /> : <SignIn />} */}
        </section>
  
      </div>
    );
    
  }

  
function ChatRoom() {
    
  
    return (<>
      <main>
{/*   
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span> */}
  
      </main>
  
      <form>
  
        <input placeholder="say something nice" />
  
        <button type="submit">🕊️</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    // const { text, uid, photoURL } = props.message;
        
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div>
       
        <p>Dumy</p>
      </div>
    </>)
  } 




// const IsMe = () => (
//     <div className="box-content h-16 w-36 p-4 border-4">
     
//         <h2>Chat Box 2</h2>
        
    
//     </div>


// )

        export default IsMe;
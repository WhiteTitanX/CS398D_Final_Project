exports.getPublicProfilePath = function (uid){
  if(!uid){
    uid=''
  }
  return `/users/publicProfile/${uid}`;
};

exports.getPrivateProfilePath = function (uid){
  if(!uid){
    uid=''
  }
  return `/users/privateProfile/${uid}`;
};

exports.getPrivateProfileChatroomPath = function (uid,chatroomID){
  if(!uid){
    uid=''
  }
  if(!chatroomID){
    chatroomID=''
  }
  return `${exports.getPrivateProfilePath(uid)}/chatrooms/${chatroomID}`;
};

exports.getChatroomPath = function (chatroomID){
  if(!chatroomID){
    chatroomID=''
  }
  return `/chatrooms/${chatroomID}`;
};

exports.getChatroomMessagesPath = function (chatroomID,messageID){
  if(!chatroomID){
    chatroomID=''
  }
  if(!messageID){
    messageID=''
  }
  return `/chatrooms/${chatroomID}/messages/${messageID}`;
};

exports.createChatRoom = function (name,icon){
  return new Promise((resolve, reject) => {
    let chatroom = {
      name:name,
      icon:icon
    };
    global.firebase.database().ref(exports.getChatroomPath()).push(chatroom)
      .then(res=>{
        global.firebase.database().ref(exports.getChatroomPath(res.key)).update({key:res.key})
          .then(()=>{
            resolve();
          })
          .catch(error=>{
            reject(error);
          });
      })
      .catch(error=>{
        reject(error);
      });
  });
};

exports.joinChatRoom = function(chatroomName){
  return new Promise((resolve, reject) => {
    global.firebase.database().ref(exports.getChatroomPath())
    //.once('value')
      .orderByChild('name')
      .equalTo(chatroomName)
      .once('value')
      .then(data => {
        //console.log(data.val());
        let chatrooms = data.val();
        for(let key in chatrooms){
          console.log(chatrooms[key].name);
          if(chatrooms[key].name===chatroomName){
            let update = {};
            update[key] = chatrooms[key];
            global.firebase.database().ref(exports.getPrivateProfileChatroomPath(global.firebase.auth().currentUser.uid)).update(update)
              .then(()=>{
                resolve();
              })
              .catch(error=>{
                reject(error);
              });
          }
        }
        //reject('No Chatroom with that name');
      })
      .catch(error=>{
        reject(error);
      });
  });
};

exports.getJoinedChatroomList = function(){
  return new Promise((resolve, reject) => {
    global.firebase.database().ref(exports.getPrivateProfileChatroomPath(global.firebase.auth().currentUser.uid))
      .once('value')
      .then(data=>{
        let chatroomList = [];
        for(let key in data.val()){
          chatroomList.push(data.val()[key])
        }
        resolve(chatroomList);
      })
      .catch(error=>{
        reject(error);
      });
  });
};

exports.sendMessages = function (messages,chatroomID){
  return new Promise((resolve, reject) => {
    for(let message of messages){
      message.createdAt = message.createdAt.toString();
      //console.log(message,chatroomID);
      global.firebase.database().ref(`${exports.getChatroomMessagesPath(chatroomID)}`).push(message)
        .then(res=>{
          global.firebase.database().ref(exports.getChatroomMessagesPath(chatroomID,res.key)).update({key:res.key})
            .then(()=>{
              resolve();
            })
            .catch(error=>{
              reject(error);
            });
        })
        .catch(error=>{
          reject(error);
        });

    }

  });
  /*{
    _id: 1,
      text: 'Hello developer',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    }
  }
  */
};

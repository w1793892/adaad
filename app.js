const { WebcastPushConnection } = require('tiktok-livestream-chat-connector');

// Username of someone who is currently live
    let tiktokUsername = "trickshotjake";

// Create a new wrapper object and pass the username
    let tiktokChatConnection = new WebcastPushConnection(tiktokUsername);

// Connect to the chat (await can be used as well)
    tiktokChatConnection.connect().then(state => {
    console.info(`Connected to roomId ${state.roomId}`);
    }).catch(err => {
      console.error('Failed to connect', err);
    })

// Define the events that you want to handle
// In this case we listen to chat messages (comments)
   tiktokChatConnection.on('chat', data => {
     return(`${data.uniqueId} (userId:${data.userId}) writes: ${data.comment}`);
   })


// ...and more events described in the documentation below

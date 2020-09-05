import React from 'react';

export default function RoomChatMain(props: any) {
  const convertDate = (dateAt: any) => {
    const date = new Date(dateAt).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    });
    return date;
  };

  return (
    <div className="room-chat-main-box">
      {props.messages.map((message: any) => {
        console.log(message);
        const isMe = message.username === props.username;
        return (
          <div key={message._id}>
            {isMe ? (
              <div className="message-row-me">
                {/* <div>{message.username}</div> */}
                <div className="message-content-me">{message.message}</div>
                <div className="message-date-me">
                  {convertDate(message.created)}
                </div>
              </div>
            ) : (
              <div className="message-row-other">
                <div className="chat-profile-other">
                  <i className="far fa-user"></i>
                </div>
                <div className="message-other-first-row">
                  <div className="message-username-other">
                    {message.username}
                  </div>
                  <div className="message-other-second-row">
                    <div className="message-content-other">
                      {message.message}
                    </div>
                    <div className="message-date-other">
                      {convertDate(message.created)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

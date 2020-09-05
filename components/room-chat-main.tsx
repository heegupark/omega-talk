import React, { useState, useEffect } from 'react';

export default function RoomChatMain(props: any) {
  const roomchatRef = React.useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const convertDate = (dateAt: any) => {
    const date = new Date(dateAt).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    });
    return date;
  };

  useEffect(() => {
    if (roomchatRef.current) {
      console.log(roomchatRef.current);
      roomchatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.messages]);
  return (
    <div
      className="room-chat-main-box"
      style={{ height: `${props.roommainHeight - 105}px` }}
    >
      {props.messages.map((message: any) => {
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
      <div ref={roomchatRef}></div>
    </div>
  );
}

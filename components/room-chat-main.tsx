import React, { useState, useEffect } from 'react';

export default function RoomChatMain(props: any) {
  let yesterday: any = null;
  const roomchatRef = React.useRef<HTMLDivElement>(null);
  const convertToDay = (dateAt: any) => {
    const thisDate = new Date(dateAt);
    const year = thisDate.toString().split(' ')[3];
    const month = thisDate.toString().split(' ')[1];
    const day = thisDate.toString().split(' ')[2];
    let date = `${month} ${day}, ${year}`;
    return date;
  };

  const convertToHour = (dateAt: any) => {
    const date = new Date(dateAt).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    });
    return date;
  };

  useEffect(() => {
    if (roomchatRef.current) {
      roomchatRef.current.scrollIntoView({ block: 'end', behavior: 'auto' });
    }
  }, [props.messages]);
  return (
    <div
      className="room-chat-main-box"
      style={{
        height: props.isMobile ? 'calc(100% - 20px)' : 'calc(100% - 100px)',
      }}
    >
      {props.messages.map((message: any) => {
        const isMe = message.username === props.username;
        const isJoined = message.message === props.roomId;
        const day = new Date(message.created).getDay();
        const isDayChanged = day !== yesterday;
        yesterday = day;
        return (
          <div key={message._id}>
            {isDayChanged && (
              <>
                <div className="line"></div>
                <div className="date-change">{`${convertToDay(
                  message.created
                )}`}</div>
              </>
            )}
            {isJoined ? (
              <div className="user-join-room">{`${message.username} joined`}</div>
            ) : isMe ? (
              <div className="message-row-me">
                {/* <div>{message.username}</div> */}
                <div className="message-content-me">{message.message}</div>
                <div className="message-date-me">
                  {convertToHour(message.created)}
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
                      {convertToHour(message.created)}
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

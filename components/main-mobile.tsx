import React, { useState, useEffect } from 'react';
import WindowMobile from '../components/window-mobile';

export default function MainMobile(props: any) {
  const [username, setUsername] = useState('' as any);

  useEffect(() => {
    if (localStorage.getItem('omega-talk-username')) {
      setUsername(localStorage.getItem('omega-talk-username'));
    }
  }, []);

  const signout = () => {
    localStorage.removeItem('omega-talk-username');
    setUsername('');
  };

  return (
    <>
      {username ? (
        <WindowMobile
          category="main"
          isMobile={props.isMobile}
          username={username}
          signout={signout}
        />
      ) : (
        <WindowMobile
          setUsername={setUsername}
          category="username"
          isMobile={props.isMobile}
        />
      )}
    </>
  );
}

import React, { useState } from 'react';

export default function AdminPassword(props: any) {
  const [InputPassword, setInputPassword] = useState('');
  const PasswordCheck = () => {
    if (InputPassword === 'meetuplab') {
      props.setPassword(true);
    } else {
      alert('wrong password');
    }
  };
  return (
    <div
      className="row"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1>Password</h1>
      <input
        type="text"
        className="form-control w-50"
        value={InputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <button onClick={() => PasswordCheck()}> Signin</button>
    </div>
  );
}

import React from 'react';

const Header = ({text, bg, count}) => {
    return (
      <div
        className={bg}
        style={{
          margin:' 30px  0',
          width: "200px",
          height: "50px",
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className='text'>{text}</div>
        <div style={{ marginLeft: 20, borderRadius: '50%', background: 'beige', width:25, height:25 }}>{count}</div>
      </div>
    );
};

export default Header;
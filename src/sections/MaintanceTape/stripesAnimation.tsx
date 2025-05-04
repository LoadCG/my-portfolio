import React from 'react';

const StripesAnimation = () => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height: '100%',
    display: 'flex',
    overflow: 'hidden'
  };

  const stripesStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '200%',
    background: 'repeating-linear-gradient(-45deg, rgb(0, 0, 0) 0 100px, rgb(255, 255, 0) 100px 200px)',
    animation: 'slide 15s ease-in-out infinite'
  };

  return (
    <><div><p className='text-white text-xl text-center'>sorry, this website is under maintenance</p></div><div style={containerStyle}>
      <div style={stripesStyle}>
      </div>
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            50% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div></>
  );
};

export default StripesAnimation;
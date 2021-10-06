import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Loading = () => {
  const styles = useSpring({
    loop: true,
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
  });
  return (
    <animated.div className="__dumi-default-custom-loading" style={styles}>
      <img src="/image/logo.png" />
    </animated.div>
  );
};

export default Loading;

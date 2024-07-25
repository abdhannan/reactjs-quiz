import { useEffect } from 'react';

function Timer({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const secs = secondRemaining % 60;

  useEffect(
    function () {
      const interval = setInterval(() => {
        dispatch({ type: 'tick' });
      }, 1000);

      //   CLEANUP
      return () => {
        clearInterval(interval);
      };
    },
    [dispatch]
  );

  return (
    <div className='timer'>
      {mins < 10 && '0'}
      {mins}:{secs < 10 && '0'}
      {secs}
    </div>
  );
}

export default Timer;

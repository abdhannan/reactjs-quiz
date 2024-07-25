function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className='result'>
        Your score <strong>{points}</strong> of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restartQuestion' })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;

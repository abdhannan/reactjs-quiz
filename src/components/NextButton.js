function NextButton({ dispatch, answer, index, numbQuestions }) {
  if (answer === null) return null;

  if (index < numbQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );

  if (index === numbQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finishQuestion' })}
      >
        Finish
      </button>
    );
}

export default NextButton;

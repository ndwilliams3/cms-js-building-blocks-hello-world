import { useSharedIslandReducer } from '@hubspot/cms-components';

export default function CountButton({ incrementBy = 0 }) {
  const [sharedState, dispatch] = useSharedIslandReducer();

  return (
    <>
      <button
        onClick={() => dispatch({ type: 'increment', value: incrementBy })}
      >
        Increment by {incrementBy}
      </button>

      <p>count: {sharedState.count}</p>
      <p>steps: {sharedState.totalSteps}</p>
    </>
  );
}

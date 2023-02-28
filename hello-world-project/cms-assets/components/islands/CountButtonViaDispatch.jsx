import { useSharedIslandReducer } from '@hubspot/cms-components';

export default function CountButton({ incrementBy = 0 }) {
  const [sharedState, dispatch, sharedStateID] = useSharedIslandReducer();

  return (
    <>
      <button
        onClick={() => dispatch({ type: 'increment', value: incrementBy })}
      >
        Increment by {incrementBy} (via reducer dispatch)
      </button>

      <p>Shared state ID: {sharedStateID}</p>
      <p>count: {sharedState.count}</p>
      <p>steps: {sharedState.totalSteps}</p>
    </>
  );
}

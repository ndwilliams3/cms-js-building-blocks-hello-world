import { useSharedIslandState } from '@hubspot/cms-components';

export default function CountButtonViaSetValue({ incrementBy = 0 }) {
  const [sharedState, setState] = useSharedIslandState();

  return (
    <>
      <button
        onClick={() =>
          setState({
            ...sharedState,
            count: sharedState.count + incrementBy,
            totalSteps: sharedState.totalSteps + 1,
          })
        }
      >
        Increment by {incrementBy}
      </button>

      <p>count: {sharedState.count}</p>
      <p>steps: {sharedState.totalSteps}</p>
    </>
  );
}

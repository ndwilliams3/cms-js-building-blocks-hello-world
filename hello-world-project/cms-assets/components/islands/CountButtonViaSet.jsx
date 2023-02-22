import { useSharedIslandState } from '@hubspot/cms-components';

export default function CountButtonViaSet({ incrementBy = 0 }) {
  const [sharedState, setState] = useSharedIslandState();

  return (
    <>
      <button
        onClick={() =>
          setState((prevState) => ({
            ...prevState,
            count: prevState.count + incrementBy,
            totalSteps: prevState.totalSteps + 1,
          }))
        }
      >
        Increment by {incrementBy}
      </button>

      <p>count: {sharedState.count}</p>
      <p>steps: {sharedState.totalSteps}</p>
    </>
  );
}

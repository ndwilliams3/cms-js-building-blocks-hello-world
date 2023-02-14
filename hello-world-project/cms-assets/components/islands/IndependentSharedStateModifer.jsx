import { useBasicSharedState } from '@hubspot/cms-components';

export default function IndependentSharedStateModifer() {
  const [, updateSharedState, sharedStateID] = useBasicSharedState();

  const addTimestamp = () => {
    updateSharedState((prev) => {
      prev = prev ?? [];
      return [...prev, Date.now()];
    });
  };

  return (
    <div>
      <button onClick={addTimestamp}>
        Add timestamp to &quot;{sharedStateID}&quot; shared state
      </button>
    </div>
  );
}

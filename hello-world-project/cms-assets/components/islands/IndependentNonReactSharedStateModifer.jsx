export default function IndependentSharedStateModifer({ sharedStateID }) {
  const addTimestamp = () => {
    document.dispatchEvent(
      new CustomEvent('hs-shared-state-update', {
        detail: {
          id: sharedStateID,
          newValue: [...(window.__hsSS.get(sharedStateID) || []), Date.now()],
        },
      }),
    );
  };

  return (
    <div>
      <button onClick={addTimestamp}>
        Add timestamp to &quot;{sharedStateID}&quot; shared state via DOM event
      </button>
    </div>
  );
}

export default function IndependentSharedStateModifer({ sharedStateID }) {
  const addTimestamp = () => {
    // const newValue = [...(window.__hsSS.get(sharedStateID) || []), Date.now()];
    const newValue = (prev) => [...(prev || []), Date.now()];

    document.dispatchEvent(
      new CustomEvent('hs-shared-state-update', {
        detail: {
          id: sharedStateID,
          newValue,
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

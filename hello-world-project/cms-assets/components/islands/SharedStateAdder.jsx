import { useState } from 'react';
import { useSharedIslandState } from '@hubspot/cms-components';

function SharedStateAdder() {
  const [sharedState, updateSharedState, sharedStateID] =
    useSharedIslandState();

  const [buffer, setBuffer] = useState('');

  const handleAddToSharedState = () => {
    updateSharedState((prevState) => {
      const newState = [...prevState, buffer];
      return newState;
    });
    setBuffer('');
  };

  const handleBufferInput = (e) => setBuffer(e.target.value);
  const handleBufferKeyDown = (e) => {
    if (e.key === 'Enter' && buffer) {
      handleAddToSharedState();
    }
  };

  return (
    <div>
      <h5>
        Shared state for {sharedStateID} {JSON.stringify(sharedState)}
      </h5>

      <form autoComplete="off">
        <input
          placeholder="Push on to shared state..."
          autoComplete="off"
          value={buffer}
          onInput={handleBufferInput}
          onKeyDown={handleBufferKeyDown}
          style={{ width: '15em', marginRight: '1em' }}
        />

        <button onClick={handleAddToSharedState} disabled={!buffer}>
          Add
        </button>
      </form>
    </div>
  );
}

export default SharedStateAdder;

import { Island, SharedIslandState } from '@hubspot/cms-components';
import IndependentSharedStateModifer from '../islands/IndependentSharedStateModifer.jsx?island';

export default function OtherSharedStateChangers({ sharedStateIDs }) {
  return (
    <div>
      {sharedStateIDs.map((id) => {
        return (
          <SharedIslandState id={id} key={id}>
            <Island
              id={`changer-${id}`}
              module={IndependentSharedStateModifer}
              wrapperStyle={{ marginTop: '1em' }}
            />
          </SharedIslandState>
        );
      })}
    </div>
  );
}

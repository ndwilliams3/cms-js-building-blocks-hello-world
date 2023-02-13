import { Island, BasicSharedState } from '@hubspot/cms-components';
import IndependentSharedStateModifer from '../islands/IndependentSharedStateModifer.jsx?island';

export default function OtherSharedStateChangers({ sharedStateIDs }) {
  return (
    <div>
      {sharedStateIDs.map((id, i) => {
        const emptyValue = {}; // intentionally empty

        return (
          <BasicSharedState id={id} value={emptyValue} key={id}>
            <Island
              module={IndependentSharedStateModifer}
              wrapperStyle={{ marginTop: '1em' }}
            />
          </BasicSharedState>
        );
      })}
    </div>
  );
}

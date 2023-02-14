import { Island } from '@hubspot/cms-components';
import IndependentNonReactSharedStateModifer from '../islands/IndependentNonReactSharedStateModifer.jsx?island';

export default function OtherSharedStateChangers({ sharedStateIDs }) {
  return (
    <div>
      {sharedStateIDs.map((id) => {
        return (
          <Island
            key={id}
            id={`non-react-channger-${id}`}
            module={IndependentNonReactSharedStateModifer}
            wrapperStyle={{ marginTop: '1em' }}
            sharedStateID={id}
          />
        );
      })}
    </div>
  );
}

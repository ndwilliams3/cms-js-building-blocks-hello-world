import { Island, SharedIslandState } from '@hubspot/cms-components';
import SharedStateAdderIsland from '../../islands/SharedStateAdder.jsx?island';

function SetOfIslands({ prefix, num, sharedStateID, hydrateOn }) {
  const arr = new Array(num).fill('');

  return arr.map((_, i) => {
    return (
      <Island
        module={SharedStateAdderIsland}
        id={`${prefix}${sharedStateID}-${i}`}
        key={i}
        hydrateOn={hydrateOn}
      />
    );
  });
}

export const Component = (props) => {
  const {
    island_prefix,
    num_island_per_state,
    renderTop,
    renderMiddle,
    renderBottom,
  } = props;

  return (
    <>
      {renderTop ? (
        <SharedIslandState id="top" value={['a', 'b', 'c']}>
          <SetOfIslands
            prefix={island_prefix}
            num={num_island_per_state}
            sharedStateID="top"
            hydrateOn="load"
          />
        </SharedIslandState>
      ) : (
        <h4>No Top</h4>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {renderMiddle ? (
        <SharedIslandState id="middle" value={['j', 'k', 'l']}>
          <SetOfIslands
            prefix={island_prefix}
            num={num_island_per_state}
            sharedStateID="middle"
            hydrateOn="load"
          />
        </SharedIslandState>
      ) : (
        <h4>No Middle</h4>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {renderBottom ? (
        <SharedIslandState id="bottom" value={['x', 'y', 'z']}>
          <SetOfIslands
            prefix={island_prefix}
            num={num_island_per_state}
            sharedStateID="bottom"
            hydrateOn="visible"
          />
        </SharedIslandState>
      ) : (
        <h4>No Buttom</h4>
      )}
    </>
  );
};

export { fields } from './fields.jsx';
export const meta = {
  label: `Shared state tester`,
};

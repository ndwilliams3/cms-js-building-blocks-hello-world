import {
  Island,
  SharedIslandReducer,
  SharedIslandState,
} from '@hubspot/cms-components';
import CountButtonIsland from '../islands/CountButtonViaDispatch?island';
import CountButtonViaSet from '../islands/CountButtonViaSet?island';
import CountButtonViaSetValue from '../islands/CountButtonViaSetValue.jsx?island';
import countReducer from '../islands/countReducer?client';

export default function SharedReducerTest() {
  return (
    <>
      <SharedIslandReducer
        value={{ count: 45, totalSteps: 0 }}
        reducer={countReducer}
      >
        <Island
          module={CountButtonIsland}
          incrementBy={1}
          hydrateOn="visible"
        />
        <br />
        <br />
        <Island
          module={CountButtonIsland}
          incrementBy={2}
          hydrateOn="visible"
        />
        <br />
        <br />
        <Island
          module={CountButtonIsland}
          incrementBy={3}
          hydrateOn="visible"
        />
      </SharedIslandReducer>
      <br />
      <br />
      <br />
      <br />

      <SharedIslandState value={{ count: 3, totalSteps: 0 }}>
        <Island
          module={CountButtonViaSet}
          incrementBy={1}
          hydrateOn="visible"
        />
        <br />
        <br />
        <Island
          module={CountButtonViaSet}
          incrementBy={2}
          hydrateOn="visible"
        />
        <br />
        <br />
        <Island
          module={CountButtonViaSet}
          incrementBy={3}
          hydrateOn="visible"
        />
      </SharedIslandState>

      <br />
      <br />
      <br />
      <br />

      <SharedIslandState value={{ count: -18, totalSteps: 0 }}>
        <Island
          module={CountButtonViaSetValue}
          incrementBy={1}
          hydrateOn="visible"
        />
        <br />
        <br />
        <Island
          module={CountButtonViaSetValue}
          incrementBy={2}
          hydrateOn="visible"
        />
        <br />
        <br />
        <Island
          module={CountButtonViaSetValue}
          incrementBy={3}
          hydrateOn="visible"
        />
      </SharedIslandState>
    </>
  );
}

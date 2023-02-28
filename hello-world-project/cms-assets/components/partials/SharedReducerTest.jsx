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
      <style
        dangerouslySetInnerHTML={{ __html: 'p { margin: 0.5em 0; };' }}
      ></style>
      <SharedIslandReducer
        value={{ count: 45, totalSteps: 0 }}
        reducer={countReducer}
        id="top-state"
      >
        <Island
          module={CountButtonIsland}
          incrementBy={1}
          hydrateOn="visible"
        />
        <br /> <br />
        <Island
          module={CountButtonIsland}
          incrementBy={2}
          hydrateOn="visible"
        />
        <br /> <br />
        <Island
          module={CountButtonIsland}
          incrementBy={3}
          hydrateOn="visible"
        />
      </SharedIslandReducer>
      <br /> <br /> <br /> <br />
      <SharedIslandState value={{ count: 3, totalSteps: 0 }} id="middle-state">
        <Island
          module={CountButtonViaSet}
          incrementBy={1}
          hydrateOn="visible"
        />
        <br /> <br />
        <Island
          module={CountButtonViaSet}
          incrementBy={2}
          hydrateOn="visible"
        />
        <br /> <br />
        <Island
          module={CountButtonViaSet}
          incrementBy={3}
          hydrateOn="visible"
        />
      </SharedIslandState>
      <br /> <br /> <br /> <br />
      <SharedIslandState
        value={{ count: -18, totalSteps: 0 }}
        id="bottom-state"
      >
        <Island
          module={CountButtonViaSetValue}
          incrementBy={1}
          hydrateOn="visible"
        />
        <br /> <br />
        <Island
          module={CountButtonViaSetValue}
          incrementBy={2}
          hydrateOn="visible"
        />
        <br /> <br />
        <Island
          module={CountButtonViaSetValue}
          incrementBy={3}
          hydrateOn="visible"
        />
      </SharedIslandState>
    </>
  );
}

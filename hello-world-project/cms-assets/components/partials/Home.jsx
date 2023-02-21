import BeakerIcon from '@heroicons/react/24/solid/esm/BeakerIcon';
import { css, extractCss } from 'goober';

import homeStyles from '../../styles/home.module.css';

import Layout from '../Layout.jsx';
import HubSpotSprocket from '../HubSpotSprocket';

const DivClass = css`
  color: red;
  background: green;
`;

const style = extractCss();

function Home() {
  return (
    <>
      <style type="text/css">{style}</style>
      <Layout>
        <div className={DivClass}>Hello Goober!?</div>

        <BeakerIcon className="h-6 w-6 text-blue-500" />

        <div className={homeStyles.logo}>
          <HubSpotSprocket link={'https://hubspot.com'} />
        </div>
      </Layout>
    </>
  );
}

export default Home;

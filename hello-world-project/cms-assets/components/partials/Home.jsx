import { BeakerIcon } from '@heroicons/react/24/solid';

import homeStyles from '../../styles/home.module.css';

import Layout from '../Layout.jsx';
import HubSpotSprocket from '../HubSpotSprocket';

function Home() {
  return (
    <Layout>
      <BeakerIcon className="h-6 w-6 text-blue-500" />

      <div className={homeStyles.logo}>
        <HubSpotSprocket link={'https://hubspot.com'} />
      </div>
    </Layout>
  );
}

export default Home;

// import { useBasicSharedState } from '@hubspot/cms-components';
import layoutStyles from '../styles/layout.module.css';

function Layout({ children }) {
  // const [sharedState] = useBasicSharedState();

  return (
    <div className={layoutStyles.layout}>
      {children}

      {/* <h5>Shared state on server</h5>
      {JSON.stringify(sharedState)} */}
    </div>
  );
}

export default Layout;

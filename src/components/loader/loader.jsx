import SyncLoader from 'react-spinners/SyncLoader';
import '../../styles/day13.css';

const loader = () => (
  <div className="loaderContainer" align="center">
    <SyncLoader loading size={10} />
  </div>
);
export default loader;

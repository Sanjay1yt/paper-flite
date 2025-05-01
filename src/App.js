

import { Collections } from './components/Collections';
import { SideBar } from './components/SideBar';
import './styles/App.css';

function App() {
  return (
    <div className="app-layout">
      <SideBar />
      <div className="main-content">
        <Collections />
      </div>
    </div>
  );
}

export default App;

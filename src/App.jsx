import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardMain from './components/DashboardMain/DashboardMain';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <DashboardMain />
      </div>
    </div>
  );
}

export default App;

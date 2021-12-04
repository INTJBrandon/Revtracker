import './App.css';
import Login from './Login'
import MainNavBar from './Nav'
import MainFooter from './Footer';
import RevenueContainer from './RevenueContainer';

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <RevenueContainer />
      <MainFooter />
    </div>
  );
}

export default App;

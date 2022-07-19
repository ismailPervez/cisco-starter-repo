import './App.css';
import Banner from './components/banner';
import Exhibit from './components/exhibit';
import Ip from './components/ip';

function App() {
  return (
    <div className="App">
      <Banner />
      <main>
        {/* individual page component here */}
        <Exhibit>
          <Ip />
        </Exhibit>
        <Exhibit>
          <Ip ipv={6} />
        </Exhibit>
      </main>
    </div>
  );
}

export default App;

import './App.css';
import Banner from './components/banner';
import Exhibit from './components/exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <main>
        {/* individual page component here */}
        <Exhibit>
          <h2>Hello From Exhibit 1</h2>
        </Exhibit>
        <Exhibit>
        <h2>Hello From Exhibit 2</h2>
        </Exhibit>
      </main>
    </div>
  );
}

export default App;

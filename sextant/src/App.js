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
          <h2>Welcome IsmailPervez</h2>
        </Exhibit>
      </main>
    </div>
  );
}

export default App;

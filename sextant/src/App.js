import './App.css';
import Banner from './components/banner';
import Exhibit from './components/exhibit';
import Ip from './components/ip';
import PacketLatency from './components/PacketLatency';

function App() {
  return (
    <div className="App">
      <Banner />
      <main>
        {/* individual page component here */}
        <Exhibit>
          <h3>Your Public IPV4 Address</h3>
          <Ip />
        </Exhibit>
        <Exhibit>
          <h3>Your Public IPV6 Address</h3>
          <Ip ipv={6} />
        </Exhibit>
        <Exhibit>
          <h3>Network Latency</h3>
          <PacketLatency />
        </Exhibit>
      </main>
    </div>
  );
}

export default App;

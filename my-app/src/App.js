import './App.css';

function App() {
  return (
    <div className="container">
      <a href="maps://?q=55.83388,37.68029">iOS (with pin, iOS will lookup address too and show that as label)</a>
      <a href="geo:55.83388,37.68029">Android, no pin (just open at location)</a>
      <a href="geo:0,0?q=55.83388,37.68029">Android, with pin</a>
      <a href="geo:0,0?q=55.83388,37.68029(office)">Android, with pin, with custom label</a>
    </div>
  );
}

export default App;

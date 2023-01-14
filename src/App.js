import Feature from './components/Feature/Feature';
import NewArrivals from './components/NewArrivals/NewArrivals';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <NewArrivals/>
      <Feature/>
    </div>
  );
}

export default App;

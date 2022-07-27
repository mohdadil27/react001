import './App.css';

import slider from './components/slider';
import Service from './components/Service';



function App() {
  return (
    <>
     <slider />
      <div className="container text-center my-5" >
      <h1>Product Store</h1>
     
        <div className="row">
        <Service />
        </div>
   
      </div>

    </>
  );
}

export default App;

import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';


const Hates = () => (
  <div>
    <h2>hello from hates </h2>
  </div>
);

function App() {
  return (
    <div>
      
      
    <Route exact path="/" component={Homepage}/>
    <Route  path="/hates" component={Hates}/>
    
  
    </div>
  );
}

export default App;

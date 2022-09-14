import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import NavigationRoutes from './routes/NavigationRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationRoutes />
      </Router>
    </div>
  );
}

export default App;

import {
  Routes,
  Route} from 'react-router-dom';
import { Home , CreatePost , PostDetail , Navbar} from './index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      

      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/post" element={<PostDetail/>}  />
      <Route path="/create-post" element={<CreatePost/>}  />
      </Routes>
    
  
    </div>
  );
}

export default App;
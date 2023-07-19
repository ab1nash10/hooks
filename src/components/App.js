import {
  Routes,
  Route} from 'react-router-dom';
import { StyleRoot } from 'radium';
import { Home , CreatePost , PostDetail , Navbar} from './index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <StyleRoot>
    <div className="container">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/post/:postId" element={<PostDetail/>}  />
      <Route path="/create-post" element={<CreatePost />}  />
      </Routes>
    
  
    </div>
    </StyleRoot>
  );
}

export default App;

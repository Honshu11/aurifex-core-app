import './App.css'; 
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/dashboard';
import ProjectCard2 from './Components/ProjectCard/ProjectCard2';


function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <div>
          <ProjectCard2/>
          <ProjectCard2/>
        </div>
        <Dashboard/>
      </main>
    </div>
  );
}

export default App;

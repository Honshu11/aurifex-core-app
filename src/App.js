import './App.css'; 
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/dashboard';
import ProjectCard2 from './Components/ProjectCard/ProjectCard2';
import SignIn from './Components/SignIn/SignIn';


function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <div>
          <SignIn />
        </div>
        <div class="flex">
          <ProjectCard2/>
          <ProjectCard2/>
        </div>
        <Dashboard/>
      </main>
    </div>
  );
}

export default App;

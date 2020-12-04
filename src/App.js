import "./App.css";
import Profile from "./profile/Profile";
import image from "./myimg.jpg";
import ClickName from "./profile/ClickName";

function App() {
  return (
    <div className="App">
      <Profile
        fullName="Mohamed Ali Mahdhaoui"
        bio="Thank you for visiting my profile. Take your time to explore my webpage and consult the 
        different stages of my personal and professional journey.To find out more or for 
        a possible collaboration, do not hesitate to contact me."
        profession="Fullstack Js developer"
      >
        <img style={{ width: 400 }} src={image} />
      </Profile>
    </div>
  );
}

export default App;

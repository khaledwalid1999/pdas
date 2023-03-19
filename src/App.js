import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import Alexa from "./Images/alexa.png";
import Cortana from "./Images/cortana.png";
import Siri from "./Images/siri.png";
import "./styles.css";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <div className="ProfileCardList">
        <ProfileCard image={Alexa} handle="Alexa" title="Amazon" />
        <ProfileCard image={Cortana} handle="Cortana" title="Microsoft" />
        <ProfileCard image={Siri} handle="Siri" title="Apple" />
      </div>
    </div>
  );
}
export default App;

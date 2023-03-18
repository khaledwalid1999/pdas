import ProfileCard from "./ProfileCard";
import Alexa from "./images/alexa.jpg";
import Cortana from "./images/cortana.jpg";
import Siri from "./images/siri.jpg";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard img={Alexa} handle="@alexa99" title="alexa" />
      <ProfileCard img={Cortana} handle="@Cortana" title="Cortana" />
      <ProfileCard img={Siri} title="SirI" handle="@Siri" />
    </div>
  );
}
export default App;

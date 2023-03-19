import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import ProfileCardList from "./ProfileCardList";
import Alexa from "./Images/alexa.png";
import Cortana from "./Images/cortana.png";
import Siri from "./Images/siri.png";
import "./styles.css";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCardList
        profiles={[
          {
            image: Alexa,
            handle: "zzz",
            title: "aaaa",
            extendClass: "card ProfileCard",
          },
          {
            image: Cortana,
            handle: "zzz",
            title: "aaaa",
            extendClass: "card ProfileCard",
          },
          {
            image: Siri,
            handle: "zzz",
            title: "aaaa",
            extendClass: "card ProfileCard",
          },
        ]}
      />

      <div className="ProfileCardList">
        <ProfileCard
          image={Alexa}
          handle="Alexa"
          title="Amazon"
          extendClass="card ProfileCard"
        />
        <ProfileCard
          image={Cortana}
          handle="Cortana"
          title="Microsoft"
          extendClass="card ProfileCard"
        />
        <ProfileCard
          image={Siri}
          handle="Siri"
          title="Apple"
          extendClass="card ProfileCard"
        />
      </div>
    </div>
  );
}
export default App;

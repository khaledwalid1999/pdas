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
          { image: Alexa, handle: "@Alexa99", title: "Amazon" },
          { image: Cortana, handle: "@Cortana", title: "Microsoft" },
          { image: Siri, handle: "@Siri32", title: "Apple" },
        ]}
      />
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard image={Alexa} handle="@Alexa99" title="Amazon" />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={Cortana}
                handle="@Cortana"
                title="Microsoft"
              />
            </div>
            <div className="column is-4">
              <ProfileCard image={Siri} handle="@Siri32" title="Apple" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;

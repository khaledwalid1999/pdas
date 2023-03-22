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
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                image={Alexa}
                handle="@Alexa99"
                title="Amazon"
                description="Alexa was created by amazon and helps you with things"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={Cortana}
                handle="@Cortana"
                title="Microsoft"
                description="Cortana was created by Microsoft and helps you with things"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={Siri}
                handle="@Siri32"
                title="Apple"
                description="Siri was created by Apple and helps you with things"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;

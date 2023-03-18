import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard handle="@alexa99" title="alexa" />
      <ProfileCard handle="@Cortana" title="Cortana" />
      <ProfileCard title="SirI" handle="@Siri" />
    </div>
  );
}
export default App;

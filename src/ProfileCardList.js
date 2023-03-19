import ProfileCard from "./ProfileCard";
import "./styles.css";

function ProfileCardList({ profiles }) {
  return (
    <div className="ProfileCardList">
      {profiles.map((profile) => (
        <ProfileCard
          image={profile.image}
          handle={profile.handle}
          title={profile.title}
        />
      ))}
    </div>
  );
}
export default ProfileCardList;

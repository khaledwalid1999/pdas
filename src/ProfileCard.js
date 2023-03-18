import "./styles.css";
function ProfileCard({ image, handle, title }) {
  return (
    <div className="ProfileCard">
      <img src={image} className="ProfileImg" />
      <div>{title}</div>
      <div>PDA: {handle}</div>
    </div>
  );
}
export default ProfileCard;

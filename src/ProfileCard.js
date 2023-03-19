import "./styles.css";
function ProfileCard({ image, handle, title, extendClass }) {
  return (
    <div className={extendClass}>
      <img src={image} alt="pda logo" className="ProfileImg" />
      <div>{title}</div>
      <div>PDA: {handle}</div>
    </div>
  );
}
export default ProfileCard;

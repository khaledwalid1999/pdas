function ProfileCard({ image, handle, title }) {
  return (
    <div>
      <img src={image} />
      <div>title is {title}</div>
      <div>handle is {handle}</div>
    </div>
  );
}
export default ProfileCard;

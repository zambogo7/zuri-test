import avatar from "../assets/profile.jpg";
// import shareBtn from "../assets/share-06.svg";
import {
  Avatar,
  HiddenSlack,
  NameTitle,
  ProfileSectionStyle,
  //   ShareButton,
} from "./ProfileSectionStyle";
const ProfileSection = () => {
  return (
    <>
      <ProfileSectionStyle>
        <Avatar>
          <img src={avatar} id="profile__img" alt="Logo" />
        </Avatar>
        <NameTitle id="twitter">zambogo7</NameTitle>
      </ProfileSectionStyle>
      <HiddenSlack id="slack">zambogo7</HiddenSlack>
    </>
  );
};

export default ProfileSection;

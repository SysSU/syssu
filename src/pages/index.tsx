import ProfileImage from '../components/ProfilePage/ProfileImage';
import SocialLinks from '../components/ProfilePage/SocialLinks';
import ProfileDetails from '../components/ProfilePage/Details';

export default function Home() {
  return (
    <div className="pb-2">
      <ProfileImage />
      <ProfileDetails />
      <SocialLinks />
    </div>
  );
}

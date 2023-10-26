import DetailsBodyData from '../../../data/markdown/profile/Body.mdx';
import styles from './ProfilePage.module.css';
export interface IGetDetailsSuccess {
  title: string;
  subTitle: string;
  body: string;
}

export default function ProfileDetails() {
  return (
    <div id="profileDetails" className={styles.profileDetails}>
      <DetailsBodyData />
    </div>
  );
}

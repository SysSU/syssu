import Image from 'next/image';
import profileImage from '../../../public/profileImage.jpg';

export default function ProfileImage() {
  return (
    <div className="pb-2">
      <Image
        width={160}
        height={160}
        alt="Profile Image"
        src={profileImage}
        className="mx-auto rounded-full border-4 border-indigo-700 dark:border-indigo-700  shadow-indigo-600/70 dark:shadow-indigo-600/70 shadow-lg"
      />
    </div>
  );
}

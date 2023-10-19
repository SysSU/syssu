import { useFetch } from 'react-async';
import ProfileImage from '../components/ProfilePage/ProfileImage';
import SocialLinks from '../components/ProfilePage/SocialLinks';

interface PageDetailsREsponse {
  title: string;
  subTitle: string;
  body: string;
}

export default function Home() {
  const { data, error, isLoading } = useFetch('/api/data/frontPageDetails', {
    headers: { accept: 'application/json' },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const pageDetails = data as PageDetailsREsponse;

  return (
    <div className="pb-2">
      <ProfileImage />
      <h1 className="text-3xl font-bold dark:text-primary">
        {pageDetails.title}
      </h1>
      <h2 className="text-sm mt-2 dark:text-secondary font-bold italic">
        {pageDetails.subTitle}
      </h2>
      <div className="text-xs md:text-sm mt-2">
        <p dangerouslySetInnerHTML={{ __html: pageDetails.body }} />
      </div>
      <SocialLinks />
    </div>
  );
}

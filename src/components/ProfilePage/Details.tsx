import { useFetch } from 'react-async';

export interface IGetDetailsSuccess {
  title: string;
  subTitle: string;
  body: string;
}

export default function ProfileDetails() {
  const { data, error, isLoading } = useFetch('/api/data/frontPageDetails', {
    headers: { accept: 'application/json' },
  });

  if (isLoading) return <div id="loadingMessage">Loading...</div>;
  if (error) return <div id="errorMessage">Sorry, something happened =(</div>;

  const pageDetails = data as IGetDetailsSuccess;

  return (
    <div id="profileDetails">
      <h1
        className="text-3xl font-bold dark:text-primary"
        id="profileDetailsTitle"
      >
        {pageDetails.title}
      </h1>
      <h2
        className="text-lg mt-2 dark:text-secondary font-bold italic"
        id="profileDetailsSubTitle"
      >
        {pageDetails.subTitle}
      </h2>
      <div className="text-base md:text-sm mt-2" id="profileDetailsBody">
        <p dangerouslySetInnerHTML={{ __html: pageDetails.body }} />
      </div>
    </div>
  );
}

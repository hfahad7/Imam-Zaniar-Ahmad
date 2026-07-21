import ErrorState from '../components/error-state';

export const metadata = {
  title: 'Error Test',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ErrorTestPage() {
  return <ErrorState onTryAgain={() => {}} preview />;
}

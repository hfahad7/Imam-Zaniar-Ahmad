'use client';

import ErrorState from './components/error-state';

export default function ErrorPage({ reset }) {
  return <ErrorState onTryAgain={() => reset()} />;
}

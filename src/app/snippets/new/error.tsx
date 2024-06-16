"use client";

interface errorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: errorPageProps) {
  return <div>{error.message}</div>;
}

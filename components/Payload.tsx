import useSWRFetchPayload from '../pages/api/payloads';

export const Payload = (id: any) => {
  const { data, error, isLoading } = useSWRFetchPayload(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <p>Type: {data.type}</p>
    </>
  );
};

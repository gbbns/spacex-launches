import useSWRFetchPayload from '../pages/api/payloads';

export const Payload = (id: any) => {
  if (id === '') {
    return <p>No payload type found</p>;
  }

  const { data, error, isLoading } = useSWRFetchPayload(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <p>Payload type: {data.type}</p>
    </>
  );
};

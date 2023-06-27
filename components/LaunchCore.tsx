import useSWRFetchCore from '../pages/api/core';

export const LaunchCore = (id: any) => {
  if (id === '') {
    return <p>No core information found</p>;
  }
  const { data, error, isLoading } = useSWRFetchCore(id.coreID.core);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <p>Core ID: {data.id}</p>
      <p>Core serial: {data.serial}</p>
    </>
  );
};

import useSWR from 'swr';

const fetcher = async (url: String) => {
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
};

const useSWRFetchPayload = (id: any) => {
  const { data, error } = useSWR(`https://api.spacexdata.com/v4/payloads/${id.payloadID}` as string, fetcher);

  const isLoading = !data && !error;
  console.log(data);
  return { data, error, isLoading };
};

export default useSWRFetchPayload;



import useSWR from 'swr';

const fetcher = async (url: String) => {
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
};

const useSWRFetchCore = (id: any) => {
  const { data, error } = useSWR(`https://api.spacexdata.com/v4/core/${id.coreID}` as string, fetcher);

  const isLoading = !data && !error;
  return { data, error, isLoading };
};

export default useSWRFetchCore;
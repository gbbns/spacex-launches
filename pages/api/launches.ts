// import { NextApiRequest, NextApiResponse } from "next"

// async function getLaunchData(): Promise<object> {
//   const response = await fetch(process.env.NEXT_SPACEX_API_ENDPOINT as string);
//   if (!response.ok) {
//     throw new Error('Failed to fetch Space-X launch data')
//   }
//   const data = await response.json()
//   return data
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<object>
// ) {
//   try {
//     const launches = await getLaunchData()
//     res.status(200).json(launches)
//   } catch (error) {
//     console.error(error)
//     res.status(500).end('Failed to fetch launches')
//   }
// }

import useSWR from 'swr';

const fetcher = async (url: String) => {
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
};

const useSWRFetch = () => {
  const { data, error } = useSWR('https://api.spacexdata.com/v5/launches' as string, fetcher);
console.log(data);
  const isLoading = !data && !error;
  return { data, error, isLoading };
};

export default useSWRFetch;
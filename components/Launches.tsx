import { LaunchCard } from './LaunchCard';

export default function Launches(data: any) {
  return (
    <>
      <section className="data-wrapper">
        {data &&
          data.data
            .slice(0, 10)
            .map((launchData: any, index: number) => <LaunchCard launchItem={launchData} index={index} />)}
      </section>
    </>
  );
}

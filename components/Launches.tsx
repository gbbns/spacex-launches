import styles from '../styles/Home.module.css';
import LaunchCard from './LaunchCard';

export default function Launches(data: any) {
  return (
    <>
      <div className={styles.grid}>
        {data &&
          data.data
            .slice(0)
            .reverse()
            .slice(0, 10)
            .map((launchData: any, index: number) => (
              <div key={index} className="card-small">
                <h2>{launchData.name}</h2>
                <p>
                  {new Date(launchData.date_utc).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
            ))}
        <LaunchCard />
      </div>
    </>
  );
}

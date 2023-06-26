import styles from '../styles/Home.module.css';
import { LaunchCard } from './LaunchCard';

export default function Launches(data: any) {
  return (
    <>
      <div className={styles.grid}>
        {data &&
          data.data
            .slice(0)
            .reverse()
            .slice(0, 10)
            .map((launchData: any, index: number) => <LaunchCard launchItem={launchData} index={index} />)}
      </div>
    </>
  );
}

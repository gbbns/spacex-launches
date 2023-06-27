import { LaunchPayload } from './LaunchPayload';
import { LaunchStatus } from './LaunchStatus';
import { LaunchPatch } from './LaunchPatch';
import { LaunchCore } from './LaunchCore';

export const LaunchCard = ({ launchItem, index }: any) => {
  const {
    id,
    name,
    date_utc,
    cores,
    success,
    failures,
    links: {
      patch: { small },
    },
    payloads,
  } = launchItem;
  return (
    <>
      <div key={id} className="data-wrapper__item card">
        <h2>ID: {name || 'Info not provided'}</h2>
        <p>
          Date:{' '}
          {new Date(date_utc).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>

        {small && (
          <p>
            <LaunchPatch image={small} altText={name} />
          </p>
        )}

        {cores && cores.length > 0 && <LaunchCore coreID={cores[0]} />}

        {payloads && payloads.length > 0 && <LaunchPayload payloadID={payloads[0]} />}
        {payloads.length === 0 && <p>Payload type: Not provided</p>}
        <LaunchStatus success={success} failure={failures} />
      </div>
    </>
  );
};

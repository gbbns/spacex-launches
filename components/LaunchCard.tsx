import { Payload } from './Payload';
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
      <div key={id} className="card">
        <h2>ID: {name}</h2>
        <p>
          Date:{' '}
          {new Date(date_utc).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
        <p>
          <img src={small} alt={name} />
        </p>
        <p>Core ID: {cores[0].core}</p>
        {payloads && payloads.length > 0 && <p>{<Payload payloadID={payloads[0]} />}</p>}
        {payloads.length === 0 && <p>Payload type: Not provided</p>}
        <p>
          {success}-{failures}
        </p>
      </div>
    </>
  );
};

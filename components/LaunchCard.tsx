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
        <h2>{name}</h2>
        <p>
          {new Date(date_utc).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
        <p>
          <img src={small} alt={name} />
        </p>
        <p>{cores[0].core}</p>
        {payloads && <p>{<Payload payloadID={payloads[0]} />}</p>}
        <p>
          {success}-{failures}
        </p>
      </div>
    </>
  );
};

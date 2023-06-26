import { Payload } from './Payload';
export const LaunchCard = ({ launchItem, index }) => {
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
      <div key={id} className="card-small">
        <h2>{name}</h2>
        <p>
          {new Date(date_utc).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
        <p>{small}</p>
        <p>{cores[0].core}</p>
        <p>{<Payload payloadID={payloads[0]} />}</p>

        <p>
          {success}-{failures}
        </p>
      </div>
    </>
  );
};

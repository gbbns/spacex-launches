export const LaunchStatus = ({ success, failure }: any) => {
  const launchStatus = () => {
    switch (success) {
      case null:
        return 'Launch status not provided';
      case true:
        return 'Success';
      case false:
        return 'Failure';
    }
  };

  return (
    <>
      <p>Status: {launchStatus()}</p>
      {failure.length > 0 && (
        <ul>
          <li>Altitude failed: {failure[0].altitude || 'Info not provided'}</li>
          <li>Reason: {failure[0].reason || 'Info not provided'}</li>
          <li>Time into flight: {failure[0].time || 'Info not provided'}secs</li>
        </ul>
      )}
    </>
  );
};

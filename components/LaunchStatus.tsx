export const LaunchStatus = ({ success, failure }: any) => {
  const launchStatus = () => {
    switch (success) {
      case null:
        return 'Launch status not provided';
      case true:
        return 'Success 🚀';
      case false:
        return 'Failure 🚨';
    }
  };

  return (
    <>
      <p>
        <strong>Status:</strong> {launchStatus()}
      </p>
      {failure.length > 0 && (
        <ul>
          <li>
            <strong>Altitude failed:</strong> {failure[0].altitude || 'Info not provided'}
          </li>
          <li>
            <strong>Reason:</strong> {failure[0].reason || 'Info not provided'}
          </li>
          <li>
            <strong>Time into flight:</strong> {failure[0].time || 'Info not provided'}secs
          </li>
        </ul>
      )}
    </>
  );
};

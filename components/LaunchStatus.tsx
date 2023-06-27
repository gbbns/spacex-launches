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

  return <p>Status: {launchStatus()}</p>;
};

export const LaunchPatch = ({ image, altText }: any) => {
  if (image === null || '') {
    image = 'https://via.placeholder.com/150x150';
  }
  return (
    <>
      <img src={image} alt={altText} className="card__patch" />
    </>
  );
};

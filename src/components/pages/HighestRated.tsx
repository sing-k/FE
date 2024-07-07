import AlbumPageTemplate from "../templates/album/AlbumPageTemplate";

const HighestRated = () => {
  return (
    <>
      <AlbumPageTemplate
        category="평점 높은 순"
        albumType="averageScore"
      ></AlbumPageTemplate>
    </>
  );
};

export default HighestRated;

import AlbumPageTemplate from "../templates/album/AlbumPageTemplate";

const MostReview = () => {
  return (
    <>
      <AlbumPageTemplate
        category="평가 많은 순"
        albumType="reviewCount"
      ></AlbumPageTemplate>
    </>
  );
};

export default MostReview;

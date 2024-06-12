import MainLayout from "../common/MainLayout";
import AlbumSection from "../organisms/album/AlbumSection";

const AlbumPage = () => {
  return (
    <MainLayout>
      <AlbumSection title="최근 평가된 앨범" link="/recentreview" />
      <AlbumSection title="평가 많은 순" link="/mostreview" />
      <AlbumSection title="평점 높은 순" link="/highestrated" />
    </MainLayout>
  );
};

export default AlbumPage;

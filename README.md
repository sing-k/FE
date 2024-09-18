<h1>🎧SingK</h1>
<img src="https://github.com/user-attachments/assets/e9ca9775-863b-4db4-afe0-2b5aa771b60a"/>

<h2>프로젝트 소개</h2>
<p>음악을 사랑하는 리스너들을 위한 커뮤니티 웹 서비스 SingK를 기획하고 개발하였습니다.
SingK는 Spotify에서 제공하는 한국 앨범을 기반으로, 사용자들이 앨범에 대한 평가와 코멘트를 남길 수 있는 기능을 제공합니다. 또한, 사용자의 평가 데이터를 분석하여 통계 대시보드를 통해 음악에 대한 사용자 반응을 시각화하였습니다. 사용자 활동을 더욱 활발하게 만들기 위해 활동 수치를 계산하여 리워드를 제공하는 시스템을 도입하였으며, 음악 추천 게시판과 자유게시판을 추가하여 커뮤니티 기능을 강화했습니다. 마지막으로, 반응형 웹 디자인을 적용하여 모든 기기에서 최적의 사용자 경험을 제공할 수 있도록 개발하였습니다.</p>
<h3>개발 기간</h3>
2024.04~ 2024.08
<h3>개발 인원</h3>
FE 3명 / BE 3명  

### 프론트 기술 스택 
`React`, `Typescript`, `Axios`, `Styled-compoent`,`React-icons`, `React-query`, `React-hook-form`, `Chart.js`, `Figma`, `Vercel`
<h3>배포 링크</h3>
https://dev-singk.vercel.app/

<h2>팀원 소개 및 역할 (프론트)</h2>
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/Ahyoung-Kim"><img src="https://avatars.githubusercontent.com/u/79265861?v=4" width="150px;" alt=""/><br /><b>김아영</b></a><br /></td>
       <td align="center"><a href="https://github.com/baejb"><img src="https://avatars.githubusercontent.com/u/82064490?v=4" width="150px;" alt=""/><br /><b>배정빈</b></a><br /></td>
      <td align="center"><a href="https://github.com/Chooinsik"><img src="https://github.com/user-attachments/assets/9ce09af0-45cc-44dd-8ea9-21c94afebce2" width="150px;" alt=""/><br /><b>추인식</b></a><br /></td>
    </tr>
    <tr>
      <td align="center">FE</td>
      <td align="center">FE</td>
      <td align="center">FE</td>
    </tr>
  </tbody>
</table>

### 🐰김아영 (FE)
- 피그마 디자인
- 프로젝트 초기 세팅
#### UI :
- 메인 페이지 , 앨범 상세 페이지 , 앨범 감상평 페이지 , 음악 추천 게시글 작성 페이지 , 음악 추천 게시글 상세 페이지 , 자유 게시글 작성 페이지 , 자유 게시글 상세 페이지
#### 기능 :
- 프로젝트 메인 레이아웃 구현
- 무한 스크롤 구현 
- 공통 컴포넌트 (Error, Loading, Input, LogoImage, TabMenu, UserInfo .. ) 개발 
- 홈 탭 구현 
- 앨범 탭 구현 : 앨범 캐러셀, 앨범 정보 탭 , 트랙 미리듣기 , 앨범 감상평 탭 , 앨범 감상평 대시보드, 감상평 CRUD 기능 구현, 무한스크롤 
- 음악 추천 게시판 탭 구현 : 음악 추천 게시글 CRUD , 좋아요 , 댓글 , 댓글 좋아요 기능 구현, 무한스크롤 
- 자유 게시판 탭 구현 : 자유 게시판 CURD , 검색 , 좋아요 ,댓글 ,댓글 좋아요 기능 구현, 무한스크롤 

### 🐰배정빈 (FE)
- 배포 
- 개발 서버 https 변경
#### UI 
- 회원가입 페이지 , 로그인 페이지 , 소셜 로그인 정보 입력 페이지 , 회원 정보 수정 모달 , 마이페이지 (활동히스토리 탭 , 평가한 앨범 ,음악추천글 , 자유글 , 댓글 ) , 앨범 검색 결과 페이지 , 네비게이션 바   
#### 기능 
- 회원가입 구현 : 인증코드 전송 , 닉네임 중복 , 아이디/비밀번호 유효성 검사, 생년월일, 성별, 폼 유효성 검사 구현  
- 로그인 구현 : 폼 유효성 검사 구현 , 토큰 관리 
- 페이지네이션 구현 
- 소셜 로그인 후 회원 정보 추가 폼 구현
- 공통 컴포넌트 (Modal, Text) 구현
- 회원 정보 수정 구현 : 프로필 이미지 추가 및 삭제 , 닉네임 변경 구현
- 마이페이지 탭 구현 : 활동 히스토리 그래프 , 활동 히스토리 목록 페이지네이션 구현 , 평가한 앨범/음악 추천글/자유글 무한스크롤 구현 ,댓글/대댓글 목록 구현
- 앨범 검색 및 앨범 검색 결과 구현 

### 🐰추인식 (FE)
#### UI 
- 소셜 로그인 버튼 , 앨범 목록 페이지 , 앨범 상세 페이지 , 음악 추천 게시판 목록 페이지 , 자유 게시판 목록 페이지 
#### 기능 
- 소셜 로그인 연동
- 앨범 목록 무한 스크롤 구현 
- 음악 추천 목록 무한 스크롤 구현
- 자유 게시판 목록 무한 스크롤 구현 


<h2>프로젝트 구조</h2>

1. **Atoms**: `Button.tsx`, `Input.tsx`, `Icon.tsx`와 같은 단일 UI 요소를 정의합니다.
2. **Molecules**: `LoginForm.tsx`(버튼과 입력 필드 조합), `Card.tsx`(이미지, 텍스트, 버튼 조합) 등 여러 Atoms를 조합한 컴포넌트를 구성합니다.
3. **Organisms**: `Navbar.tsx`, `AlbumList.tsx` 등 여러 Molecules와 Atoms를 결합하여 페이지의 특정 섹션을 구성하는 큰 컴포넌트를 만듭니다.
4. **Templates**: `AlbumPageTemplate.tsx`와 같이 Organisms를 배치하여 템플릿을 만들고, 페이지 구조를 정의합니다.
5. **Pages**: `AlbumDetailPage.tsx`, `HomePage.tsx` 등 템플릿에 데이터를 주입하여 완성된 페이지입니다.

Atomic design을 통해 컴포넌트 재사용성을 극대화하고, UI 개발에서의 일관성을 유지하면서 유지보수가 용이하도록 하였습니다.
<details>
  <summary> 펼쳐보기 </summary>

```
📦src
 ┣ 📂api
 ┃ ┣ 📜album.ts
 ┃ ┣ 📜albumDetail.ts
 ┃ ┣ 📜comment.ts
 ┃ ┣ 📜freePost.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜like.ts
 ┃ ┣ 📜recommendPost.ts
 ┃ ┣ 📜user.ts
 ┃ ┗ 📜vote.ts
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂img
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜badge.svg
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜navbar-logo.png
 ┃ ┃ ┣ 📜navbar-profile-Img.png
 ┃ ┃ ┗ 📜singk-logo.png
 ┃ ┣ 📜.DS_Store
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📂album
 ┃ ┃ ┃ ┣ 📜AlbumGenre.tsx
 ┃ ┃ ┃ ┣ 📜AlbumName.tsx
 ┃ ┃ ┃ ┣ 📜AlbumNameList.tsx
 ┃ ┃ ┃ ┣ 📜AlbumRating.tsx
 ┃ ┃ ┃ ┣ 📜AlbumRatingNum.tsx
 ┃ ┃ ┃ ┣ 📜ArtistName.tsx
 ┃ ┃ ┃ ┣ 📜CoverImage.tsx
 ┃ ┃ ┃ ┣ 📜Record.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂albumDetail
 ┃ ┃ ┃ ┗ 📜StarRating.tsx
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜AuthButton.tsx
 ┃ ┃ ┃ ┣ 📜AuthCalendar.tsx
 ┃ ┃ ┃ ┣ 📜AuthCodeInput.tsx
 ┃ ┃ ┃ ┣ 📜AuthExplainText.tsx
 ┃ ┃ ┃ ┣ 📜AuthGenderButton.tsx
 ┃ ┃ ┃ ┣ 📜AuthInput.tsx
 ┃ ┃ ┃ ┣ 📜AuthLabel.tsx
 ┃ ┃ ┃ ┣ 📜AuthLink.tsx
 ┃ ┃ ┃ ┣ 📜AuthPostButton.tsx
 ┃ ┃ ┃ ┣ 📜AuthRequiredText.tsx
 ┃ ┃ ┃ ┣ 📜AuthTitle.tsx
 ┃ ┃ ┃ ┣ 📜AuthValidMessage.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┗ 📜LikeBtn.tsx
 ┃ ┃ ┣ 📂freeBoard
 ┃ ┃ ┃ ┣ 📜FreeBoardContents.tsx
 ┃ ┃ ┃ ┗ 📜FreeBoardTitle.tsx
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┗ 📜HomePostListHeader.tsx
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📜DateInput.tsx
 ┃ ┃ ┃ ┣ 📜MyBoardType.tsx
 ┃ ┃ ┃ ┣ 📜MyCommentRating.tsx
 ┃ ┃ ┃ ┣ 📜MyDeleteBtn.tsx
 ┃ ┃ ┃ ┣ 📜MyGenre.tsx
 ┃ ┃ ┃ ┣ 📜MyIcon.tsx
 ┃ ┃ ┃ ┣ 📜MyIconRating.tsx
 ┃ ┃ ┃ ┣ 📜MyInfoButton.tsx
 ┃ ┃ ┃ ┣ 📜MyLikeRating.tsx
 ┃ ┃ ┃ ┣ 📜MyStarRating.tsx
 ┃ ┃ ┃ ┣ 📜MyThumbnailImg.tsx
 ┃ ┃ ┃ ┣ 📜MyThumbnailType.tsx
 ┃ ┃ ┃ ┣ 📜MyUnlikeRating.tsx
 ┃ ┃ ┃ ┣ 📜TypeSelect.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┣ 📜ActivityHistory.tsx
 ┃ ┃ ┃ ┣ 📜LogoutBtn.tsx
 ┃ ┃ ┃ ┣ 📜NavClickIcon.tsx
 ┃ ┃ ┃ ┣ 📜NavProfileBtn.tsx
 ┃ ┃ ┃ ┣ 📜NavbarBtn.tsx
 ┃ ┃ ┃ ┣ 📜NavbarLogo.tsx
 ┃ ┃ ┃ ┣ 📜NavbarMenu.tsx
 ┃ ┃ ┃ ┣ 📜NavbarNickname.tsx
 ┃ ┃ ┃ ┣ 📜NavbarProfileImg.tsx
 ┃ ┃ ┃ ┣ 📜NavbarRating.tsx
 ┃ ┃ ┃ ┣ 📜NavbarTag.tsx
 ┃ ┃ ┃ ┣ 📜Notification.tsx
 ┃ ┃ ┃ ┗ 📜ProfileEdit.tsx
 ┃ ┃ ┣ 📂post
 ┃ ┃ ┃ ┣ 📜PostCommentNum.tsx
 ┃ ┃ ┃ ┣ 📜PostContentsPreview.tsx
 ┃ ┃ ┃ ┣ 📜PostDay.tsx
 ┃ ┃ ┃ ┣ 📜PostLikeComments.tsx
 ┃ ┃ ┃ ┣ 📜PostLikeNum.tsx
 ┃ ┃ ┃ ┣ 📜PostListHeader.tsx
 ┃ ┃ ┃ ┣ 📜PostSearch.tsx
 ┃ ┃ ┃ ┣ 📜PostSelection.tsx
 ┃ ┃ ┃ ┣ 📜PostTime.tsx
 ┃ ┃ ┃ ┣ 📜PostTitle.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂recommendBoard
 ┃ ┃ ┃ ┣ 📜RecommendBoardCategory.tsx
 ┃ ┃ ┃ ┣ 📜RecommendBoardTitle.tsx
 ┃ ┃ ┃ ┣ 📜RecommendContents.tsx
 ┃ ┃ ┃ ┣ 📜RecommendGenre.tsx
 ┃ ┃ ┃ ┣ 📜RecommendThumbnail.tsx
 ┃ ┃ ┃ ┣ 📜RecommendTitle.tsx
 ┃ ┃ ┃ ┣ 📜RecommendTypeLabel.tsx
 ┃ ┃ ┃ ┣ 📜RecommendYoutube.tsx
 ┃ ┃ ┃ ┣ 📜SelectBtn.tsx
 ┃ ┃ ┃ ┗ 📜SelectBtnLabel.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜DropDownMenu.tsx
 ┃ ┃ ┣ 📜EmptyMessage.tsx
 ┃ ┃ ┣ 📜ErrorMessage.tsx
 ┃ ┃ ┣ 📜GlassBox.tsx
 ┃ ┃ ┣ 📜InfiniteScrollList.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜Loading.tsx
 ┃ ┃ ┣ 📜LogoImage.tsx
 ┃ ┃ ┣ 📜MainLayout.tsx
 ┃ ┃ ┣ 📜MediaQuery.tsx
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┣ 📜OptionsMenu.tsx
 ┃ ┃ ┣ 📜Pagination.tsx
 ┃ ┃ ┣ 📜TabMenu.tsx
 ┃ ┃ ┣ 📜Text.tsx
 ┃ ┃ ┣ 📜UserInfo.tsx
 ┃ ┃ ┣ 📜WritePostLayout.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📂album
 ┃ ┃ ┃ ┣ 📜AlbumCardItem.tsx
 ┃ ┃ ┃ ┣ 📜AlbumInfo.tsx
 ┃ ┃ ┃ ┣ 📜AlbumItem.tsx
 ┃ ┃ ┃ ┣ 📜AlbumListItem.tsx
 ┃ ┃ ┃ ┣ 📜CoverRecord.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂albumDetail
 ┃ ┃ ┃ ┣ 📜AlbumDetailInfoText.tsx
 ┃ ┃ ┃ ┣ 📜AlbumGenderPercentage.tsx
 ┃ ┃ ┃ ┣ 📜AlbumReview.tsx
 ┃ ┃ ┃ ┣ 📜AlbumReviewRating.tsx
 ┃ ┃ ┃ ┣ 📜AlbumScorePercentage.tsx
 ┃ ┃ ┃ ┣ 📜AlbumStarPicker.tsx
 ┃ ┃ ┃ ┣ 📜AlbumTrack.tsx
 ┃ ┃ ┃ ┣ 📜AlbumVotingBtns.tsx
 ┃ ┃ ┃ ┗ 📜EachScorePercentage.tsx
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜AuthField.tsx
 ┃ ┃ ┃ ┣ 📜FieldName.tsx
 ┃ ┃ ┃ ┣ 📜GenderForm.tsx
 ┃ ┃ ┃ ┣ 📜GoogleOauth.tsx
 ┃ ┃ ┃ ┣ 📜NaverOauth.tsx
 ┃ ┃ ┃ ┣ 📜TitleLink.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┣ 📜LinkInput.tsx
 ┃ ┃ ┃ ┣ 📜PostMenu.tsx
 ┃ ┃ ┃ ┣ 📜SelectAlbumForm.tsx
 ┃ ┃ ┃ ┣ 📜SelectBtnForm.tsx
 ┃ ┃ ┃ ┣ 📜SelectImageForm.tsx
 ┃ ┃ ┃ ┣ 📜SelectYoutubeForm.tsx
 ┃ ┃ ┃ ┣ 📜WritePostFooter.tsx
 ┃ ┃ ┃ ┗ 📜WritePostHeader.tsx
 ┃ ┃ ┣ 📂comment
 ┃ ┃ ┃ ┣ 📜CommentMenu.tsx
 ┃ ┃ ┃ ┗ 📜PostComment.tsx
 ┃ ┃ ┣ 📂freeBoard
 ┃ ┃ ┃ ┗ 📜FreeBoardItem.tsx
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📜MyActivityGraph.tsx
 ┃ ┃ ┃ ┣ 📜MyActivityList.tsx
 ┃ ┃ ┃ ┣ 📜MyAlbumReviewFooter.tsx
 ┃ ┃ ┃ ┣ 📜MyAlbumReviewHeader.tsx
 ┃ ┃ ┃ ┣ 📜MyAverageRating.tsx
 ┃ ┃ ┃ ┣ 📜MyBoardHeader.tsx
 ┃ ┃ ┃ ┣ 📜MyCommentFooter.tsx
 ┃ ┃ ┃ ┣ 📜MyFreeBoardFooter.tsx
 ┃ ┃ ┃ ┣ 📜MyInfoSection.tsx
 ┃ ┃ ┃ ┣ 📜MyMusicFooter.tsx
 ┃ ┃ ┃ ┣ 📜MyMusicHeader.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┣ 📜NavMenuList.tsx
 ┃ ┃ ┃ ┣ 📜NavProfile.tsx
 ┃ ┃ ┃ ┗ 📜NavUserBtn.tsx
 ┃ ┃ ┣ 📂optionsMenu
 ┃ ┃ ┃ ┣ 📜AlbumReviewOptionsMenu.tsx
 ┃ ┃ ┃ ┣ 📜FreeCommentOptionsMenu.tsx
 ┃ ┃ ┃ ┣ 📜FreePostOptionsMenu.tsx
 ┃ ┃ ┃ ┣ 📜RecommendCommentOptionsMenu.tsx
 ┃ ┃ ┃ ┗ 📜RecommendPostOptionsMenu.tsx
 ┃ ┃ ┣ 📂recommendBoard
 ┃ ┃ ┃ ┣ 📜RecommendBoardCard.tsx
 ┃ ┃ ┃ ┗ 📜RecommendBoardItem.tsx
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┗ 📜SearchBar.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📂album
 ┃ ┃ ┃ ┣ 📜AlbumCarousel.tsx
 ┃ ┃ ┃ ┣ 📜AlbumSearchList.tsx
 ┃ ┃ ┃ ┣ 📜AlbumSection.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂albumDetail
 ┃ ┃ ┃ ┣ 📜AlbumDetailCard.tsx
 ┃ ┃ ┃ ┣ 📜AlbumDetailInfo.tsx
 ┃ ┃ ┃ ┣ 📜AlbumDetailReview.tsx
 ┃ ┃ ┃ ┣ 📜AlbumReviewDashboard.tsx
 ┃ ┃ ┃ ┣ 📜AlbumReviewInput.tsx
 ┃ ┃ ┃ ┣ 📜AlbumReviewList.tsx
 ┃ ┃ ┃ ┣ 📜AlbumTrackList.tsx
 ┃ ┃ ┃ ┗ 📜TrackPlayerModal.tsx
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜LoginForm.tsx
 ┃ ┃ ┃ ┣ 📜OauthSignUpForm.tsx
 ┃ ┃ ┃ ┣ 📜SignUpForm.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┣ 📜PostComments.tsx
 ┃ ┃ ┃ ┣ 📜PostContents.tsx
 ┃ ┃ ┃ ┣ 📜PostForm.tsx
 ┃ ┃ ┃ ┣ 📜PostInfo.tsx
 ┃ ┃ ┃ ┣ 📜PreviewPostModal.tsx
 ┃ ┃ ┃ ┣ 📜SearchPost.tsx
 ┃ ┃ ┃ ┗ 📜SearchPostSelection.tsx
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📜HomeFreePostList.tsx
 ┃ ┃ ┃ ┗ 📜HomeRecommendPostList.tsx
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📜ActivityHistoryGraph.tsx
 ┃ ┃ ┃ ┣ 📜ActivityHistoryList.tsx
 ┃ ┃ ┃ ┣ 📜MyActivityHistory.tsx
 ┃ ┃ ┃ ┣ 📜MyAlbumReview.tsx
 ┃ ┃ ┃ ┣ 📜MyComment.tsx
 ┃ ┃ ┃ ┣ 📜MyFreeBoard.tsx
 ┃ ┃ ┃ ┣ 📜MyInfo.tsx
 ┃ ┃ ┃ ┣ 📜MyMusicRecommendation.tsx
 ┃ ┃ ┃ ┣ 📜MyPageTabMenu.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┣ 📜DropDownNavigation.tsx
 ┃ ┃ ┃ ┣ 📜NavSignUpBtn.tsx
 ┃ ┃ ┃ ┣ 📜NavigationBar.tsx
 ┃ ┃ ┃ ┗ 📜NavigationBar2.tsx
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┣ 📜ProfileEditModal.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜AlbumDetailPage.tsx
 ┃ ┃ ┣ 📜AlbumPage.tsx
 ┃ ┃ ┣ 📜BoardPage.tsx
 ┃ ┃ ┣ 📜FreePostPage.tsx
 ┃ ┃ ┣ 📜HighestRated.tsx
 ┃ ┃ ┣ 📜LoginPage.tsx
 ┃ ┃ ┣ 📜MainPage.tsx
 ┃ ┃ ┣ 📜MostReview.tsx
 ┃ ┃ ┣ 📜MusicRMPostPage.tsx
 ┃ ┃ ┣ 📜MusicRecommendationBoardPage.tsx
 ┃ ┃ ┣ 📜Mypage.tsx
 ┃ ┃ ┣ 📜OauthSignUpPage.tsx
 ┃ ┃ ┣ 📜RecentReview.tsx
 ┃ ┃ ┣ 📜SignUpPage.tsx
 ┃ ┃ ┣ 📜UpdatePostPage.tsx
 ┃ ┃ ┣ 📜UpdateRecommendPostPage.tsx
 ┃ ┃ ┣ 📜WritePostPage.tsx
 ┃ ┃ ┣ 📜WriteRecommendPostPage.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂templates
 ┃ ┃ ┣ 📂album
 ┃ ┃ ┃ ┗ 📜AlbumPageTemplate.tsx
 ┃ ┃ ┣ 📂albumDetail
 ┃ ┃ ┃ ┗ 📜DashboardBox.tsx
 ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┣ 📜BoardListTemplate.tsx
 ┃ ┃ ┃ ┗ 📜PostTemplate.tsx
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┗ 📜HomePostListTemplate.tsx
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂config
 ┃ ┣ 📜axios.ts
 ┃ ┗ 📜index.ts
 ┣ 📂dummy
 ┃ ┣ 📜album.ts
 ┃ ┣ 📜albumDetail.ts
 ┃ ┣ 📜albumReview.ts
 ┃ ┗ 📜albumReviewStatistic.ts
 ┣ 📂hooks
 ┃ ┣ 📂queries
 ┃ ┃ ┣ 📜album.ts
 ┃ ┃ ┣ 📜albumDetail.ts
 ┃ ┃ ┣ 📜comment.ts
 ┃ ┃ ┣ 📜freePost.ts
 ┃ ┃ ┣ 📜like.ts
 ┃ ┃ ┣ 📜recommendPost.ts
 ┃ ┃ ┣ 📜user.ts
 ┃ ┃ ┗ 📜vote.ts
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📂mutations
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┗ 📜userMutations.ts
 ┃ ┃ ┗ 📂queries
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┗ 📜userQueries.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜useApi.ts
 ┃ ┣ 📜useAxiosInterceptors.tsx
 ┃ ┣ 📜useLogin.ts
 ┃ ┣ 📜useMediaQueries.tsx
 ┃ ┗ 📜useModal.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜color.ts
 ┃ ┣ 📜quillStyle.ts
 ┃ ┗ 📜style.ts
 ┣ 📂types
 ┃ ┣ 📜activityHistoryType.ts
 ┃ ┣ 📜albumDetailType.ts
 ┃ ┣ 📜albumReviewStatisticType.ts
 ┃ ┣ 📜albumReviewType.ts
 ┃ ┣ 📜albumType.ts
 ┃ ┣ 📜authTypes.ts
 ┃ ┣ 📜commentType.ts
 ┃ ┣ 📜freePostType.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜myAlbumReviewType.ts
 ┃ ┣ 📜postType.ts
 ┃ ┣ 📜recommendPostType.ts
 ┃ ┣ 📜voteType.ts
 ┃ ┗ 📜writePostType.ts
 ┣ 📂utils
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜authApi.ts
 ┃ ┃ ┣ 📜convertTime.ts
 ┃ ┃ ┣ 📜tokenStorage.ts
 ┃ ┃ ┗ 📜validationRules.ts
 ┃ ┣ 📂search
 ┃ ┣ 📜date.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜linkValidation.ts
 ┃ ┣ 📜stripHtmlTag.ts
 ┃ ┣ 📜time.ts
 ┃ ┗ 📜writePost.ts
 ┣ 📜.DS_Store
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┣ 📜mockData.ts
 ┣ 📜setupProxy.js
 ┗ 📜vite-env.d.ts
```

</details>

<h2>프로젝트 주요 기능 </h2>


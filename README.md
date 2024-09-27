<h1>🎧SingK</h1>
<img src="https://github.com/user-attachments/assets/53e617c0-3ee5-4c85-9b26-9defce41b9f9"/>

<h2>프로젝트 소개</h2>
<p>음악을 사랑하는 리스너들을 위한 커뮤니티 웹 애플리케이션 SingK를 기획하고 개발하였습니다.
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
- 리드미 작성
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

### 1.회원가입 
- 이름, 이메일, 비밀번호, 닉네임, 생년월일, 성별을 필드로 가지며 프론트와 백 양쪽에서 모두 유효성 검사를 실시합니다.
- 이메일 인증을 구현하였습니다.
- 사용자는 모든 필드를 양식에 맞게 입력하면 회원가입을 할 수 있습니다. 

1) 이메일 인증
![회원가입이메일전송](https://github.com/user-attachments/assets/5cb2a323-bced-46c7-8481-e06415759073)
2) 회원가입 
![회원가입](https://github.com/user-attachments/assets/68e85e1b-a6c9-4fce-b590-0e6c5f338711)

### 2.로그인
- 이메일, 비밀번호를 필드로 가지며 프론트와 백 양쪽에서 모두 유효성 검사를 실시합니다. 자체로그인,소셜로그인으로 구현하였습니다.
- 소셜로그인 시 추가 입력 폼을 작성해야합니다. 
1) 자체 로그인
![로그인](https://github.com/user-attachments/assets/a5db0368-3851-453b-9569-92c2dd47e5bb)
2) 소셜 로그인
![소셜로그인](https://github.com/user-attachments/assets/05966a6b-3a04-437e-a492-b9f2a9ab18d8)
   
### 3.회원 정보 수정 
- 마이페이지 내 회원정보 수정 버튼을 통해 프로필 이미지와 닉네임을 변경할 수 있습니다.
- 이미지를 등록하기 전에는 기본 이미지로 표시됩니다.
![회원정보수정](https://github.com/user-attachments/assets/03f51001-0276-4c3f-85d5-e4c2f940c14e)

### 4.메인 페이지 
- 메인페이지에는 네비게이션 바 , 앨범 검색창 ,평점 높은 앨범 캐러셀, 게시판이 존재합니다.
- 네비게이션 바를 통해 마이페이지, 앨범 목록 게시판, 음악 추천 게시판 , 자유 게시판에 접근 할 수 있습니다.
![메인페이지](https://github.com/user-attachments/assets/19bfc643-062e-43db-b769-94283b5b9d8e)

### 5.앨범 검색
- 앨범 검색 창을 통해 앨범을 검색 할 수 있습니다. 가수 이름, 앨범명으로 검색이 가능합니다.
- 검색 결과로 앨범 목록을 확인 할 수 있습니다.
- 각 앨범을 클릭 하면 앨범 상세 정보를 확인 할 수 있고 미리 듣기 기능도 제공합니다. 
![앨범검색](https://github.com/user-attachments/assets/28e9bae3-588d-43cd-b6ea-0506a421a2ba)

### 6.음악 감상평 작성
- 감상평 탭을 클릭하면 감상평을 작성 할 수 있습니다.
- 평가 된 결과는 즉시 대시보드로 확인 가능합니다. 평가한 사람의 수, 성별 , 평점을 확인 할 수 있습니다.
![음악 평가 ](https://github.com/user-attachments/assets/96aee185-3adc-43ee-9e05-f1b4330ffe34)

### 7.음악 추천 게시판 
- 총 3가지 종류(이미지, 유튜브, 음악링크)로 음악 추천 게시판을 작성할 수 있습니다.
- 게시판은 임시 저장, 미리보기, 텍스트 에디터 기능을 제공합니다.
1) 음악 링크 
![음악 추천 게시글 작성 ](https://github.com/user-attachments/assets/43206803-b118-46e6-9745-3c5acc32e516)
2) 유튜브 링크
![음악추천게시판글쓰기유튜브](https://github.com/user-attachments/assets/6a97a95e-639a-4494-8368-f2a2ff0c545d)

### 8.게시판 검색 , 댓글 
- 각 게시판은 검색기능을 제공합니다. 글쓴이 , 제목 ,내용으로 필터링 할 수 있습니다.
- 각 게시판은 댓글 ,대댓글 기능을 제공합니다.
1) 검색
![게시판검색](https://github.com/user-attachments/assets/567fbc31-86c8-4cf0-a266-7dfcf2fd4dcc)
2) 댓글 
![댓글작성](https://github.com/user-attachments/assets/69a150ad-72a1-4466-a176-0aa201dbfc8b)

### 9. 마이페이지
- 총 5가지 탭으로 구분됩니다. (활동히스토리, 평가한앨범 ,음악 추천글, 자유게시글 ,댓글)
- 활동 히스토리 그래프와 목록을 통해 획득한 점수를 확인 할 수 있습니다.
- 내가 작성한 글과 댓글을 확인 가능합니다.
1) 활동히스토리
![마이페이지(1)활동히스토리](https://github.com/user-attachments/assets/a0159555-edfc-4fd1-99f5-ffae856047a3)   
2) 내가 작성한 글, 댓글
![마이페이지(2)](https://github.com/user-attachments/assets/7f2b01b9-3a9e-4d3e-902b-734645784769)

<h2>추가 문서</h2>

#### [피그마](https://www.figma.com/design/ua86Spw3vhPQgSzK1RBjuV/SingK-%ED%99%94%EB%A9%B4-%EC%84%A4%EA%B3%84?node-id=10-537&node-type=canvas&t=qwux3anEiokEhgQe-0) : 와이어프레임 및 디자인 
#### [노션](https://www.notion.so/SingK-c7f009f987d74391ac9f1c3854f4ff52) : 프로젝트 회의록 및 프로젝트 산출물 관리 
#### [스택 선정 이유](https://www.notion.so/8a7b377256f24604ad097e160821aaa5)
#### [프론트엔드 코딩컨벤션](https://www.notion.so/60e05a36291e466692f0364db506a155)
#### [브랜치 전략](https://www.notion.so/9e3a64febc024217a3cf54383d76dbcc)
애자일 방식으로 프로젝트를 진행하였습니다. 
매주 스프린트 플래닝과 스프린트가 끝나면 KPT회고를 진행하였습니다. 
![image](https://github.com/user-attachments/assets/8be7563a-bcc4-44ed-8da2-ea25c49f2856)


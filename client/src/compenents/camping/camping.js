import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Wrapper = styled.div`
  width: 20em;
  height: 23em;
  padding: 0.2em;
  margin: 0.5rem;
  border: none;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0.1rem 0.1rem 0.2rem  gray; */
  transition: transform 0.3s ease-out;
  /* font-family: "EarlyFontDiary"; */
  &:hover {
    .title > b {
      color: black;
    }
    transform: scale(1.01);
    & > div:nth-child(2) {
      color: black;
    }
  }
  & > img {
    object-fit: fill;
    width: 100%;
    height: 70%;
    border-radius: 3.5px 3.5px 0 0;
    box-shadow: 1px 0 2px gray;
  }
`;

export const Description = styled.div`
  text-align: start;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  background-color: #ffffff;
  & > div {
    width: 80%;
    text-align: start;
    padding-left: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    & > b {
      color: #000000;
      font-size: large;
    }
  }
`;

function Camping({ camping, campingImg }) {
  // console.log('이미지 리사이징', campingImg)
  const campingImgFil = campingImg.split(",")[0];
  // console.log(campingImgFil);

  //이미지를 선택할 ref 선언
  const observeImage = useRef(null);

  //화면에 나타나면 실행할 함수
  const showImage = async ([campingImg], observer) => {
    if (!campingImg.isIntersecting) {
      return;
    }
    const imageUrl = [campingImg][0].target.dataset.src;
    observeImage.current.src = imageUrl;
    observer.unobserve(campingImg.target); // 함수가 실행될 때, 관찰을 끝내기.
  };

  //인스턴스 생성
  useEffect(() => {
    const observer = new IntersectionObserver(showImage, { threshold: 0.1 }); //메인이미지 관찰
    observer.observe(observeImage.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const img = new Image();
  img.src =
    "https://gocamping.or.kr/upload/camp/4/3968FDzMGtUdjhbAC1BIXmYo.jpg";
  console.log(img.naturalWidth);
  //=> 500
  console.log(img.naturalHeight);
  console.log(observeImage);

  let navigate = useNavigate();

  const onClickMoveDVP = (contentId) => {
    navigate(`/Detailpage/${contentId}`, { state: camping });
  };

  return (
    <Wrapper
      key={camping.contentId}
      onClick={() => {
        onClickMoveDVP(camping.contentId);
      }}
    >
      <img
        data-src={campingImgFil}
        ref={observeImage}
        // src={campingImgFil}
        loading="lazy"
        alt={camping.campingName}
        height="10"
        width="10"
      />
      <Description>
        <div className="title">
          <b>{camping.campingName}</b>
        </div>
        <div>
          <div>{camping.doNm}</div>
          <div>{camping.addr1}</div>
        </div>
      </Description>
    </Wrapper>
  );
}

export default Camping;

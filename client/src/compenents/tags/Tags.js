import styled from "styled-components";
import {
  MdPets,
  MdWifi,
  MdOutlineLocalGroceryStore,
  MdOutlineWaterDrop,
} from "react-icons/md";
import {
  FaMountain,
  FaCarSide,
  FaCaravan,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import {
  GiFishingPole,
  GiElectric,
  GiCaravan,
  GiCampingTent,
  GiGrass,
  GiStonePath,
  GiWoodBeam,
  GiEarthSpit,
  GiForest,
} from "react-icons/gi";
import React, { useState } from "react";

export const TagItemContainer = styled.div`
  // border : 3px solid red;

  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const Tag = styled.div`
  // border : 3px solid green;
  margin: 0 5% 0 5%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

// export const Slider= styled.div`
// border : 2px solid red;
// display: flex;

// `

export const TagButton = styled.button`
  margin: 0 0.5rem 0 0.5rem;
  border: 0px solid green;
  background: white;
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.getColor1};
  color: ${(props) => props.getColor2};
  color: ${(props) => props.getColor3};
  color: ${(props) => props.getColor4};
  color: ${(props) => props.getColor5};
  color: ${(props) => props.getColor6};
  color: ${(props) => props.getColor7};
  color: ${(props) => props.getColor8};
  color: ${(props) => props.getColor9};
  color: ${(props) => props.getColor10};
  color: ${(props) => props.getColor11};
  color: ${(props) => props.getColor12};
  color: ${(props) => props.getColor13};
  color: ${(props) => props.getColor14};
  color: ${(props) => props.getColor15};
  color: ${(props) => props.getColor16};
  color: ${(props) => props.getColor17};
  color: ${(props) => props.getColor18};
`;
export const Tagname = styled.div`
  margin: 0;
  border: 0px solid black;
  width: 75px;
    font-size: 12px;
    font-family: 'MaplestoryOTFLight';
`;

function Tags({ onTag }) {
  const [getColor1, setColor1] = useState("blue");
  const [getColor2, setColor2] = useState("gray");
  const [getColor3, setColor3] = useState("gray");
  const [getColor4, setColor4] = useState("gray");
  const [getColor5, setColor5] = useState("gray");
  const [getColor6, setColor6] = useState("gray");
  const [getColor7, setColor7] = useState("gray");
  const [getColor8, setColor8] = useState("gray");
  const [getColor9, setColor9] = useState("gray");
  const [getColor10, setColor10] = useState("gray");
  const [getColor11, setColor11] = useState("gray");
  const [getColor12, setColor12] = useState("gray");
  const [getColor13, setColor13] = useState("gray");
  const [getColor14, setColor14] = useState("gray");
  const [getColor15, setColor15] = useState("gray");
  const [getColor16, setColor16] = useState("gray");
  const [getColor17, setColor17] = useState("gray");
  const [getColor18, setColor18] = useState("gray");

  const onClickTagMount = () => {
    setColor1("blue");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("산");
  };
  const onClickTagValley = () => {
    setColor2("blue");
    setColor1("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("계곡");
  };
  const onClickTagForest = () => {
    setColor3("blue");
    setColor1("gray");
    setColor2("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("숲");
  };
  const onClickTagautoSiteCo = () => {
    setColor4("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("autoSiteCo");
  };
  const onClickTagglampSiteCo = () => {
    setColor5("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("glampSiteCo");
  };
  const onClickTagcaravSiteCo = () => {
    setColor6("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("caravSiteCo");
  };
  const onClickTagindvdlCaravSiteCo = () => {
    setColor7("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("indvdlCaravSiteCo");
  };
  const onClickTagsiteBottomCl1 = () => {
    setColor8("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("siteBottomCl1");
  };
  const onClickTagsiteBottomCl2 = () => {
    setColor9("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("siteBottomCl2");
  };
  const onClickTagsiteBottomCl3 = () => {
    setColor10("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("siteBottomCl3");
  };
  const onClickTagsiteBottomCl5 = () => {
    setColor11("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("siteBottomCl5");
  };
  const onClickTaganimalCmgCl = () => {
    setColor12("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("animalCmgCl");
  };

  const onClickTagElect = () => {
    setColor13("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("전기");
  };
  const onClickTagWifi = () => {
    setColor14("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("무선인터넷");
  };
  const onClickTagHotwater = () => {
    setColor15("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor16("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("온수");
  };
  const onClickTagStore = () => {
    setColor16("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor17("gray");
    setColor18("gray");
    onTag("편의점");
  };
  const onClickTagBeach = () => {
    setColor17("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor18("gray");
    onTag("해변");
  };
  const onClickTagFishing = () => {
    setColor18("blue");
    setColor1("gray");
    setColor2("gray");
    setColor3("gray");
    setColor4("gray");
    setColor5("gray");
    setColor6("gray");
    setColor7("gray");
    setColor8("gray");
    setColor9("gray");
    setColor10("gray");
    setColor11("gray");
    setColor12("gray");
    setColor13("gray");
    setColor14("gray");
    setColor15("gray");
    setColor16("gray");
    setColor17("gray");
    onTag("낚시");
  };
  return (
    <TagItemContainer>
      <Tag>
        <TagButton getColor1={getColor1} onClick={onClickTagMount} key="산">
          <FaMountain size={30} />
          <Tagname>산</Tagname>
        </TagButton>
        <TagButton getColor2={getColor2} onClick={onClickTagValley} key="계곡">
          <TbBeach size={30} />
          <Tagname>계곡</Tagname>
        </TagButton>
        <TagButton getColor3={getColor3} onClick={onClickTagForest} key="숲">
          <GiForest size={30} />
          <Tagname>숲</Tagname>
        </TagButton>
        <TagButton
          getColor4={getColor4}
          onClick={onClickTagautoSiteCo}
          key="autoSiteCo"
        >
          <FaCarSide size={30} />
          <Tagname>오토캠핑</Tagname>
        </TagButton>
        <TagButton
          getColor5={getColor5}
          onClick={onClickTagglampSiteCo}
          key="glampSiteCo"
        >
          <GiCampingTent size={30} />
          <Tagname>글램핑</Tagname>
        </TagButton>
        <TagButton
          getColor16={getColor17}
          onClick={onClickTagBeach}
          key="해변"
        >
          <FaUmbrellaBeach size={30} />
          <Tagname>해변</Tagname>
        </TagButton>
        <TagButton
          getColor6={getColor6}
          onClick={onClickTagcaravSiteCo}
          key="caravSiteCo"
        >
          <GiCaravan size={30} />
          <Tagname>카라반</Tagname>
        </TagButton>
        <TagButton
          getColor7={getColor7}
          onClick={onClickTagindvdlCaravSiteCo}
          key="indvdlCaravSiteCo"
        >
          <FaCaravan size={30} />
          <Tagname>개인카라반</Tagname>
        </TagButton>
        <TagButton
          getColor8={getColor8}
          onClick={onClickTagsiteBottomCl1}
          key="siteBottomCl1"
        >
          <GiGrass size={30} />
          <Tagname>잔디</Tagname>
        </TagButton>
        <TagButton
          getColor10={getColor10}
          onClick={onClickTagsiteBottomCl3}
          key="siteBottomCl3"
        >
          <GiWoodBeam size={30} />
          <Tagname>테크</Tagname>
        </TagButton>
        <TagButton
          getColor9={getColor9}
          onClick={onClickTagsiteBottomCl2}
          key="siteBottomCl2"
        >
          <GiStonePath size={30} />
          <Tagname>파쇄석</Tagname>
        </TagButton>

        <TagButton
          getColor13={getColor13}
          onClick={onClickTagElect}
          key="전기"
        >
          <GiElectric size={30} />
          <Tagname>전기</Tagname>
        </TagButton>
        <TagButton
          getColor11={getColor11}
          onClick={onClickTagsiteBottomCl5}
          key="siteBottomCl5"
        >
          <GiEarthSpit size={30} />
          <Tagname>맨흙</Tagname>
        </TagButton>
        <TagButton
          getColor14={getColor14}
          onClick={onClickTagWifi}
          key="무선인터넷"
        >
          <MdWifi size={30} />
          <Tagname>무선인터넷</Tagname>
        </TagButton>
        <TagButton
          getColor12={getColor12}
          onClick={onClickTaganimalCmgCl}
          key="animalCmgCl"
        >
          <MdPets size={30} />
          <Tagname>애완동물</Tagname>
        </TagButton>

        <TagButton
          getColor15={getColor15}
          onClick={onClickTagHotwater}
          key="온수"
        >
          <MdOutlineWaterDrop size={30} />
          <Tagname>온수</Tagname>
        </TagButton>
        <TagButton
          getColor16={getColor18}
          onClick={onClickTagFishing}
          key="낚시"
        >
          <GiFishingPole size={30} />
          <Tagname>낚시</Tagname>
        </TagButton>
        <TagButton
          getColor16={getColor16}
          onClick={onClickTagStore}
          key="편의점"
        >
          <MdOutlineLocalGroceryStore size={30} />
          <Tagname>편의점</Tagname>
        </TagButton>

      </Tag>
    </TagItemContainer>
  );
}

export default Tags;

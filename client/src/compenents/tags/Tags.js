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
  font-family: "MaplestoryOTFLight";
`;

function Tags({ onTag }) {
  const [getColor1, setColor1] = useState("black");
  const [getColor2, setColor2] = useState("Lightslategray");
  const [getColor3, setColor3] = useState("Lightslategray");
  const [getColor4, setColor4] = useState("Lightslategray");
  const [getColor5, setColor5] = useState("Lightslategray");
  const [getColor6, setColor6] = useState("Lightslategray");
  const [getColor7, setColor7] = useState("Lightslategray");
  const [getColor8, setColor8] = useState("Lightslategray");
  const [getColor9, setColor9] = useState("Lightslategray");
  const [getColor10, setColor10] = useState("Lightslategray");
  const [getColor11, setColor11] = useState("Lightslategray");
  const [getColor12, setColor12] = useState("Lightslategray");
  const [getColor13, setColor13] = useState("Lightslategray");
  const [getColor14, setColor14] = useState("Lightslategray");
  const [getColor15, setColor15] = useState("Lightslategray");
  const [getColor16, setColor16] = useState("Lightslategray");
  const [getColor17, setColor17] = useState("Lightslategray");
  const [getColor18, setColor18] = useState("Lightslategray");

  const onClickTagMount = () => {
    setColor1("black");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("???");
  };
  const onClickTagValley = () => {
    setColor2("black");
    setColor1("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("??????");
  };
  const onClickTagForest = () => {
    setColor3("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("???");
  };
  const onClickTagautoSiteCo = () => {
    setColor4("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("autoSiteCo");
  };
  const onClickTagglampSiteCo = () => {
    setColor5("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("glampSiteCo");
  };
  const onClickTagcaravSiteCo = () => {
    setColor6("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("caravSiteCo");
  };
  const onClickTagindvdlCaravSiteCo = () => {
    setColor7("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("indvdlCaravSiteCo");
  };
  const onClickTagsiteBottomCl1 = () => {
    setColor8("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("siteBottomCl1");
  };
  const onClickTagsiteBottomCl2 = () => {
    setColor9("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("siteBottomCl2");
  };
  const onClickTagsiteBottomCl3 = () => {
    setColor10("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("siteBottomCl3");
  };
  const onClickTagsiteBottomCl5 = () => {
    setColor11("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("siteBottomCl5");
  };
  const onClickTaganimalCmgCl = () => {
    setColor12("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("animalCmgCl");
  };

  const onClickTagElect = () => {
    setColor13("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("??????");
  };
  const onClickTagWifi = () => {
    setColor14("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("???????????????");
  };
  const onClickTagHotwater = () => {
    setColor15("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("??????");
  };
  const onClickTagStore = () => {
    setColor16("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor17("Lightslategray");
    setColor18("Lightslategray");
    onTag("?????????");
  };
  const onClickTagBeach = () => {
    setColor17("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor18("Lightslategray");
    onTag("??????");
  };
  const onClickTagFishing = () => {
    setColor18("black");
    setColor1("Lightslategray");
    setColor2("Lightslategray");
    setColor3("Lightslategray");
    setColor4("Lightslategray");
    setColor5("Lightslategray");
    setColor6("Lightslategray");
    setColor7("Lightslategray");
    setColor8("Lightslategray");
    setColor9("Lightslategray");
    setColor10("Lightslategray");
    setColor11("Lightslategray");
    setColor12("Lightslategray");
    setColor13("Lightslategray");
    setColor14("Lightslategray");
    setColor15("Lightslategray");
    setColor16("Lightslategray");
    setColor17("Lightslategray");
    onTag("??????");
  };
  return (
    <TagItemContainer>
      <Tag>
        <TagButton getColor1={getColor1} onClick={onClickTagMount} key="???">
          <FaMountain size={30} />
          <Tagname>???</Tagname>
        </TagButton>
        <TagButton getColor2={getColor2} onClick={onClickTagValley} key="??????">
          <TbBeach size={30} />
          <Tagname>??????</Tagname>
        </TagButton>
        <TagButton getColor3={getColor3} onClick={onClickTagForest} key="???">
          <GiForest size={30} />
          <Tagname>???</Tagname>
        </TagButton>
        <TagButton
          getColor4={getColor4}
          onClick={onClickTagautoSiteCo}
          key="autoSiteCo"
        >
          <FaCarSide size={30} />
          <Tagname>????????????</Tagname>
        </TagButton>
        <TagButton
          getColor5={getColor5}
          onClick={onClickTagglampSiteCo}
          key="glampSiteCo"
        >
          <GiCampingTent size={30} />
          <Tagname>?????????</Tagname>
        </TagButton>
        <TagButton getColor16={getColor17} onClick={onClickTagBeach} key="??????">
          <FaUmbrellaBeach size={30} />
          <Tagname>??????</Tagname>
        </TagButton>
        <TagButton
          getColor6={getColor6}
          onClick={onClickTagcaravSiteCo}
          key="caravSiteCo"
        >
          <GiCaravan size={30} />
          <Tagname>?????????</Tagname>
        </TagButton>
        <TagButton
          getColor7={getColor7}
          onClick={onClickTagindvdlCaravSiteCo}
          key="indvdlCaravSiteCo"
        >
          <FaCaravan size={30} />
          <Tagname>???????????????</Tagname>
        </TagButton>
        <TagButton
          getColor8={getColor8}
          onClick={onClickTagsiteBottomCl1}
          key="siteBottomCl1"
        >
          <GiGrass size={30} />
          <Tagname>??????</Tagname>
        </TagButton>
        <TagButton
          getColor10={getColor10}
          onClick={onClickTagsiteBottomCl3}
          key="siteBottomCl3"
        >
          <GiWoodBeam size={30} />
          <Tagname>??????</Tagname>
        </TagButton>
        <TagButton
          getColor9={getColor9}
          onClick={onClickTagsiteBottomCl2}
          key="siteBottomCl2"
        >
          <GiStonePath size={30} />
          <Tagname>?????????</Tagname>
        </TagButton>

        <TagButton getColor13={getColor13} onClick={onClickTagElect} key="??????">
          <GiElectric size={30} />
          <Tagname>??????</Tagname>
        </TagButton>
        <TagButton
          getColor11={getColor11}
          onClick={onClickTagsiteBottomCl5}
          key="siteBottomCl5"
        >
          <GiEarthSpit size={30} />
          <Tagname>??????</Tagname>
        </TagButton>
        <TagButton
          getColor14={getColor14}
          onClick={onClickTagWifi}
          key="???????????????"
        >
          <MdWifi size={30} />
          <Tagname>???????????????</Tagname>
        </TagButton>
        <TagButton
          getColor12={getColor12}
          onClick={onClickTaganimalCmgCl}
          key="animalCmgCl"
        >
          <MdPets size={30} />
          <Tagname>????????????</Tagname>
        </TagButton>

        <TagButton
          getColor15={getColor15}
          onClick={onClickTagHotwater}
          key="??????"
        >
          <MdOutlineWaterDrop size={30} />
          <Tagname>??????</Tagname>
        </TagButton>
        <TagButton
          getColor16={getColor18}
          onClick={onClickTagFishing}
          key="??????"
        >
          <GiFishingPole size={30} />
          <Tagname>??????</Tagname>
        </TagButton>
        <TagButton
          getColor16={getColor16}
          onClick={onClickTagStore}
          key="?????????"
        >
          <MdOutlineLocalGroceryStore size={30} />
          <Tagname>?????????</Tagname>
        </TagButton>
      </Tag>
    </TagItemContainer>
  );
}

export default Tags;

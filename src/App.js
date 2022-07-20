import React, { useState } from "react";
import "./styles.css";
const helpOptions = [
  {
    index: 1,
    option: "How to sign in",
    subOptions: [
      {
        subid: 11,
        parentid: 1,
        subinfo:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
      }
    ]
  },
  {
    index: 2,
    option: "How to support a creator",
    subOptions: [
      {
        subid: 12,
        parentid: 2,
        subinfo:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
      }
    ]
  },
  {
    index: 3,
    option: "How to upload a video",
    subOptions: [
      {
        subid: 13,
        parentid: 3,
        subinfo:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
      }
    ]
  },
  {
    index: 4,
    option: "How to access questionnaire",
    subOptions: [
      {
        subid: 14,
        parentid: 4,
        subinfo:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
      }
    ]
  }
];

function App() {
  const [optionId, setOptionId] = useState(0);
  // const [show, setShow] = useState(0);
  const [initial, setinitial] = useState(null);
  const handleOnclick = (val) => {
    // console.log('value',val.option)
    setOptionId(val.index);
    setinitial(true);
    if (optionId === val.index) {
      // setShow(0);
      setinitial(!initial);
    }
    // setShow(val.index);
  };

  return (
    <div className="wrapper">
      <div className="helpContainer">
        <div className="helpDivHeader">
          <span className="helpDivHeaderSpan">Ask Anything</span>
        </div>
        <div className="mapWrapper">
          {helpOptions.map((data, index) => {
            return (
              <div className="helpOptionCont">
                <div
                  className="helpTab_closeBtn"
                  onClick={() => handleOnclick(data)}
                >
                  <div key={data.index} className="helpTab">
                    {data.option}
                  </div>
                  <span className="closeBtn">x</span>
                </div>
                {data.subOptions.map((data, index) => {
                  return (
                    <>
                      {optionId === data.parentid && initial ? (
                        <div key={index} className="subInfo">
                          {data.subinfo}
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

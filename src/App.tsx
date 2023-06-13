import "./App.css";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useMemo, useRef, useState } from "react";
import blob from "./assets/blobFloat.png";
import stars from "./assets/stars.jpg";
import blob12 from "./assets/blobFloat.png";
import {
  Stepper,
  Step,
  StepLabel,
  stepConnectorClasses,
  StepConnector,
  styled,
} from "@mui/material"; 


function App() {
  const ParallaxRef = useRef<IParallax>(null);

  useEffect(() => {
    console.log(ParallaxRef.current?.offset);
  },[ParallaxRef.current?.offset]);

  const ColorlibConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor: "#0b0b0b",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
  }));

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {props.icon}
      </ColorlibStepIconRoot>
    );
  }

  const headerSpace = 0.1;
  const basicSpace = 1;
  const steps = [1, 2, 3, 4];

  return (
    <Parallax ref={ParallaxRef} pages={4}>
      <ParallaxLayer
        factor={headerSpace}
        className="portfolio-header"
        offset={0}
        speed={0.2}
      >
        <div className="portfolio-header-left__container">
          <div className="portfolio-header-left__container__github"></div>
          <div className="portfolio-header-left__container__menu">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z"
                fill="currentColor"
              />
              <path
                d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z"
                fill="currentColor"
              />
              <path
                d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        style={{ zIndex: "5" }}
        factor={basicSpace}
        speed={0.5}
        sticky={{ start: 0, end: 4 }}
      >
        <Stepper
          className="portfolio-steps__container"
          connector={<ColorlibConnector />}
          alternativeLabel
          orientation="vertical"
        >
          {steps.map((label) => (
            <Step
              onClick={() => ParallaxRef.current?.scrollTo(label - 1)}
              key={label}
            >
              <StepLabel StepIconComponent={ColorlibStepIcon} style={{}}></StepLabel>
            </Step>
          ))}
        </Stepper>
      </ParallaxLayer>
      <ParallaxLayer
        className="portfolio-introduction"
        sticky={{ end: 0.4 }}
        offset={0}
        speed={0.1}
        factor={basicSpace}
      >
        <h2
          onClick={() => console.log(ParallaxRef.current?.offset)}
          className="portfolio-introduction__title"
        >
          Hi, I'm Alex
        </h2>
      </ParallaxLayer>
      <ParallaxLayer
        offset={headerSpace + 0.3}
        speed={2}
        factor={basicSpace}
        style={{
          backgroundImage: `url(${blob12})`,
          zIndex: 1,
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        factor={basicSpace * 2}
        speed={0.5}
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          backgroundRepeat: "no-repeat",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={headerSpace}
        factor={basicSpace}
        speed={0.5}
        className="layer-photo-top"
      ></ParallaxLayer>
    </Parallax>
  );
}

export default App;

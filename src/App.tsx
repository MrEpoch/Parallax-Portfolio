import "./App.css";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  stepConnectorClasses,
  StepConnector,
  styled,
} from "@mui/material";
import About from "./components/about";
import Projects from "./components/project.tsx";

function App() {
  const ParallaxRef = useRef<IParallax>(null);

  const [pageNum, setPageNum] = useState<number>(0);
  const [activeMenu, setActiveMenu] = useState<boolean>(true);

  const handleScrollChange = () => {
    if (ParallaxRef.current === null) return;
    let page = ParallaxRef.current?.current / ParallaxRef.current?.space;
    if (!isNaN(page) || page !== null) {
      page = Math.floor(page);
      switch(Math.floor(page)) {
        case 0:
            setPageNum(0);
            break;
        case 1:
            setPageNum(1);
            break;
        case 2:
            setPageNum(2);
            break;
        case 3:
            setPageNum(2);
            break;
      }
    }
  };

  useEffect(() => {
    document
      .querySelector(".parallaxContainer")
      ?.addEventListener("scroll", handleScrollChange);

    return () => window.removeEventListener("scroll", handleScrollChange);
  }, []);

  const ColorlibConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
      cursor: "pointer",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage: "var(--color-gradient)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "var(--color-gradient)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundImage: "var(--color-gradient)",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#111",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    cursor: "pointer",
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage: "var(--color-gradient)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {}),
  }));

  function ColorlibStepIcon(props: any) {
    const { active, completed, className } = props;

    const icons: { [index: string]: any } = {
      1: (
        <svg
          style={{ width: "35px", height: "35px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>home</title>
          <path
            fill="currentColor"
            d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
          />
        </svg>
      ),
      2: (
        <svg
          style={{ width: "35px", height: "35px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>account</title>
          <path
            fill="currentColor"
            d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
          />
        </svg>
      ),
      3: (
        <svg
          style={{ width: "35px", height: "35px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>palette</title>
          <path
            fill="currentColor"
            d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"
          />
        </svg>
      ),
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const headerSpace = 0.1;
  const basicSpace = 1;
  const steps = [0, 1, 2];

  return (
    <Parallax className="parallaxContainer" ref={ParallaxRef} pages={4}>
      <ParallaxLayer
        factor={headerSpace}
        className="portfolio-header"
        offset={0}
        sticky={{ start: 0, end: 4 }}
      >
        <svg
          onClick={() => setActiveMenu((prev) => !prev)}
          fill="none"
          height="40"
          viewBox="0 0 24 24"
          width="40"
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
        {activeMenu && (
          <Stepper
            className="portfolio-steps__container"
            connector={<ColorlibConnector />}
            alternativeLabel
            activeStep={pageNum}
            orientation="vertical"
          >
            {steps.map((label) => (
              <Step
                className="stepper-item"
                onClick={() => {
                    switch (label) {
                        case 0:
                            ParallaxRef.current?.scrollTo(label);
                            break;
                        case 1:
                            ParallaxRef.current?.scrollTo(label+0.5);
                            break;
                        case 2:
                            ParallaxRef.current?.scrollTo(label+0.8);
                            break;
                    }
                }}
                key={label}
              >
                <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
              </Step>
            ))}
          </Stepper>
        )}
      </ParallaxLayer>
      <ParallaxLayer
        className="portfolio-introduction"
        sticky={{ end: 0.4 }}
        offset={0}
        factor={basicSpace}
      >
        <h2 className="portfolio-introduction__title">Hi, I'm Alex</h2>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        factor={basicSpace + basicSpace / 2}
        speed={0.5}
        className="portfolio-introduction-background"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 800"
          className="rotating-ball"
        >
          <defs>
            <radialGradient id="sssurface-grad-dark" r="75%" cx="20%" cy="20%">
              <stop
                offset="0%"
                stopColor="hsla(0, 0%, 0%, 1.00)"
                stopOpacity="0"
              ></stop>
              <stop offset="100%" stopColor="#000000" stopOpacity="1"></stop>
            </radialGradient>
            <radialGradient id="sssurface-grad-light" r="39%" cx="29%" cy="30%">
              <stop offset="0%" stopColor="#b0b0b0" stopOpacity="0.75"></stop>
              <stop
                offset="100%"
                stopColor="hsla(0, 0%, 0%, 1.00)"
                stopOpacity="0"
              ></stop>
            </radialGradient>
            <filter
              id="sssurface-blur"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="30"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <g>
            <ellipse
              rx="207"
              ry="103.5"
              cx="450"
              cy="500"
              fill="#000000"
              opacity="0.44"
              filter="url(#sssurface-blur)"
            ></ellipse>
            <circle
              r="207"
              cx="400"
              cy="400"
              fill="hsla(0, 0%, 0%, 1.00)"
            ></circle>
            <circle
              r="207"
              cx="400"
              cy="400"
              fill="url(#sssurface-grad-dark)"
            ></circle>
            <circle
              r="207"
              cx="400"
              cy="400"
              fill="url(#sssurface-grad-light)"
            ></circle>
          </g>
        </svg>

        <div className="custom-shape-divider-bottom-1687613985">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={headerSpace}
        factor={basicSpace}
        speed={0.5}
        className="layer-photo-top"
      ></ParallaxLayer>
      <ParallaxLayer
        factor={basicSpace}
        style={{ zIndex: 3 }}
        offset={basicSpace + basicSpace / 2}
        speed={0.3}
      >
        <About />
      </ParallaxLayer>
      <ParallaxLayer
        offset={basicSpace + basicSpace / 2}
        factor={basicSpace / 4}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 600 600"
        >
          <path
            d="M316.0994873046875,270.1570739746094C298.42933146158856,246.8586451212565,168.19372049967447,210.7329864501953,149.60733032226562,209.6858673095703C131.02094014485678,208.6387481689453,204.05758666992188,251.3089167277018,204.58114624023438,263.8743591308594C205.10470581054688,276.4398015340169,168.5863825480143,268.4554850260417,152.74868774414062,285.0785217285156C136.91099294026694,301.70155843098956,103.92670440673828,350.2617899576823,109.55497741699219,363.6125793457031C115.1832504272461,376.96336873372394,167.2774887084961,355.3665059407552,186.51832580566406,365.1832580566406C205.75916290283203,375.00001017252606,213.48167673746744,425.1308949788411,225,422.5130920410156C236.51832326253256,419.8952891031901,240.44501749674478,374.8691101074219,255.62826538085938,349.4764404296875C270.81151326497394,324.0837707519531,333.76964314778644,293.4555028279622,316.0994873046875,270.1570739746094C298.42933146158856,246.8586451212565,168.19372049967447,210.7329864501953,149.60733032226562,209.6858673095703"
            fill="currentColor"
            transform="matrix(-1,0,0,1,514.0579833984375,-16.13946533203125)"
          ></path>
        </svg>
      </ParallaxLayer>
      <ParallaxLayer
        offset={basicSpace * 3}
        factor={basicSpace}
        speed={0.3}
        style={{ zIndex: "1" }}
        className="portfolio-introduction-parallax"
        >
        <Projects />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;

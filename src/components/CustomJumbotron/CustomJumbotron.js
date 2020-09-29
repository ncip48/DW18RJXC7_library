import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const SvgComponent = ({ bgcolor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={bgcolor}
        fill-opacity="1"
        d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,149.3C672,160,768,224,864,245.3C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
};

export const CustomJumbotron = ({ children, bgcolor }) => {
  const svgString = encodeURIComponent(
    renderToStaticMarkup(<SvgComponent bgcolor={bgcolor} />)
  );

  const style = {
    height: "100vh",
    width: "100%",
  };

  const bgsvg = {
    //backgroundColor: bgcolor,
    backgroundImage: `url('data:image/svg+xml;utf8, ${svgString}')`,
    backgroundRepeat : 'no-repeat',
    //backgroundPosition:`0 ${window.innerHeight/2+'px'}`,
    height: "50%",
  };

  console.log(window.innerHeight)

  return (
    <div style={style}>
      {/* <div style={{backgroundColor:bgcolor, height:'50%'}}/> */}
      <div style={bgsvg}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,149.3C672,160,768,224,864,245.3C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg> */}
        {children}
      </div>
    </div>
  );
};

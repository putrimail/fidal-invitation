import "./App.css";
import { useState, useEffect } from "react";
import { images } from "./image";
import { colors } from "./colors";
import Sound from "./sounds/hbd.mp3";
import { useParams } from "react-router-dom";
import Countdown from "react-countdown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const listImage = [
  { path: `${images.satu}`, alt: "satu" },
  { path: `${images.dua}`, alt: "satu" },
  { path: `${images.tiga}`, alt: "satu" },
  { path: `${images.empat}`, alt: "satu" },
  { path: `${images.lima}`, alt: "satu" },
  { path: `${images.enam}`, alt: "satu" },
  { path: `${images.tujuh}`, alt: "satu" },
];
function App() {
  const { names } = useParams();
  const [backsound, setBacksound] = useState(false);
  const [style, setStyle] = useState({});
  const latitude = -8.656449;
  const longitude = 116.542098;
  useEffect(() => {
    const play = () => {
      new Audio(Sound).play();
    };

    if (backsound) {
      play();
      document.body.style.overflow = "";
      setStyle({ backgroundColor: `${colors.darkGreen}` });
    } else {
      document.body.style.overflow = "hidden";
      setStyle({
        backgroundImage: `url(${images.bgImage})`,
        backgroundSize: "100%",

        backgroundRepeat: "no-repeat",
      });
    }
  }, [backsound]);

  const targetDate = new Date("2025-01-26T16:00:00");

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h2 className="berkedip">Acara Telah Lewat</h2>;
    } else {
      return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
          <h2 style={{ fontFamily: "Rowdies, serif" }}>
            <span>
              <i className="bi bi-calendar3-event-fill me-2"></i>
            </span>
            Save The Date :
          </h2>
          <div className="d-flex gap-2">
            <div
              className="w-25  p-3 rounded-3 text-white shadow"
              style={{ backgroundColor: `${colors.moreGreen}` }}
            >
              {days} D
            </div>
            <div
              className="w-25  p-3 rounded-3 text-white"
              style={{ backgroundColor: `${colors.moreGreen}` }}
            >
              {hours} H
            </div>
            <div
              className="w-25  p-3 rounded-3 text-white"
              style={{ backgroundColor: `${colors.moreGreen}` }}
            >
              {minutes} M
            </div>
            <div
              className="w-25  p-3 rounded-3 text-white"
              style={{ backgroundColor: `${colors.moreGreen}` }}
            >
              {seconds} S
            </div>
          </div>
          <p className="pt-3">Minggu, 26 Januari 2025</p>
        </div>
      );
    }
  };
  console.log(names);
  return (
    <>
      <div
        className="container-fulid position-relative"
        style={{ backgroundColor: `${colors.green}` }}
      >
        <div className="container ">
          <div className="row min-vh-100 justify-content-center">
            <div className="col-md-5 p-4 text-center  " style={style}>
              <div className="d-flex position-relative justify-content-center align-text-top ">
                <img
                  src={images.bgTextKayu}
                  className=" text-kayu "
                  alt="logo"
                />
                <div
                  className="position-absolute  align-self-center ms-3 fw-bold "
                  style={{ color: `${colors.moreGreen}` }}
                >
                  <h3 style={{ fontFamily: "Rowdies, serif" }}>BIRTHDAY</h3>
                  <p
                    style={{
                      marginTop: "-10px",
                      fontSize: "15px",
                      marginLeft: "10px",
                    }}
                  >
                    I.G.B AHAMD FIDAL AKBAR
                  </p>
                </div>
              </div>
              {!backsound ? (
                <OpenInvitation
                  setBacksound={setBacksound}
                  backsound={backsound}
                  names={names}
                />
              ) : (
                ""
              )}
              {backsound ? (
                <>
                  <div className="row justify-content-center">
                    <div className="col-md-9 " style={{ marginTop: "-10px" }}>
                      <div>
                        <p
                          className="text-dark fs-1"
                          style={{
                            fontFamily: "Caveat, serif",
                          }}
                        >
                          hai {names} datang ya, di acara ulang tahun fidal yang
                          ke
                          <span className="fw-bold"> - 3</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-4 justify-content-center">
                    <div className="col-md-9">
                      <Countdown date={targetDate} renderer={renderer} />
                    </div>
                  </div>
                  <div className="row pt-4 justify-content-center">
                    <div className="col-md-9">
                      <div>
                        <h2 style={{ fontFamily: "Rowdies, serif" }}>
                          <span>
                            <i className="bi bi-geo-alt-fill"></i>
                          </span>
                          Location :
                        </h2>
                        <a
                          href={`https://www.google.com/maps?q=${latitude},${longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex position-relative justify-content-center "
                        >
                          <img
                            src={images.maps}
                            alt="maps"
                            className="w-100 rounded-3"
                          />
                          <h5 className="berkedip position-absolute pt-5 text-black">
                            click to find location
                            <p>
                              <i className="bi bi-arrow-down"></i>
                            </p>
                          </h5>
                        </a>
                        <p style={{ paddingTop: "3px" }}>
                          <span>
                            <i className="bi bi-geo-fill me-2"></i>
                          </span>
                          Gang Hj. Siti Zulaikha, Ling. Kebon Talo, Kel. Selong,
                          Kec. Selong
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-4 justify-content-center">
                    <div className="col-md-9">
                      <h2 style={{ fontFamily: "Rowdies, serif" }}>
                        <span>
                          <i className="bi bi-balloon-heart-fill me-2"></i>
                        </span>
                        Fidal Gallery :
                      </h2>
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                          320: { slidesPerView: 1 }, // Mobile
                          768: { slidesPerView: 1 }, // Tablet
                          1024: { slidesPerView: 1 }, // Desktop
                        }}
                        loop={true}
                        className="mySwiper"
                      >
                        {listImage.map((item, i) => (
                          <SwiperSlide
                            key={i}
                            className="d-flex position-relative justify-content-center text-white"
                          >
                            <img
                              src={item.path}
                              alt={item.alt}
                              className="w-100"
                            />
                            <h5
                              className="berkedip position-absolute"
                              style={{ paddingTop: "100px" }}
                            >
                              <span>
                                <i className="bi bi-arrow-left me-2"></i>swap
                              </span>
                            </h5>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  <div className="row pt-4 justify-content-center">
                    <div className="col-md-9">
                      <h2 style={{ fontFamily: "Rowdies, serif" }}>
                        Thank you very much{" "}
                        <span>
                          <i className="bi bi-emoji-heart-eyes-fill ms-2"></i>
                        </span>
                      </h2>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

const OpenInvitation = ({ setBacksound, backsound, names }) => {
  return (
    <div>
      <button
        className=" btn border border-white rounded-circle shadow"
        onClick={() => setBacksound(!backsound)}
        style={{ backgroundColor: `${colors.moreGreen}`, marginTop: "-40px" }}
      >
        <i
          className="bi bi-envelope-open-fill m-2 text-white"
          style={{ fontSize: "50px" }}
        ></i>
      </button>
      <h5 className="berkedip text-white fw-bold">klick to open me</h5>
      <div style={{ marginTop: "100px" }}>
        <button
          className="p-5 btn text-white "
          style={{
            fontFamily: "Caveat, serif",
            backgroundColor: `${colors.moreGreen}`,
            border: `solid ${colors.green} 2px`,
          }}
        >
          <h2>To : {names}</h2>
        </button>
      </div>
    </div>
  );
};

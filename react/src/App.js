import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.cjs.jsx"
import React, { useEffect } from "react"

function App() {
  useEffect(() => {
    window.addEventListener("scroll", pop)

    return () => window.removeEventListener("scroll", pop)
  }, [])

  const pop = () => {
    if (window.scrollY < 1600) {
      document.getElementById("test").classList.remove("show")
    }
    if (window.scrollY >= 1700 || window.scrollY < 2000) {
      document.getElementById("test").classList.add("show")
    }

    if (window.scrollY > 2000) {
      document.getElementById("test").classList.remove("show")
    }
  }
  return (
    <div>
      <div
        style={{
          height: "150vh",
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          fontSize: 80,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
        quibusdam autem iusto facilis, est minus consequuntur perspiciatis nemo
        recusandae at quidem impedit qui vitae illo eius voluptatibus vero. Quo,
        porro.
      </div>
      <div className={"scrolly-container"} style={{ height: "800vh" }}>
        <ScrollyVideo
          transitionSpeed="8"
          frameThreshold="0.11"
          src="https://download-video.akamaized.net/2/playback/55710d75-2e4a-4cd2-83e5-8512c0b75e45/514b3ed9?__token__=st=1681481402~exp=1681495802~acl=%2F2%2Fplayback%2F55710d75-2e4a-4cd2-83e5-8512c0b75e45%2F514b3ed9%2A~hmac=cf142088184640e6879add5650d32e34d50b933558667683abc500813a7c33a5&r=dXMtd2VzdDE%3D"
        />
        <div
          id="test"
          class="fade-in"
          style={{
            color: "white",
            fontSize: 40,
            position: "fixed",
            top: "50%",
            width: "40vh",
            maxWidth: "calc(100 % - 20px)",
            marginLeft: "10%",
            height: "100vh",
          }}
        >
          Coucou
        </div>
        <div
          style={{
            color: "white",
            fontSize: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: "40vh",
            maxWidth: "calc(100 % - 20px)",
            marginLeft: "75%",
            height: "100vh",
          }}
        >
          No you
        </div>
      </div>
      <div
        style={{
          height: "200vh",
          backgroundColor: "#3d3d3d",
          color: "blue",
          padding: "20px",
          fontSize: 80,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
        quibusdam autem iusto facilis, est minus consequuntur perspiciatis nemo
        recusandae at quidem impedit qui vitae illo eius voluptatibus vero. Quo,
        porro.
      </div>
    </div>
  )
}

export default App

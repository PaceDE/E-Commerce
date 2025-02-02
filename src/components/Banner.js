import React from "react";
import "../css/Banner.css";

function Banner({bgName,pageTitle}) {
  const style = {
    backgroundImage: `url(${bgName})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
   
  };

  return (
    <>
      <section style={style} className="w-[100%] h-[250px] rounded-3xl banner">
        <h3>{pageTitle}</h3>
        <span>
          <a href="/">HOME &nbsp;</a>
          <i class="bi bi-chevron-double-right"></i> &nbsp; {pageTitle}
        </span>
      </section>
    </>
  );
}

export default Banner;

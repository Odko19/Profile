import "../style/footer.css";
import { useEffect, useState } from "react";

function Footer() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/profile/profile")
      .then((res) => res.json())
      .then((res) => setImage(res));
  }, []);
  return (
    <div className="p-3 back">
      <div className="container text-white">
        {image &&
          image.map((img, i) => {
            return (
              <a key={i} href={`${img.link}`}>
                <img
                  key={i}
                  src={`${img.image}`}
                  alt=""
                  className="img-width"
                />
              </a>
            );
          })}
      </div>
    </div>
  );
}

export default Footer;

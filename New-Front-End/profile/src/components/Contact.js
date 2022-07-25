import { useEffect, useState } from "react";
import "../style/contact.css";

function Contact() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch("https://profile-create-back-end-v2.herokuapp.com/profile/profile")
      .then((res) => res.json())
      .then((res) => setImage(res));
  }, []);
  return (
    <div>
      <div className="footer">
        {image &&
          image.map((img, i) => {
            return (
              <a key={i} href={`${img.link}`}>
                <img key={i} src={`${img.image}`} alt="" className="image" />
              </a>
            );
          })}
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import css from "./PhotoList.module.css";
import { ReactComponent as Rectangle } from "../../../../assets/rectangle.svg";

const PhotoList = ({ photos }) => {
    const ikons = [
      { id: 1, url: "https://picsum.photos/115/115" },
      { id: 2, url: "https://picsum.photos/115/115" },
      { id: 3, url: "https://picsum.photos/115/115" },
      { id: 4, url: "https://picsum.photos/115/115" },
      { id: 5, url: "https://picsum.photos/115/115" },
      { id: 6, url: "https://picsum.photos/115/115" },
    ];

    return (
      <div className={css.containerPhoto}>
        <div className={css.titlePhotoSvg}>
          <svg
            href="http://www.w3.org/2000/svg"
            width="32"
            height="4"
            className={css.iconPhoto}
          >
            <Rectangle />
          </svg>
          <h2 className={css.photoTitle}>Слідкуй за нами в Instagram</h2>
          <svg
            href="http://www.w3.org/2000/svg"
            width="32"
            height="4"
            className={css.iconSale}
          >
            <Rectangle />
          </svg>
        </div>
        <p className={css.photoParagraph}>
          Доєднуйся до наших соц мереж та будь з нами на одній хвилі
        </p>

        <div className={css.photoGallery}>
          {ikons.map((ikon) => (
            <img key={ikon.id} src={ikon.url} alt={ikon.id} />
          ))}
        </div>
      </div>
    );
};

export default PhotoList;

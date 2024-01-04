import React from "react";
import Carousel from "../components/Carousel/Carousel";
import FicheCollapse from "../components/FicheCollapse/FicheCollapse";
import StarRating from "../components/StarRating/StarRating";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faStar, faStarHalf);

export default function Fiche() {
  const jsonData = {
    tags: ["Batignolle", "Montmartre"],
    location: "Ile de France - Paris 17e",
    title: "Appartement cosy",
    pictures: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
    ],
    description:
      "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
    equipments: [
      "Équipements de base",
      "Micro-Ondes",
      "Douche italienne",
      "Frigo",
      "WIFI",
    ],
    host: {
      name: "Nathalie Jean",
      picture:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
    },
    rating: "5",
  };

  return (
    <div>
      <Carousel pictures={jsonData.pictures} />
      <h1 class="fiche-title">{jsonData.title}</h1>
      <div class="containeur-un">
        <h2 class="fiche-location">{jsonData.location}</h2>
        <div class="containeur-deux">
          <p class="host-name">{jsonData.host.name}</p>
          <img
            src={jsonData.host.picture}
            alt="Hôte"
            className="host-picture"
          />
        </div>
      </div>
      <div class="containeur-trois">
        <div className="tags">
          {jsonData.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <StarRating rating={jsonData.rating} />
      </div>
      <div>
        <FicheCollapse title="Description" content={jsonData.description} />
        <FicheCollapse
          title="Equipments"
          content={
            <ul>
              {jsonData.equipments.map((equipment, index) => (
                <ul key={index}>{equipment}</ul>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

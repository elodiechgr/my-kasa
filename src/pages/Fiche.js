import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import FicheCollapse from "../components/FicheCollapse/FicheCollapse";
import StarRating from "../components/StarRating/StarRating";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import jsonData from "../components/annonces.json";
import "./Fiche.scss";
import { useNavigate } from "react-router-dom";

library.add(faStar, faStarHalf);

export default function Fiche() {
  const { id } = useParams();
  const navigate = useNavigate();
  const annonce = jsonData.find((data) => data.id === id);

  if (!annonce) {
    navigate("/NotFound");
    return null;
  }

  return (
    <div>
      {/* Contenu pour le mode desktop */}
      <div className="desktop-view">
        <Carousel pictures={annonce.pictures} />
        <h1 className="fiche-title">{annonce.title}</h1>
        <div className="containeur-un">
          <h2 className="fiche-location">{annonce.location}</h2>
          <div className="containeur-deux">
            <p className="host-name">{annonce.host.name}</p>
            <img
              src={annonce.host.picture}
              alt="Hôte"
              className="host-picture"
            />
          </div>
        </div>
        <div className="containeur-trois">
          <div className="tags">
            {annonce.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <StarRating rating={annonce.rating} />
        </div>
        <div>
          <FicheCollapse title="Description" content={annonce.description} />
          <FicheCollapse
            title="Équipements"
            content={
              <ul>
                {annonce.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>

      {/* Contenu pour le mode responsive */}
      <div className="mobile-view">
        <Carousel pictures={annonce.pictures} />
        <h1 className="fiche-title">{annonce.title}</h1>
        <h2 className="fiche-location">{annonce.location}</h2>
        <div className="tags">
          {annonce.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="mobile-container">
          <StarRating rating={annonce.rating} />
          <div className="containeur-deux">
            <p className="host-name">{annonce.host.name}</p>
            <img
              src={annonce.host.picture}
              alt="Hôte"
              className="host-picture"
            />
          </div>
        </div>
        <div>
          <FicheCollapse title="Description" content={annonce.description} />
          <FicheCollapse
            title="Équipements"
            content={
              <ul>
                {annonce.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

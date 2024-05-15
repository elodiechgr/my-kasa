import React from "react";
import AboutBanner from "../components/AboutBanner/AboutBanner";
import Collapse from "../components/AboutCollapse/Collapse";

export default function About() {
  const collapses = [
    {
      title: "Fiabilité",
      content: [
        "Les annonces postées sur My Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
      ],
    },
    {
      title: "Respect",
      content: [
        "La bienveillance fait partie des valeurs fondatrices de My Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      ],
    },
    {
      title: "Service",
      content: [
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      ],
    },
    {
      title: "Sécurité",
      content: [
        "La sécurité est la priorité de My Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      ],
    },
  ];
  return (
    <div>
      <AboutBanner />
      {collapses.map((collapse, index) => (
        <Collapse
          key={index}
          title={collapse.title}
          content={collapse.content}
        />
      ))}
    </div>
  );
}

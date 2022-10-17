import React from "react";
import { ImgPaths } from "../../../types/enums";
import gridStyles from "../../../styles/layout/Grid.module.scss";
import Container from "../../Container";
import Card from "./Card";
const cardData = [
  {
    logo: ImgPaths.FunctionClarityLogo,
    sublogo: ImgPaths.FunctionClaritySubLogo,
    description:
      "FunctionClarity provides a framework to sign and validate cloud function core artifacts (images or code) with various signing technics including keyless (utilizing the cosign/sigstore project).",
    link: "https://github.com/openclarity/apiclarity.io/blob/main/README.md",
  },
  {
    logo: ImgPaths.KubeClarityLogo,
    sublogo: ImgPaths.KubeClaritySubLogo,
    description:
      "KubeClarity is a tool for detection and management of Software Bill Of Materials (SBOM) and vulnerabilities of container images and filesystems. It scans both runtime K8s clusters and CI/CD pipelines for enhanced software supply chain security.",
    link: "https://github.com/openclarity/kubeclarity/blob/main/README.md",
  },
  {
    logo: ImgPaths.APIClarityLogo,
    sublogo: ImgPaths.APIClaritySubLogo,
    description:
      "APIClarity, an open source cloud native visibility tool for APIs, utilizes a Service Mesh framework to capture and analyze API traffic, and identify potential risks.",
    link: "https://github.com/openclarity/apiclarity.io/blob/main/README.md",
  },
];
const ThreeCardSection = () => {
  return (
    <Container>
      <div className={gridStyles.Grid}>
        {cardData.map(({ logo, sublogo, description, link }, index) => {
          return (
            <Card
              key={index}
              logo={logo}
              subLogo={sublogo}
              description={description}
              link={link}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ThreeCardSection;

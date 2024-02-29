import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={415}
    viewBox="0 0 300 415"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="40" ry="40" width="300" height="415" />
  </ContentLoader>
);

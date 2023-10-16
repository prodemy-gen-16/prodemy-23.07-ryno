import { useEffect } from "react";

import PageTitle from "../components/PageTitle.jsx";

function AboutPage() {
  useEffect(() => {
    document.title = "About Us | edge";
  }, []);

  return (
    <>
      <PageTitle>About Us</PageTitle>
    </>
  );
}

export default AboutPage;

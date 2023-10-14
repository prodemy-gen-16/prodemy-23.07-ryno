import { useEffect } from "react";

import PageTitle from "../components/PageTitle.jsx";

function ContactsPage() {
  useEffect(() => {
    document.title = "Contacts | edge";
  }, []);

  return (
    <>
      <PageTitle>Contacts</PageTitle>
    </>
  );
}

export default ContactsPage;

import { useEffect } from "react";
import PageTitle from "../components/PageTitle.jsx";
import CheckoutForm from "../components/CheckoutForm.jsx";
import CartList from "../components/CartList.jsx";

function CartPage() {
  useEffect(() => {
    document.title = "Shopping Cart | edge";
  }, []);

  return (
    <>
      <PageTitle>Shopping Cart</PageTitle>
      <section className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
        <CartList />
        <CheckoutForm />
      </section>
    </>
  );
}

export default CartPage;

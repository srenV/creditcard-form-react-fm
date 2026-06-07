import CreditCardBackside from "../features/credit-card/components/CreditCardBackside";
import CreditCardForm from "../features/credit-card/components/CreditCardForm";
import CreditCardFrontside from "../features/credit-card/components/CreditCardFrontside";
import Footer from "../shared/layout/Footer";

function App() {
  return (
    <>
      <div
        className="flex flex-col box-content justify-center lg:justify-normal lg:flex-row w-svw h-screen  bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_30%,#ffffff_30%),radial-gradient(at_top_left,#bf5af2_0%,transparent_50%),radial-gradient(at_top_right,#ff453a_0%,transparent_40%),radial-gradient(at_bottom_left,#5e5ce6_0%,transparent_60%),radial-gradient(at_bottom_right,#ff9f0a_0%,transparent_50%),linear-gradient(to_right,#a855f7_0%,#ec4899_30%)] 
  lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_30%,#ffffff_30%),radial-gradient(at_top_left,#bf5af2_0%,transparent_50%),radial-gradient(at_top_right,#ff453a_0%,transparent_40%),radial-gradient(at_bottom_left,#5e5ce6_0%,transparent_60%),radial-gradient(at_bottom_right,#ff9f0a_0%,transparent_50%),linear-gradient(to_right,#a855f7_0%,#ec4899_30%)]"
      >
        <div className="lg:flex-1 flex  lg:flex-col lg:gap-10 flex-col-reverse items-center justify-center relative">
          <CreditCardFrontside />
          <CreditCardBackside />
        </div>
        <div className="lg:flex-1 flex items-center justify-center translate-y-10 lg:translate-0">
          <CreditCardForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

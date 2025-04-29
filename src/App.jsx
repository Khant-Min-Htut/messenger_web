import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <Outlet /> {/* Here the child pages (Home, About, Contact) will render */}
      <Footer />
    </div>
  );
}

export default App;

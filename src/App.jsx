import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
      <Header />

      <main  className= "main">
        <div id = "section"><Main /></div>
        <div id = "section"><Aside /></div>
      </main>
    
      <Footer />
    </div>
  );
}
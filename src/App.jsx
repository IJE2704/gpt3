import "./App.css";
import Navbar from "./assets/Components/navbar/Navbar";
import Header from "./assets/containers/header/Header";
import Brand from "./assets/Components/brand/Brand";
import WhatGpt3 from "./assets/containers/whatGPT3/WhatGpt3";
import Features from "./assets/containers/features/Features";
import Possibility from "./assets/containers/possibility/Possibility";
import Cta from "./assets/Components/cta/Cta";
import Blog from "./assets/containers/blog/Blog";
import Footer from "./assets/containers/footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <div>
        <Brand></Brand>
        <WhatGpt3></WhatGpt3>
        <Features></Features>
        <Possibility></Possibility>
        <Cta></Cta>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

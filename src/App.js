import './App.css';

import Header from './components/Header/Header.js';
import Layout from './components/Layout/Layout.js';
import Footer from './components/Footer/Footer.js';
import urlBg  from "./assets/bg1.jpg";

function App() {

  return (
    <>
      <Header title="Header's title" descr="Header's description!"/>
      <Layout title="Layout's title!" descr="Layout's description!" urlBg={urlBg} colorBg={null} />
      <Layout title="Layout's title!" descr="Layout's description!" urlBg={null} colorBg="#e2e2e2"/>
      <Layout title="Layout's title!" descr="Layout's description!" urlBg={urlBg} colorBg={null}/>
      <Footer />
    </>
  );
}

export default App;

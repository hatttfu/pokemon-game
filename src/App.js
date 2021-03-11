import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header.js';
import Layout from './components/Layout/Layout.js';
import Footer from './components/Footer/Footer.js';

function App() {
  const color = '#e2e2e2';
  const LayoutStyle = {
    backgroundColor: color
  }
  return (
    <>
      <Header title="Header's title" descr="Header's description!"/>
      <Layout style={LayoutStyle} title="Layout's title!" descr="Layout's description!" urlBg="" colorBg="" />
      <Layout style={LayoutStyle} title="Layout's title!" descr="Layout's description!" urlBg="" colorBg=""/>
      <Layout style={LayoutStyle} title="Layout's title!" descr="Layout's description!" urlBg="" colorBg=""/>
      <Footer />
    </>
  );
}

export default App;

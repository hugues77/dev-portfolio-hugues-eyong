import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Title from "./components/partials/title/Title";





function App() {

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <div className="container">
          <Title title='A propos de Moi'/>
          <About/>
          
        </div>


      </div>
    </>
  )
}

export default App

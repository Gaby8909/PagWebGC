

import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
        <Header />
        <Router>
           <Switch>

               <Route path="/contacto">
                Contacto
               </Route>

               <Route path="/">
                   <Home />

               </Route>



           </Switch>

        </Router>
        <Footer />


        
    </div>
  );
}

export default App;

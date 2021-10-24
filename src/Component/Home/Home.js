import './../../App.css';
import './Home.css'
import myImg from "./../../sayed.jpg";
const Home = (props) => {

  return (
    <section className="Home">
     <div class="container">
        <div class="row">
           <div class="col-6 item1">
              <img src={myImg} height="400px"/>
           </div>
           <div class="col-6 item2">
             <h2>Front End Developer</h2>
             <p>Front End Developer have 1 year of experiece I have Skils:</p>
             <div class="row">
             <ul class="col-6">
               <li>Html5</li>
               <li>Css3</li>
               <li>Javascript</li>
               <li>Es6</li>
             </ul>
             <ul class="col-6">
               <li>Jquery</li>
               <li>Bootstrap4</li>
               <li>Angular</li>
               <li>React</li>
               <li>Redux</li>
             </ul>
           </div>
        </div>
     </div>
    </div>
     </section>
  );
}

export default Home;

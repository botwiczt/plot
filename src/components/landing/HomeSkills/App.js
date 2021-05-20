import React from 'react';
import './App.css';
import Colors from './Colors'
import DetailsThumb from './DetailsThumb';
import { Container, Button } from 'components/common';
import { ButtonGrow} from './styles';
import { Link } from "gatsby";
import render from 'assets/illustrations/render.png';
import darkrender from 'assets/illustrations/darkrender.png';
import greenrender from 'assets/illustrations/greenrender.png';
import redrender from 'assets/illustrations/redrender.png';

class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "plöt home: base package",
        "src": [
            render,
            darkrender,
            greenrender,
            redrender
          ],
        "description": "choose between multiple colors.",
        "content": "optional addons will include a smart home system, furniture upgrades, room additions, and more!",
        "disclaimer": "* refers to physical structure only",
        "price": 2000,
        "colors":["white","black","lightblue","lightgreen"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                </div>
                <div className="row">
                <span>${item.price}/month｜100% 3D-printed*｜carbon negative 🌲</span>
                  </div>
                {/*<Colors colors={item.colors} />*/}
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <div className="row">
                <h3>{item.description}</h3>
                </div>
                <div className="row">
                <h4>{item.content}</h4>
                </div>
                <ButtonGrow><Button as={Link} href="/waitlist">
                  join the waitlist →
                </Button></ButtonGrow>
                <div className="row">
                <h5>{item.disclaimer}</h5>
                </div>
                {/*<button className="cart">order now</button>*/}

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;

import React from 'react';
import data from "../data.json";
import priya from "./priya.jpg";
import yaswanth from "./yaswanth.jpg"
import {Link} from 'react-router-dom';



let Cards=()=>{
    let cardsData=data.details;
    console.log(cardsData);
    let images=[priya,yaswanth];
    return(
        <div>
              <div className="row">
            {cardsData.map((values,index)=>(
               <div className="col-sm-10 col-md-5 m-1" key={index}>
                    <div className="card border-secondary text-center bg-light mb-3">
                        <h5 class="card-header">{values.Card.profilename}</h5>
                        <img class="card-img-top" src={images[index]} height="100%" width="100%"/>
                         <h1 class="card-title">{values.Card.name}</h1>
                         <h4 className="card-subtitle mb-2 text-muted">{values.Card.des}</h4>
                         <h6 class="card-subtitle mb-2 text-muted">{values.Card.foundation}</h6>
                         <a href={"mailto:" + values.Card.email}>
                         <h2>{values.Card.email}</h2>
                         <h5 class="text-secondary ">{values.Card.Address}</h5>
                         </a>
                         <a href={values.Card.github}>
                         <h2 class="btn btn-secondary btn-block">Github</h2>
                         </a>
                         <a href={values.Card.linkedin}>
                         <h2 class="btn btn-secondary btn-block">Linkedin</h2>
                         </a>
                         <a href={values.Card.utube}>
                         <h2 class="btn btn-secondary btn-block">You Tube</h2>
                         </a>
                         
                         <Link to={{pathname:"/resume",personcard:{id:index},}} 
                         className="btn btn-primary btn-lg">
                             Click Me</Link>
                    </div>
                </div>
            ))}       
       </div>
    </div>
    );
};
export default Cards;
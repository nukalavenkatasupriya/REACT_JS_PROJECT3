import React from 'react';
import data from "../data.json";

function Resume(props){
    
    let profile=data.details[props.location.personcard.id];

    console.log(profile);
    return(
        <div className="row">
            {/*cards data */}
              <div className="col-sm-10 col-md-2 mr-1">
                    <div className="card border-secondary">
                         <h4>{profile.Card.name}</h4>
                         <hr/>
                         <h5 className="card-subtitle mb-2 text-muted">{profile.Card.des}</h5>
                         <h6 class="card-subtitle mb-2 text-muted">{profile.Card.foundation}</h6>
                         <a href={"mailto:" + profile.Card.email}>
                         <h6>{profile.Card.email}</h6>
                         </a>
                        <h5 class="text-secondary">{profile.Card.Address}</h5>                                                                      
                    </div>
                </div>
                {/*get the resume data */}
                 <div className="card col-sm-10 col-md-9 border-secondary">
                    <h2 class="text-secondary text-left">Career Objective</h2>
                    <hr/>
                       <p class="text-left">{profile.career}</p>

                    <h2 class="text-secondary text-left">Technical Skills</h2>
                    <hr/>
                       <p class="text-left">{profile.skill1}</p>
                       <p class="text-left">{profile.skill2}</p>
                       <p class="text-left">{profile.skill3}</p>
                       <p class="text-left">{profile.skill4}</p>
                       <p class="text-left">{profile.skill5}</p>
                       <p class="text-left">{profile.skill6}</p>
                       <p class="text-left">{profile.skill7}</p>
                       <p class="text-left">{profile.skill8}</p>
                       <p class="text-left">{profile.skill9}</p>
                       <p class="text-left">{profile.skill10}</p>
                       <p class="text-left">{profile.skill11}</p>
                       <p class="text-left">{profile.skill12}</p>
                       <p class="text-left">{profile.skill13}</p>

                       <h2  class="text-secondary text-left">Areas of Interests</h2>
                    <hr/>
                    <p class="text-left">{profile.intrest1}</p>
                       <p class="text-left">{profile.intrest2}</p>
                       <p class="text-left">{profile.intrest3}</p>

                       <h2 class="text-secondary text-left">Achievements</h2>
                    <hr/>
                       <p class="text-left">{profile.ach1}</p>
                       <p class="text-left">{profile.ach2}</p>
                       <p class="text-left">{profile.ach3}</p>
                       <p class="text-left">{profile.ach4}</p>
                       <p class="text-left">{profile.ach5}</p>
                       <p class="text-left">{profile.ach6}</p>
                       <p class="text-left">{profile.ach7}</p>
                       <p class="text-left">{profile.ach8}</p>


                       <h2 class="text-secondary text-left">Projects</h2>
                    <hr/>
                       <p class="text-left">{profile.pro1}</p>
                       <p class="text-left">{profile.tech1}</p>
                       <p class="text-left">{profile.despt1}</p>
                       <p class="text-left">{profile.pro2}</p>
                       <p class="text-left">{profile.tech2}</p>
                       <p class="text-left">{profile.despt2}</p>
                       <p class="text-left">{profile.pro3}</p>
                       <p class="text-left">{profile.tech3}</p>
                       <p class="text-left">{profile.despt3}</p>
                       <p class="text-left">{profile.pro4}</p>
                       <p class="text-left">{profile.tech4}</p>
                       <p class="text-left">{profile.despt4}</p>
                       <p class="text-left">{profile.pro5}</p>
                       <p class="text-left">{profile.tech5}</p>
                       <p class="text-left">{profile.despt5}</p>

                       <h2 class="text-secondary text-left">Strengths</h2>
                    <hr/>
                    <p class="text-left">{profile.str1}</p>
                    <p class="text-left">{profile.str2}</p>
                    <p class="text-left">{profile.str3}</p>
                    <p class="text-left">{profile.str4}</p>

                    <h2 class="text-secondary text-left">Extra-Curricular Activites</h2>
                    <hr/>
                       <p class="text-left">{profile.eca1}</p>
                       <p class="text-left">{profile.eca2}</p>
                       <p class="text-left">{profile.eca3}</p>
                       <p class="text-left">{profile.eca4}</p>

                       <h2 class="text-secondary text-left">Declaration</h2>
                    <hr/>
                       <p class="text-left">{profile.dec}</p>
                </div>
        </div>
    );
}
export default Resume;
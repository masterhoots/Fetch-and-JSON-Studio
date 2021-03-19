// TODO: add code here

fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( response => {

  response.json().then( json => {

    let div = document.getElementById("container");

    let astronaut = '';

    json.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

    // console.log(json[1]);
    for (let i = 0; i < json.length; i++) {
        
        let activeColor;

        if (json[i].active === true) {

            activeColor = "color: green";
            console.log("whatever")
            
        } else {

            activeColor = "color: black";
            
        }

        astronaut += `<div class="astronaut">
        <div class="bio">
           <h3>${json[i].firstName} ${json[i].lastName}</h3>
           <ul>
              <li>Hours in space: ${json[i].hoursInSpace}</li>
              <li style="${activeColor}">Active: ${json[i].active}</li>
              <li>Skills: ${json[i].skills}</li>
           </ul>
        </div>
        <img class="avatar" src="${json[i].picture}">
     </div>`;
        console.log(div)

    }
    astronaut += `<p>Astronaut Count: ${json.length}</p>`
    div.innerHTML = astronaut;
  } )
    
}) 
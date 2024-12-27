let skillsList= [
    {"Skill": "HTML","Years of Experience": 2, "imgPath": "img/html.png"},
    {"Skill": "CSS","Years of Experience": 2, "imgPath": "img/css.png"},
    {"Skill": "JS","Years of Experience": 1.5, "imgPath": "img/js.png"},
    {"Skill": "React","Years of Experience": 1, "imgPath": "img/react.png"},
    {"Skill": "Node.js","Years of Experience": 1, "imgPath": "img/node.png"},
    {"Skill": "Java","Years of Experience": .5, "imgPath": "img/java.png"}
];

let projectsList=[
    {"Title": "Chatbot", "Description": "Developed a secure website integrated with chatbot for an automobile client using HTML, CSS, JavaScript and IBM Watson Assistant."},
    {"Title": "Sentiment Analyzer", "Description": "Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU"},
    {"Title": "Fashion Website", "Description": "Created a styled multi-page website for a new player in the fashion industry and integrated it with a shopping cart, using stripe for payment gateway"}, 
]

let skillsListDiv= document.getElementById("skillsListDiv");
let projectsListDiv= document.getElementById("projectsListDiv");


for (let i=0;i<skillsList.length;i++){
    let skillBox = document.createElement('div')
    skillBox.classList.add('skillBox');
    
    skillBox.innerHTML = `<img src= ${skillsList[i]["imgPath"]} class="skillIcon">`;
    skillBox.innerHTML+= `<h3> ${skillsList[i]["Skill"]} </h3>`;
    skillBox.innerHTML+= `<h3> ${skillsList[i]["Years of Experience"]} Years Experience </h3>`;
    
    skillsListDiv.appendChild(skillBox);
}


for (let i=0;i<projectsList.length;i++){
    let projectBox = document.createElement('div')
    projectBox.classList.add('ProjectBox');
    
    
    projectBox.innerHTML+= `<h2> ${projectsList[i]["Title"]} </h>`;

    let unorderedListElement= document.createElement("ul");


    let descriptionList= projectsList[i]["Description"].split(". ");

        for (let j=0; j<descriptionList.length;j++){
            unorderedListElement.innerHTML+=  `<li>${descriptionList[j]}</li>`
        }
           
    projectBox.appendChild(unorderedListElement);

    if (i<projectsList.length-1)
      
    projectBox.innerHTML+= '<hr class="shortDivider">';
    
    projectsListDiv.appendChild(projectBox);
}




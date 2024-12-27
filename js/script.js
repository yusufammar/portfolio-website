let skillsList= [{"Skill": "HTML","Years of Experience": 2, "imgPath": "img/html.png"},
    {"Skill": "CSS","Years of Experience": 2, "imgPath": "img/css.png"},
    {"Skill": "JS","Years of Experience": 1.5, "imgPath": "img/js.png"},
    {"Skill": "React","Years of Experience": 1, "imgPath": "img/react.png"},
    {"Skill": "Node.js","Years of Experience": 1, "imgPath": "img/node.png"},
    {"Skill": "Java","Years of Experience": .5, "imgPath": "img/java.png"}


];

let skillsListDiv= document.getElementById("skillsListDiv");


for (let i=0;i<skillsList.length;i++){
    let skillBox = document.createElement('div')
    skillBox.classList.add('skillBox');
    
    skillBox.innerHTML = `<img src= ${skillsList[i]["imgPath"]} class="skillIcon">`;
    skillBox.innerHTML+= `<h3> ${skillsList[i]["Skill"]} </h3>`;
    skillBox.innerHTML+= `<h3> ${skillsList[i]["Years of Experience"]} Years Experience </h3>`;
    
    skillsListDiv.appendChild(skillBox);
}





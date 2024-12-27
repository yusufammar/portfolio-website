

window.onload = function () {
    let recommendationsList = JSON.parse(localStorage.getItem('recommendations')) || [];

    if (recommendationsList.length == 0) {
        recommendationsList = [
            "Jane is a very quick learner and quickly grasps key concepts of Web development. She got a great attitude & she is an excellent team player. She has a curious mind and asks the right question. She takes initiative within a team and has potentials to lead the team. ",
            " Working with Jane has been an awesome experience. She is highly knowledgable and always goes the extra step to make sure everything is right. For any future projects that need her expertise I would definitely want to work with her again. ",
            "I had worked along with Jane during the initial phase of our venture which needed Web development. She is a committed resource who has in depth knowledge about the domain. She will be an asset for any organisation! "
        ];

        // Save the initial recommendations to localStorage
        localStorage.setItem('recommendations', JSON.stringify(recommendationsList))
    }

}

//**find a way to access reccomendation list globally once after onload */
//------------------------------------------------------------------------------------------------------------------------------

let skillsList = [
    { "Skill": "HTML", "Years of Experience": 2, "imgPath": "img/html.png" },
    { "Skill": "CSS", "Years of Experience": 2, "imgPath": "img/css.png" },
    { "Skill": "JS", "Years of Experience": 1.5, "imgPath": "img/js.png" },
    { "Skill": "React", "Years of Experience": 1, "imgPath": "img/react.png" },
    { "Skill": "Node.js", "Years of Experience": 1, "imgPath": "img/node.png" },
    { "Skill": "Java", "Years of Experience": .5, "imgPath": "img/java.png" }
];

let projectsList = [
    { "Title": "Chatbot", "Description": "Developed a secure website integrated with chatbot for an automobile client using HTML, CSS, JavaScript and IBM Watson Assistant." },
    { "Title": "Sentiment Analyzer", "Description": "Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU" },
    { "Title": "Fashion Website", "Description": "Created a styled multi-page website for a new player in the fashion industry and integrated it with a shopping cart, using stripe for payment gateway" },
]

populateSkillsList();
populateProjectsList();
populateRecommendationsList();



function populateSkillsList() {
    let skillsListDiv = document.getElementById("skillsListDiv");

    for (let i = 0; i < skillsList.length; i++) {
        let skillBox = document.createElement('div')
        skillBox.classList.add('skillBox');

        skillBox.innerHTML = `<img src= ${skillsList[i]["imgPath"]} class="skillIcon">`;
        skillBox.innerHTML += `<h3> ${skillsList[i]["Skill"]} </h3>`;
        skillBox.innerHTML += `<h3> ${skillsList[i]["Years of Experience"]} Years Experience </h3>`;

        skillsListDiv.appendChild(skillBox);
    }
}


function populateProjectsList() {
    let projectsListDiv = document.getElementById("projectsListDiv");

    for (let i = 0; i < projectsList.length; i++) {
        let projectBox = document.createElement('div')
        projectBox.classList.add('ProjectBox');


        projectBox.innerHTML += `<h2> ${projectsList[i]["Title"]} </h>`;
        projectBox.appendChild(returnDescription(i));

        if (i < projectsList.length - 1)
            projectBox.innerHTML += '<hr class="shortDivider">';

        projectsListDiv.appendChild(projectBox);
    }

}

function populateRecommendationsList() {
    let recommendationsList = getRecommendations();
    let recommendationsListDiv = document.getElementById("recommendationsListDiv");

    for (let i = 0; i < recommendationsList.length; i++) {
        let recommendationBox = document.createElement('div')
        recommendationBox.classList.add('recommendationBox');

        recommendationBox.innerHTML = `<i class='recommendationText'>"${recommendationsList[i]}" </i>`;


        recommendationsListDiv.appendChild(recommendationBox);
    }
}


//----------------------------------------------------
//Helper Methods
//---------------------------------------------------

function returnDescription(index) {
    let unorderedListElement = document.createElement("ul");


    let descriptionList = projectsList[index]["Description"].split(". ");

    for (let j = 0; j < descriptionList.length; j++) {
        unorderedListElement.innerHTML += `<li>${descriptionList[j]}</li>`
    }

    return unorderedListElement;
}


function getRecommendations() {
    let recommendations = JSON.parse(localStorage.getItem('recommendations')) || [];
    console.log("Outside onload: ", recommendations);
    return recommendations;
}

function saveRecommendations(recommendationsList) {
    localStorage.setItem('recommendations', JSON.stringify(recommendationsList));
}




function addRecommendation(event) {
    event.preventDefault();
    let messageInput = document.forms.recommendationForm.messageInput.value;
    if (messageInput == "") {
        alert("Message must be filled out");
        return false;
    }
    else {
        let recommendationsList = getRecommendations();
        recommendationsList.push(messageInput);
        saveRecommendations(recommendationsList);

        showPopup();
        
        //console.log(recommendationsList);
        //alert("Recommendation Added"); //page refreshes (on submit click)
        return true;
    }
}

    // Function to show the popup
    function showPopup() {
        const overlay = document.getElementById('popupOverlay');
        overlay.classList.add('show');
    }

    // Function to close the popup
    function closePopup() {
        const overlay = document.getElementById('popupOverlay');
        overlay.classList.remove('show');
        // Refresh the page
location.reload();

    }




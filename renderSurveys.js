


function renderSurveys(surveyName) {
surveyStore = [];
surveyText = [];
surveyTotal = [];


      for (var i=0; i < surveyName.length; i++) {
          surveyStore = surveyName.map(e => { 
           return ` 
            <div class="text-center mt-5">
            <h3>${e.title}</h3>
            <button>${e.submitButtonText}</button>
            </div>
        `
        })
    }
       for (var i=0; i < surveyName.length; i++) {
           surveyText = surveyName[i].fields.map(e => {
            return `
            <div>${e.label}</div> 
            `
        })
        surveyStore[i] += surveyText.join("");
        surveyTotal = surveyStore.join('');
        
    }


  
    return surveyTotal;


}

 

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}
// Prevent form submission without necessary information
function validateForm(){
    var name = document.getElementsByName("name")[0].value;
    var mascot = document.getElementsByName("mascot")[0].value;
    var image = document.getElementsByName("image")[0].value;
    var imageCaption = document.getElementsByName("imageCaption")[0].value;
    var personal = document.getElementsByName("personal")[0].value;
    var professional = document.getElementsByName("professional")[0].value;
    var academic = document.getElementsByName("academic")[0].value;
    var webDev = document.getElementsByName("webDev")[0].value;
    var compPlat = document.getElementsByName("compPlat").value;
    var agree = document.getElementsByName("agree")[0].checked;

    if(
        name === " " ||
        mascot === " " ||
        image === " " ||
        imageCaption === " " ||
        personal === " " ||
        professional === " " ||
        academic === " " ||
        webDev === " " ||
        compPlat === " " ||
        !agree
    ){
        alert("Please fill in all required fields and agree to the terms.");
        return false;
    }
    return true;
}

// reset form
function resetForm(){
    document.getElementById("surveyForm").reset();
    var courses = document.getElementById("courses");
    while (courses.firstChild){
        courses.removeChild(courses.firstChild);
    }
}

// add new course text boxes
function addCourse(){
    var container = document.getElementById(courses);
    var newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.name = "courses[]";
    newCourseInput.placeholder = "Enter a Course!"

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function(){
        container.removeChild(newCourseInput);
        container.removeChild(deleteButton);
    }
    container.appendChild(newCourseInput);
    container.appendChild(deleteButton);
}

// Handle form submission
function submitForm(){
    var form = document.getElementById("surveyForm");
    var formData = new formData(form);

    // Create a div to display the submitted data
    var submittedData = document.createElement("div");
    submittedData.id = "submitted Data";

    // loop through form data and display it
    for (var pair of formData.entries()){
        var label = document.createElement("strong");
        label.textContent = pair[0] + ": ";
        var value = document.createTextNode(pair[1]);
        submittedData.appendChild(label);
        submittedData.appendChild(value);
        submittedData.appendChild(document.createElement("br"));
    }

    // replace the form with submitted data
    form.parentNode.replaceChild(submittedData, form);
}

// reset link to start over
function resetLink(){
    var submittedData = document.getElementById("submittedData");
    if (submittedData){
        submittedData.parentNode.replaceChild(document.getElementById("resetLink"), submittedData);
    }
}

// event listeners
document.getElementByID("surveyForm").addEventListener("submit", function(event){
    if (!validateForm()){
        event.preventDefault();
    }
    else{
        submitForm();
        event.preventDefault(); // Prevent default form submission behavior
    }
});

document.getElementById("resetLink").addEventListener("click", function(event) {
    resetForm();
    event.preventDefault;
});
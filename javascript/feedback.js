var name_val;
var feedback_val;
var fav_val;
var reason_val;
var login_val;
var suggestion_val;
var anonymous_val;
//create a json obj 
var feedobj = {
    data:[]
};
var json;

// Function to collect input from feedback form and store it in a json object.
function getFeedback() {
    //Collecting input from form
    name_val = document.getElementById("name").value;
    feedback_val = document.getElementById("think").value;
    fav_val = document.getElementById("fav").value;
    reason_val = document.getElementById("reason").value;
    login_val = document.getElementById("login").value;
    suggestion_val = document.getElementById("suggest").value;
    anonymous_val = document.getElementById("anonymous").checked;
    
    //checking for anonymous and removing name if true
    if (anonymous_val == true){
        name_val = "";
    }
    
    //Adding objects to json object.
    feedobj.data.push({
        name: name_val,
        feel : feedback_val,
        favoutite : fav_val,
        reason :reason_val,
        login : login_val,
        suggestion : suggestion_val
    });
    
    //Converting to string and using in alert message
    json = JSON.stringify(feedobj);
     alert('Feedback submitted successfully with followin data: '+ json);
    
}
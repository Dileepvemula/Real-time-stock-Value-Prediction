var email;
var username;
var emailuser;
var password;
var pass;
var json_obj;

//creating empty json object
var userobj = {
    users:[]
};

// start of login signup page
$(document).ready(function(){
    //Ensures to hide login page at start and bg is none
    $(".login-form").hide();
    $(".login").css("background", "none");

    //Ensures on login click, signup hides and login page appears
    $(".login").click(function(){
        $(".signup-form").hide();
        $(".login-form").show();
        $(".signup").css("background", "none");
        $(".login").css("background", "#fff");
    });
    //Ensures on signup click, signup appears and login page hides
    $(".signup").click(function(){
        $(".signup-form").show();
        $(".login-form").hide();
        $(".login").css("background", "none");
        $(".signup").css("background", "#fff");
    });

    //Ensures on button click, values are taken as input
    $(".btn").click(function(){
        $(".input").val("");
    });

});

//Function to collect all inout from sign up page and sign up
function signup() {
    email = document.getElementById("email").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    //checking for non empty email or username
    if(email == "" || username == ""  ) {
        alert("please enter valid email and username");
    }
    //Checking for password length 
    else if (password.length <8){
        alert("Please choose a password of atleast 8 digits ");
    }
    //Checking to ensure no duplicate users
    else if (check(email, username) == true){
        alert("User already exists. Try logging in or create a new user");
    }
    //Add user object to json object
    else {
        userobj.users.push ({
            email_address : email,
            username : username,
            password : password
        });
        //Take the user to log in page if sign up is successful.
        alert("Sign Up Successful, Log in now");
        $(".signup-form").hide();
        $(".login-form").show();
        $(".signup").css("background", "none");
        $(".login").css("background", "#fff");
    }
}

//Function to collect all inout from login up page
function login() {
    emailuser = document.getElementById("mailuser").value;
    pass = document.getElementById("pass").value;
    
    var usrobj = userobj;
    var usrs = usrobj.users;
    //Checks login info with all objects of signup json object
    for (let index = 0; index < usrs.length; index++) {
        const obj = usrs[index];
        if(obj.email_address == emailuser || obj.username == emailuser) {
            if(obj.password == pass){
                //if details match, alert message and take to home page
                alert("Login Successful. Taking you to home page!");
                location.replace("./main.html");
            }
        } 
        else {
            //If details do not match, alert message.
            alert("User does not exist or the details are entered incorrectly.. Try again");
        }
    }
}

//Function to check a user already exists or not. returns true if duplicate user exists. Else false
function check(email, username){
    var usrobj = userobj;
    var usrs = usrobj.users;
    //Checks login info with all objects of signup json object
    for (let index = 0; index < usrs.length; index++) {
        const obj = usrs[index];
        if(obj.email_address == email || obj.username == username) {
           return true;
        }
    }
    return false;
} 


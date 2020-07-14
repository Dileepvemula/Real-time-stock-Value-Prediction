let keyword;
let date;


//Function to get best Stock match according to input
function connectAPIMatch(keyword, date){
    //Setting up url with input concatenation
    let url_for_keyword = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords="+keyword+"&apikey=I8ONTOF1P6KZAABR";
    $(document).ready(function(){
        //API connection using jQuery
        $.getJSON(url_for_keyword, function(data){
            //calculate length of json obj returned from search query
            var length = Object.keys(data.bestMatches).length
            console.log("Length is ",length);
            //Alert if no matching Stock found
            if (length < 1 || data.bestMatches == null) {
                alert("No matches found for the stock entered");
            }
            else{
                //Returns stock names if they are present else returns No Stock
                //Initially set all stock names to "No Stock"
                var stock1 = "No Stock"
                var stock2 = "No Stock"
                var stock3 = "No Stock"
                var stock4 = "No Stock"
                var stock5 = "No Stock"
                var stock6 = "No Stock"
                if (data.bestMatches[0]!= null){
                    stock1 = data.bestMatches[0]["2. name"];
                }
                if (data.bestMatches[1]!= null){
                    stock2 = data.bestMatches[1]["2. name"];
                }
                if (data.bestMatches[2]!= null){
                    stock3 = data.bestMatches[2]["2. name"];
                }
                if (data.bestMatches[3]!= null){
                    stock4 = data.bestMatches[3]["2. name"];
                }
                if (data.bestMatches[4]!= null){
                    stock5 = data.bestMatches[4]["2. name"];
                }
                if (data.bestMatches[5]!= null){
                    stock6 = data.bestMatches[5]["2. name"];
                }
                
                document.getElementById("name1").innerHTML = "Organisation name : ".bold()+stock1;
                document.getElementById("name2").innerHTML = "Organisation name : ".bold()+stock2;
                document.getElementById("name3").innerHTML = "Organisation name : ".bold()+stock3;
                document.getElementById("name4").innerHTML = "Organisation name : ".bold()+stock4;
                document.getElementById("name5").innerHTML = "Organisation name : ".bold()+stock5;
                document.getElementById("name6").innerHTML = "Organisation name : ".bold()+stock6;
            }
        });         
    });
}

// Initial function of the page. Function to take input values and check them for validity.
//Connect to best match API
function getValues(){
    keyword = document.getElementById("stock").value;
    date = document.getElementById("date1").value;
    if ( keyword.length == 0){
        alert("No stock entered, please input a stock ");
    }
    else if (date == "") {
        alert("No Date entered. Please select a date ");
    }
    //If all inputs valid, connect to APIMatch API
    else {
        connectAPIMatch(keyword, date);
    }   
}
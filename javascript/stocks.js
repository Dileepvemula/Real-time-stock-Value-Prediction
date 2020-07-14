let keyword;
let date;

//Function to connect to stock values API and retrieve stock prices for date input
function connectAPIStocks(top_match, date){
    //Selecting best stock match from all stock matches 
    var top_match_symbol = top_match["1. symbol"];
    var stock_name = top_match["2. name"];
    
    //Setting up url with input concatenation
    let url2 = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+top_match_symbol+"&apikey=I8ONTOF1P6KZAABR";
    //API connection using jQuery
    $.getJSON(url2,function(data2){
        //Duplicating time series json object
        var time_series_daily = data2["Time Series (Daily)"];
        //Selecting json object for input date from the input stock's all days data
        var data_for_date = time_series_daily[date];
        //Alert message if no stock value is found for input date.
        if (data_for_date == null){
            alert("No stock value found on the selected date ");
        }
        //If stock value found for input date, populate in frontend.
        else{
            var open = data_for_date["1. open"];
            var high = data_for_date["2. high"];
            var low = data_for_date["3. low"];
            var close = data_for_date["4. close"];
            var volume = data_for_date["5. volume"];
            
            //Populate information in frontend
            document.getElementById("name").innerHTML = "Organisation name : ".bold()+stock_name;
            document.getElementById("symbol").innerHTML = "Stock symbol  : ".bold()+top_match_symbol;
            document.getElementById("date").innerHTML = "Date : ".bold()+date;
            document.getElementById("open").innerHTML = "Open rate :  ".bold()+open;
            document.getElementById("high").innerHTML = "High : ".bold()+high;
            document.getElementById("low").innerHTML = "Low : ".bold()+low;
            document.getElementById("close").innerHTML = "Close rate : ".bold()+close;
            document.getElementById("volume").innerHTML = "Volume of stocks : ".bold()+volume;
        }
    });
}

//Function to get best Stock match according to input
function connectAPIMatch(keyword, date){
    //Setting up url with input concatenation
    let url_for_keyword = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords="+keyword+"&apikey=I8ONTOF1P6KZAABR";
    $(document).ready(function(){
        //API connection using jQuery
        $.getJSON(url_for_keyword, function(data){
            //get best possible match from data retrieved
            var top_match = data.bestMatches[0];
            //Alert if no matching Stock found
            if (top_match == null) {
                alert("No matches found for the stock entered");
            }
            // If matching stock found, connect to stock values API to retrieve stock prices
            else {
                connectAPIStocks(top_match, date);
            }
        });         
    });
}

// Initial function of the page. Function to take input values and check them for validity.
//Connect to best match API
function getValues(){
    keyword = document.getElementById("stock").value;
    date = document.getElementById("date1").value;
    if ( keyword == ""){
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
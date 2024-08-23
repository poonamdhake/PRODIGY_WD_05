

let weather =
{
    apiKey : "08c147bfb8462230a893f57d9a1b3455",
    fetchweather : function(city)
    //fetch weather function started
    {
        fetch
        ("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.apiKey)
       /* console.log("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.apiKey);*/
        
        .then
        ((response) =>
        {
            //checkng whether api fetching data or not 
           if(!response.ok)
           {
             alert("No any weather found.");
             throw new Error("No weather found.");
          }
          // promise data from api  converted into json type data
          return response.json();
        }
        )
      // data stored in variable data and called function displaywesther
        .then((data) => this.displayweather(data));
    },

    //fetch weather function completed
      
    //displayweather function started
    displayweather: function (data)
    {
        console.log(data);
        const {name} = data;
        const {icon,description} = data.weather[0];
        const{temp,humidity} =data.main;
        const{speed} = data.wind;
        document.querySelector(".city").innerHTML  = "Weather in"+" " + name;
        document.querySelector(".icon").src =   "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp +"°C";
        document.querySelector(".humidity").innerText = "Humidity: "+humidity +"%";
        document.querySelector(".wind").innerText = "Wind Speed: "+ speed +"km/h";
        document.querySelector(".weather").classList.remove("Loading...");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },

    search: function()
    {
        this.fetchweather(document.querySelector(".search-bar").value);

    },
        
    };
    //document.querySelector(".div-search button").addEventListener("click",function(){
        document.querySelector(".div-search button").addEventListener("click", function(){

        
            weather.search();

    });

    // to use enter key as a serch button


    document.querySelector(".search-bar").addEventListener("keyup",function(event){
        if (event.key=="Enter")
        {
            weather.search();
        }
    });
    weather.fetchweather("Mumbai");

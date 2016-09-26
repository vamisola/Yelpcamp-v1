var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose");
    
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP



var campgrounds = [
            {name: "Salmon Creek", image: "https://tse2.mm.bing.net/th?id=OIP.M9dbbe2631605279b6832302f7d0e2e4dH0&pid=15.1"},
            {name: "Granit Hill", image: "https://tse1.mm.bing.net/th?id=OIP.Md1f83d679995b3f691ab1069c9118f8dH0&pid=15.1"},
            {name: "Mountain Got's Rest", image: "http://cozywinters.com/blog/wp-content/uploads/2015/05/spring-camping-tips.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
        res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req,res){
   //get data from form and add to campground array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   //redirect to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
   res.render("new"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelpcamp server has started...");
});
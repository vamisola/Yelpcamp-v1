var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose");
    
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
    {
        name: "Granite Hill", 
        image: "https://tse1.mm.bing.net/th?id=OIP.Md1f83d679995b3f691ab1069c9118f8dH0&pid=15.1",
        description: "This is a huge Granite Hill, no bathrooms, no water..."
        
    }, function(err, campground){
        if(err){
            console.log(err);
        }else{
            console.log("newly created campground");
            console.log(campground);
        }
    });

var campgrounds = [
            {name: "Salmon Creek", image: "https://tse2.mm.bing.net/th?id=OIP.M9dbbe2631605279b6832302f7d0e2e4dH0&pid=15.1"},
            {name: "Granit Hill", image: "https://tse1.mm.bing.net/th?id=OIP.Md1f83d679995b3f691ab1069c9118f8dH0&pid=15.1"},
            {name: "Mountain Got's Rest", image: "http://cozywinters.com/blog/wp-content/uploads/2015/05/spring-camping-tips.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});
//INDEX ROUTE - show all campgrounds
app.get("/campgrounds", function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
           res.render("campgrounds", {campgrounds: allCampgrounds});
       }
    });
        // res.render("campgrounds", {campgrounds: campgrounds});
});
//CREATE - add new campground to DB
app.post("/campgrounds", function(req,res){
   //get data from form and add to campground array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   //Create a new campground and save to DB
   Campground.create(newCampground, function(err, newlyCreated){
       if(err){
           console.log(err);
       }else{
           //redirect to campgrounds page
            res.redirect("/campgrounds");
       }
   });
   
});
//NEW - Show form to create new campground
app.get("/campgrounds/new", function(req,res){
   res.render("new"); 
});

app.get("/campgrounds:id", function(req,res){
    //find the campground with provided ID
    //render show template with that campground
    res.send("THIS WILL BE THE SHOW PAGE!!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelpcamp server has started...");
});
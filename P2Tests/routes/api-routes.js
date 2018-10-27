// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  
  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Crawl.create({
      crawlName: req.body.crawlName,
      crawlOrder: req.body.crawlOrder.toString(),
    })
      .then(function(dbcrawl) {
        res.json(dbcrawl);
      });
  });
  app.get("/ap/:crawl", function(req, res) {
    
    db.Crawl.findOne({
      where: {
        
        crawlName: req.params.crawl
      }
    }).then(function(crawlInfo) {
      console.log(crawlInfo)
      console.log((crawlInfo.dataValues.crawlOrder))
      var crawlArray = JSON.parse("[" + crawlInfo.dataValues.crawlOrder + "]");
      console.log(crawlArray);
    });
  });

};

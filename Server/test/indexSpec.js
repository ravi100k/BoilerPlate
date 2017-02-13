var should = require("chai").should(),
supertest = require("supertest"),
app = require("../bin/www");
var sinon = require('sinon');

var expect = require('chai').expect;
var model = require('../models/Repositories.js');
var modelStub = sinon.stub(model, 'find');
var url = supertest("http://localhost:8080");

describe("Testing Add Repo", function(err){
  it("Add Movie", function(done){
    url
    .post("/repos/AddRepositories")
    .expect(200)
    .send({
      "repoID":"70770665",
      "Name" :"dell21",
      "Access":"false",
      "Stars":"0",
      "Category":"wipro"
    })
    .end(function(err,res){
      res.text.should.be.equal("Repository Added");
      done();
    });

  });
});

describe("Testing Get FAV Repos", function(err){

  beforeEach(function(){
    modelStub.yields(null, [{'repoID': 70770665, 'Name': 'dell21', 'Access':'false', 'Stars':'0', 'Category':'wipro', 'Description':'Hi'}]);
  });
  it("Get repos", function(done){
    url
    .post("/repos/GetCategoryFavourites")
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
     expect(res.body[0].repoID).to.be.equal(70770665);
      done();
    });

  });
});

describe("Testing GetCategoryOptions", function(err){
  beforeEach(function(){
    modelStub.yields(null, [{'repoID': '70770665', 'Name': 'dell21', 'Access':'false', 'Stars':'0', 'Category':'wipro' ,'Description':'Hi' }]);
  });
  it("GetCategoryOptions", function(done){
    url
    .get("/repos/GetCategoryOptions")
    .expect(200)
    .end(function(err,res){
      should.not.exist(err);
      console.log(res.body);
      expect(res.body[0]).to.be.equal("wipro");
       done();
    });
  });
});

describe("Testing UpdateRepository", function(err){
  it("UpdateRepository", function(done){
    url
    .put("/repos/UpdateRepository")
    .expect(200)
    .send({
      "repoID":"70770665",
      "Category":"wipro",
      "Description":"Bye"
    })
    .end(function(err,res){
      should.not.exist(err);
        res.text.should.be.equal("Repository Updated");
       done();
    });
  });
});

describe("Testing DeleteRepository", function(err){
  it("DeleteRepository", function(done){
    url
    .delete("/repos/DeleteRepository")
    .expect(200)
    .end(function(err,res){
      should.not.exist(err);
       res.text.should.be.equal("Repository Deleted");
       done();
    });
  });
});

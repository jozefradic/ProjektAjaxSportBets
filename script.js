$(document).ready(function() {
  $("#btnShow").click(function(){
    var settings = {
      "url": "https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=uk&mkt=h2h&apiKey=6f663be302df980397b42b52dedfadfa",
      "method": "GET"
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response.data);
      $("#content").empty();
      response.data.forEach(element => {
        console.log(element.sites[0].odds.h2h[0],element.sites[0].odds.h2h[1]);
        $("#content").append("<div><b>"+element.sport_nice+":</b></div><div><em>"+element.teams+" | "+element.sites[0].site_key+" - "+element.sites[0].odds.h2h[0]+" / "+element.sites[0].odds.h2h[1]+" "+element.sites[1].site_key+" - "+element.sites[1].odds.h2h[0]+" / "+element.sites[1].odds.h2h[1]+" "+element.sites[2].site_key+" - "+element.sites[2].odds.h2h[0]+" / "+element.sites[2].odds.h2h[1]+"</em></div>");
      });
    });
      })
      $("#btnNFL").click(function(){
        var settings = {
          "url": "https://api.the-odds-api.com/v3/odds/?sport=americanfootball_nfl&region=uk&mkt=h2h&apiKey=6f663be302df980397b42b52dedfadfa",
          "method": "GET"
        }
        
        $.ajax(settings).done(function (response) {
          console.log(response.data);
          $("#content").empty();
          response.data.forEach(element => {
            console.log(element.sites[0].odds.h2h[0],element.sites[0].odds.h2h[1]);
            $("#content").append("<div><b>"+element.sport_nice+":</b></div><div><em>"+element.teams+" | "+element.sites[0].site_key+" - "+element.sites[0].odds.h2h[0]+" / "+element.sites[0].odds.h2h[1]+" "+element.sites[1].site_key+" - "+element.sites[1].odds.h2h[0]+" / "+element.sites[1].odds.h2h[1]+" "+element.sites[2].site_key+" - "+element.sites[2].odds.h2h[0]+" / "+element.sites[2].odds.h2h[1]+"</em></div>");
          });
        });
          })
          $("#btnNBA").click(function(){
            var settings = {
              "url": "https://api.the-odds-api.com/v3/odds/?sport=basketball_nba&region=uk&mkt=h2h&apiKey=6f663be302df980397b42b52dedfadfa",
              "method": "GET"
            }
            
            $.ajax(settings).done(function (response) {
              console.log(response.data);
              $("#content").empty();
              response.data.forEach(element => {
                console.log(element.sites[0].odds.h2h[0],element.sites[0].odds.h2h[1]);
                $("#content").append("<div><b>"+element.sport_nice+":</b></div><div><em>"+element.teams+" | "+element.sites[0].site_key+" - "+element.sites[0].odds.h2h[0]+" / "+element.sites[0].odds.h2h[1]+"</em></div>");
              });
            });
              })
              $("#btnSoccer").click(function(){
                var settings = {
                  "url": "https://api.the-odds-api.com/v3/odds/?sport=soccer_england_league1&region=uk&mkt=h2h&apiKey=6f663be302df980397b42b52dedfadfa",
                  "method": "GET"
                }
                
                $.ajax(settings).done(function (response) {
                  console.log(response.data);
                  $("#content").empty();
                  response.data.forEach(element => {
                    console.log(element.sites[0].odds.h2h[0],element.sites[0].odds.h2h[1]);
                    $("#content").append("<div><b>"+element.sport_nice+":</b></div><div><em>"+element.teams+" | "+element.sites[0].site_key+" - "+element.sites[0].odds.h2h[0]+" / "+element.sites[0].odds.h2h[1]+" "+element.sites[1].site_key+" - "+element.sites[1].odds.h2h[0]+" / "+element.sites[1].odds.h2h[1]+" "+element.sites[2].site_key+" - "+element.sites[2].odds.h2h[0]+" / "+element.sites[2].odds.h2h[1]+"</em></div>");
                  });
                });
                  })
    });


/* Magic Mirror
 *
 * Module: MMM-Football
 *
 */

Module.register("MMM-Football", {
    //default config
    defaults: {
      rotateInterval: 5 * 60 * 1000,
      updateInterval: 60 * 60 * 1000, //50 calls a day
      league: 63, //get from API website (63 is english championship)
      key: //API key
  },
    getScripts: function() {
        return ["moment.js"];
  },
    
    start: function() {
        Log.info("Starting module: " + this.name);
        
        requiresVersion: "2.1.0",
            //parameters
            this.date = moment(new Date()).format("YYYY-MM-DD"); //start date
            endDate = "3000-12-30"; //endDate
  
            this.url = "https://apifootball.com/api/?action=get_events&from=" + this.date + "&to=" + endDate + "&league_id=" + league + "&APIkey=" + key;
  
    }

//filter for match_live = 1 on todays matches every minute
      

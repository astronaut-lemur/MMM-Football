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
        
        requiresVersion: "2.1.0",
        
        start: function() {
        Log.info("Starting module: " + this.name);
        
            this.date = moment(new Date()).format("YYYY-MM-DD"); //start date
            endDate = "3000-12-30"; //endDate
  
            this.url = "https://apifootball.com/api/?action=get_events&from=" + this.date + "&to=" + endDate + "&league_id=" + league + "&APIkey=" + key;
            this.football = {};
    },
        getScripts: function() {
        return ["moment.js"];
       
        },
        
        	// Override dom generator.
	    getDom: function() {
		    var wrapper = document.createElement("div");
		    wrapper.innerHTML = this.config.text;
		    return wrapper;
            
        },
        getStyles: function() {
	    return [
		    'MMM-Football.css', // will try to load it from the vendor folder, otherwise it will load is from the module folder.
		    'font-awesome.css', // this file is available in the vendor folder, so it doesn't need to be avialable in the module folder.
		    this.file('anotherfile.css'), // this file will be loaded straight from the module folder.
		    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',  // this file will be loaded from the bootstrapcdn servers.
	]
}

//filter for match_live = 1 on todays matches every minute
      

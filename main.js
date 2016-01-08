var DisneyAPI = new (require("wdwjs"))({
    timeFormat: "HH:mm"
});

for (var parkID in DisneyAPI) {
    if (DisneyAPI[parkID].GetWaitTimes) {
        console.log("* DisneyAPI." + parkID + ".[ GetWaitTimes() | GetSchedule() ]");
    }
}


var disneyland = DisneyAPI.Disneyland;

disneyland.GetWaitTimes(function(err, data) {
    if (err) {
        return console.error("Error fetching Disneyland wait times: " + err);
    }

    console.log(JSON.stringify(data, null, 2));
});

disneyland.GetSchedule(function(err, data) {
    if (err) {
        return console.error("Error fetching Disneyland schedule: " + err);
    }

    console.log(JSON.stringify(data, null, 2));
});

var lastfmData = {
    baseURL:
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
    user: "am3thystx",
    // FYI this is not my API key. I stole it from somewhere else lol.
    api_key: "c1797de6bf0b7e401b623118120cd9e1",
    additional: "&format=json&limit=1"
};

var getSetLastFM = function() {
$.ajax({
    type: "GET",
    url:
    lastfmData.baseURL +
    lastfmData.user +
    "&api_key=" +
    lastfmData.api_key +
    lastfmData.additional,
    dataType: "json",
    success: function(resp) {
        var recentTrack = resp.recenttracks.track[0];

        var timeFormatted = "";
        $("span#trackdate")
            .html(timeFormatted);

        var headerFormatted = "Listening now";
        $("span#listeningHeader")
            .html(headerFormatted);

        var titleFormatted = recentTrack.name;
        $("span#tracktitle")
            .html(titleFormatted)
            .attr("title", "Title: " + recentTrack.name);

        var artistFormatted = recentTrack.artist["#text"];
        $("span#trackartist")
            .html(artistFormatted)
            .attr("title", "Artist: " + recentTrack.artist["#text"]);

        var albumFormatted = recentTrack.album["#text"];
        $("span#trackalbum")
            .html(albumFormatted)
            .attr("title", "Album: " + recentTrack.album["#text"]);

        $("img#trackart")
            .attr("src", recentTrack.image[3]["#text"])
            .attr("title", "Album: " + recentTrack.album["#text"])

        $("a#tracklink")
            .attr("target", "_blank")
            .attr("href", recentTrack.url);
        
        var dateFormatted = recentTrack.date["uts"];
        // If code reaches here, assume recentTrack.date is available, thus nothing is playing.

        var headerFormatted = "Played";
        
        $("span#listeningHeader")
            .html(headerFormatted);

        var currentDate = Math.floor(new Date().getTime() / 1000);
        var timeDiff = currentDate - dateFormatted;

        if (timeDiff <= 3600) {
            var timeFormatted = Math.floor(timeDiff / 60);
            if (timeFormatted == 1)
                timeFormatted += " minute ago";
            else
                timeFormatted += " minutes ago";
        } else if (timeDiff <= 86400) {
            var timeFormatted = Math.floor(timeDiff / 3600);
            if (timeFormatted == 1)
                timeFormatted += " hour ago";
            else
                timeFormatted += " hours ago";
        } else {
            var timeFormatted = Math.floor(timeDiff / 86400);
            if (timeFormatted == 1)
                timeFormatted += " day ago";
            else
                timeFormatted += " days ago";
            // ==================================================================================
            // IF USING THIS CODE, IGNORE EVERYTHING FROM HERE UNTIL LABELED END
            // ==================================================================================
            if (timeDiff > 1209600) {
                if (timeDiff <= 2592000) {
                    var timeInactive = Math.floor(timeDiff / 604800)
                    if (timeInactive == 1)
                        timeInactive += " week ago";
                    else
                        timeInactive += " weeks ago";
                } else if (timeDiff <= 31556926) {
                    var timeInactive = Math.floor(timeDiff / 2592000)
                    if (timeInactive == 1)
                        timeInactive += " month ago";
                    else
                        timeInactive += " months ago";
                } else {
                    var timeInactive = Math.floor(timeDiff / 31556926)
                    if (timeInactive == 1)
                        timeInactive += " year ago";
                    else
                        timeInactive += " years ago";
                }
                $("span#inactiveDuration")
                    .html(timeInactive);
                $("div#inactiveNotice")
                    .show();
            }
            // ==================================================================================
            // END OF IGNORED SECTION
            // ==================================================================================
        }
        $("span#trackdate")
            .html(timeFormatted);
    },
    error: function(resp) {
        $("span#tracktitle").html("No Title");
        $("span#listeningHeader").html("<span class='warning'>API error</span>");
        $("span#trackartist").html("No Artist");
        $("span#trackalbum").html("No Album");
        $("img#trackart").attr("src", "/images/amethystcrystalPix.png");
    }
    });
};

// Get the new one.
getSetLastFM();
// Start the countdown.
setInterval(getSetLastFM, 10 * 1000);
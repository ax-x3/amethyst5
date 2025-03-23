var lastfmData = {
    baseURL:
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
    // Your Last.fm Username
    user: "am3thystx",
    // Your API key
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

        var headerFormatted = "Now Playing:";
        $("h2#listeningHeader")
            .html(headerFormatted);

        var titleFormatted = recentTrack.name;
        $("span#tracktitle")
            .html(titleFormatted)
            .attr("title", recentTrack.name + " by " + recentTrack.artist["#text"]);

        var artistFormatted = recentTrack.artist["#text"];
        $("span#trackartist")
            .html(artistFormatted)
            .attr("title", "Artist : " + recentTrack.artist["#text"]);

        $("img#trackart")
            .attr("src", recentTrack.image[3]["#text"])
            .attr("title", "Album : " + recentTrack.album["#text"]);

        $("a#tracklink")
            .attr("target", "_blank")
            .attr("href", recentTrack.url);

        var dateFormatted = recentTrack.date["uts"];
        // If code reaches here, assume recentTrack.date is available, thus nothing is playing.

        var headerFormatted = "Last Played:";
        $("h2#listeningHeader")
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
        }
        $("span#trackdate")
            .html(timeFormatted);
    },
    error: function(resp) {
        $("span#trackartist").html("<span class='warning'>Oops!</span>");
        $("span#tracktitle").html("<span class='warning'>API call return error.</span>");
        $("img#trackart").attr("src", "/amethystcrystalPix.png");
    }
    });
};

// Get the new one.
getSetLastFM();
// Start the countdown.
setInterval(getSetLastFM, 10 * 1000);
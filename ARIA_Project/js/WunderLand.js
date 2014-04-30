$(document).ready(function () {


    var rssFeed = (function () {

        $('#divRss').FeedEk({
            FeedUrl: 'http://www.rte.ie/news/rss/news-headlines.xml',
            MaxCount: 3,
            ShowDesc: true,
            ShowPubDate: false,
            DescCharacterLimit: 100
        });
    }

    )();

    var WeatherData = (function () {

        jQuery(document).ready(function ($) {
            $.ajax({
                url: "http://api.wunderground.com/api/8d547829f6978fcf/geolookup/conditions/q/IE/DUBLIN.json", dataType: "jsonp", success: function (parsed_json) {
                    var wunderdata = parsed_json['location']
                    strLocation = parsed_json['location']['city'];
                    temp_c = parsed_json['current_observation']['temp_c'];
                    temp_f = parsed_json['current_observation']['temp_f'];
                    img_toDisplay = parsed_json['current_observation']['icon_url']
                    $("#resultID").text(temp_c);   //display the Temperature
                    $("#tempValue").text(temp_c);   //display the Temperature
                    $('#imgresultID').attr('src', img_toDisplay);        // change the weather Icon
					$('#imgresultID2').attr('src', img_toDisplay);
                }
            });
        });

    })();
});
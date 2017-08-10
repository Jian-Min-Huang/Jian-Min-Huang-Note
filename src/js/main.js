var notes = [];
notes.push({path: "../content/Note/Coding_Note.txt", text: "Coding Note"});
notes.push({path: "../content/Note/Git_Settings.txt", text: "Git Settings"});
notes.push({path: "../content/Note/MAC_Install.txt", text: "MAC Install"});
notes.push({path: "../content/Note/MAC_Settings.txt", text: "MAC Settings"});
notes.push({path: "../content/Note/Oracle.txt", text: "Oracle"});

$(function () {
    $("#search-input").keyup(function () {
        var keyword = $("#search-input").val().toLowerCase();

        if (keyword === "") {
            $(".item").each(function (index, element) {
                $(element).show();
            });
        } else {
            $(".item").each(function (index, element) {
                if ($(element).find("a").text().toLowerCase().indexOf(keyword) != -1) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });
        }
    });

    var html = "";
    notes.forEach(function (element) {
        html += "<div class=\"item\"><a href=\"" + element.path + "\">" + element.text + "</a></div>";
    });

    $("#main_t").append(html);
});
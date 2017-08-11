var notes = [];
notes.push({title: "coding", href: "../content/Note/Coding_Note.txt", text: "Coding Note"});
notes.push({title: "git", href: "../content/Note/Git_Settings.txt", text: "Git Settings"});
notes.push({title: "mac", href: "../content/Note/MAC_Install.txt", text: "MAC Install"});
notes.push({title: "mac", href: "../content/Note/MAC_Settings.txt", text: "MAC Settings"});
notes.push({title: "oracle", href: "../content/Note/Oracle.txt", text: "Oracle"});

$(function () {
    $("#search-input").keyup(function () {
        var keyword = $("#search-input").val().trim().toLowerCase();

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
    // $(".quick-tag").onclick(function () {
    //
    // });

    var html = "";
    notes.forEach(function (element) {
        html += "<div class=\"item\" title=\"" + element.title + "\"><a href=\"" + element.href + "\">" + element.text + "</a></div>";
    });

    $("#main_t").append(html);
});
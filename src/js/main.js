var notes = [];
notes.push({href: "../content/Notes/Coding_Note.txt", text: "Coding Note"});
notes.push({href: "../content/Notes/Git_Settings.txt", text: "Git Settings"});
notes.push({href: "../content/Notes/Intellij_IDEA_Hot_Keys.txt", text: "Intellij IDEA Hot Keys"});
notes.push({href: "../content/Notes/Intellij_IDEA_Settings.txt", text: "Intellij IDEA Settings"});
notes.push({href: "../content/Notes/MAC_Install.txt", text: "MAC Install"});
notes.push({href: "../content/Notes/MAC_Settings.txt", text: "MAC Settings"});
notes.push({href: "../content/Notes/Oracle.txt", text: "Oracle"});
notes.push({href: "../content/Notes/Unix_Like_Terminal_Settings.txt", text: "Unix Like Terminal Settings"});
notes.push({href: "../content/Notes/vim.txt", text: "vim"});

$(function () {
    var filterFunc = function() {
        var keyword = $(this).val().trim().toLowerCase();

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
    };

    $("#search-input").keyup(filterFunc);

    $(".quick-tag").click(filterFunc);

    $("#quick-tag-clear").click(function () {
        $(".item").each(function (index, element) {
            $(element).show();
        });
    });

    var pathname = window.location.pathname;
    var path = pathname.substring(pathname.indexOf("build/") + 6, pathname.indexOf(".html"));

    var contents = eval(eval("path"));

    var html = "";
    contents.forEach(function (element) {
        html += "<div class=\"item\"><a href=\"" + element.href + "\">" + element.text + "</a></div>";
    });

    $("#main").append(html);
});
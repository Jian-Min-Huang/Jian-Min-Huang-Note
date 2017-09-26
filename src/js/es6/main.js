let index = [];

let tutorials_official = [
    {type: "iframe", href: "https://docs.oracle.com/javase/tutorial/index.html", text: "The Java&trade; Tutorials"},
    {type: "iframe", href: "https://docs.oracle.com/en/database/", text: "ORACLE Help Center"},
    {type: "iframe", href: "https://git-scm.com/docs", text: "git Documentation"},
    {type: "iframe", href: "https://nodejs.org/en/docs/", text: "Doc | Node.js"}
];

let tutorials_3rd_party = [
    {type: "iframe", href: "https://www.w3schools.com", text: "W3Schools"},
    {type: "iframe", href: "https://openhome.cc/Gossip/index.html", text: "良葛格學習筆記"},
    {type: "iframe", href: "http://tutorials.jenkov.com/", text: "Jenkov.com"},
    {type: "iframe", href: "http://www.mkyong.com/", text: "Mkyong.com"},
    {type: "iframe", href: "http://www.journaldev.com/", text: "JournalDev.com"},
    {type: "iframe", href: "http://www.javaworld.com/", text: "JavaWorld.com"},
    {type: "iframe", href: "https://www.tutorialspoint.com/index.htm", text: "tutorialspoint.com"},
    {type: "iframe", href: "https://www.petrikainulainen.net", text: "Petri Kainulainen"},
    {type: "iframe", href: "http://www.coreservlets.com", text: "coreservlets.com"},
    {type: "iframe", href: "http://www.java2s.com", text: "java2s"},
    {type: "iframe", href: "http://www.studytrails.com", text: "StudyTrails"},
    {type: "iframe", href: "https://www.javatpoint.com", text: "JavaTpoint"},
    {type: "iframe", href: "http://www.codedata.com.tw", text: "CodeData"},
    {type: "iframe", href: "https://ihower.tw/blog/", text: "ihower {blogging}"},
    {type: "iframe", href: "http://highscalability.squarespace.com/", text: "High Scalability"},
    {type: "iframe", href: "https://blog.jason.party/", text: "Jason Puzzle 中勝拼圖"},
    {type: "iframe", href: "https://blog.gtwang.org", text: "G. T. Wang"}
];

let tutorials_ithome = [
    {type: "iframe", href: "https://docs.oracle.com/javase/tutorial/index.html", text: "The Java&trade; Tutorials"},
    {type: "iframe", href: "https://docs.oracle.com/en/database/", text: "ORACLE Help Center"}
];

let helpers = [
    {type: "iframe", href: "https://www.codecademy.com", text: "Codecademy"},
    {type: "iframe", href: "https://www.codeschool.com", text: "Code School"},
    {type: "iframe", href: "http://regexr.com", text: "RegExr"},
    {type: "iframe", href: "https://jsbin.com/", text: "JS BIN"},
    {type: "iframe", href: "https://jsfiddle.net", text: "JSFiddle"},
    {type: "iframe", href: "http://sqlfiddle.com", text: "SQL Fiddle"},
    {type: "iframe", href: "http://bootstrap.hexschool.com", text: "Bootstrap Document"},
    {type: "iframe", href: "https://swagger.io/", text: "Swagger"},
    {type: "iframe", href: "https://bootsnipp.com", text: "Bootsnipp"},
    {type: "iframe", href: "http://shields.io/", text: "Quality metadata badges for open source projects"},
    {type: "iframe", href: "https://developer.mozilla.org/", text: "MDN web docs"},
    {type: "iframe", href: "https://start.spring.io", text: "SPRING INITIALIZR"},
    {type: "iframe", href: "https://www.wolframalpha.com/", text: "WolframaAlpha"},
    {type: "iframe", href: "https://www.webpagefx.com/tools/emoji-cheat-sheet/", text: "EMOJI CHEAT SHEET"},
    {type: "iframe", href: "https://github.com/explore", text: "Explore GitHub"}
];

let solutions_tools_frontend = [
    {type: "iframe", href: "https://jwt.io", text: "JWT"},
    {type: "iframe", href: "https://jquery.com", text: "jQuery"},
    {type: "iframe", href: "https://jqueryui.com", text: "jQuery UI"},
    {type: "iframe", href: "https://facebook.github.io/react/", text: "React"},
    {type: "iframe", href: "https://angularjs.org", text: "ANGULARJS"},
    {type: "iframe", href: "https://vuejs.org", text: "Vue.js"},
    {type: "iframe", href: "http://sass-lang.com", text: "Sass"},
    {type: "iframe", href: "http://compass-style.org", text: "compass"},
    {type: "iframe", href: "http://lesshat.madebysource.com", text: "LESS"},
    {type: "iframe", href: "http://stylus-lang.com", text: "stylus"},
    {type: "iframe", href: "https://www.typescriptlang.org", text: "TypeScript"},
    {type: "iframe", href: "http://coffeescript.org", text: "CoffeeScript"},
    {type: "iframe", href: "https://jsx.github.io", text: "JSX"},
    {type: "iframe", href: "https://babeljs.io", text: "BABEL"},
    {type: "iframe", href: "http://getbootstrap.com/", text: "Bootstrap"},
    {type: "iframe", href: "https://purecss.io", text: "PURE"},
    {type: "iframe", href: "http://materializecss.com", text: "Materialize"},
    {type: "iframe", href: "http://fontawesome.io", text: "Font Awesome"},
    {type: "iframe", href: "https://www.highcharts.com/demo", text: "Highcharts"},
    {type: "iframe", href: "https://d3js.org", text: "D3"},
    {type: "iframe", href: "http://www.daterangepicker.com", text: "Data Range Picker"},
    {type: "iframe", href: "http://requirejs.org", text: "RequireJS"},
    {type: "iframe", href: "http://browserify.org", text: "Browserify"},
    {type: "iframe", href: "https://webpack.js.org", text: "webpack"},
    {type: "iframe", href: "https://gruntjs.com", text: "Grunt"},
    {type: "iframe", href: "http://gulpjs.com", text: "Gulp"},
    {type: "iframe", href: "https://bower.io", text: "Bower"},
    {type: "iframe", href: "https://www.npmjs.com", text: "npm"},
    {type: "iframe", href: "https://yarnpkg.com/en/", text: "yarn"},
    {type: "iframe", href: "http://jshint.com", text: "JSHint"},
    {type: "iframe", href: "http://www.jslint.com", text: "JSLint"},
    {type: "iframe", href: "http://eslint.org", text: "ESLint"},
    {type: "iframe", href: "https://github.com/mzabriskie/axios", text: "axios"},
    {type: "iframe", href: "https://momentjs.com", text: "MOMENT"},
    {type: "iframe", href: "http://yeoman.io", text: "YEOMAN"}
];

let solutions_tools_backend = [
    {type: "iframe", href: "http://hc.apache.org/index.html", text: "Apache HttpComponents"},
    {type: "iframe", href: "http://freemarker.org", text: "FreeMaker"},
    {type: "iframe", href: "http://www.thymeleaf.org", text: "Thymeleaf"},
    {type: "iframe", href: "http://wiki.sitemesh.org/wiki/display/sitemesh/Home", text: "SiteMesh"},
    {type: "iframe", href: "http://wiki.fasterxml.com/JacksonHome", text: "Jackson"},
    {type: "iframe", href: "https://jersey.github.io", text: "Jersey"},
    {type: "iframe", href: "http://cxf.apache.org", text: "Aapache CXF"},
    {type: "iframe", href: "http://www.dropwizard.io/1.1.2/docs/", text: "Dropwizard"},
    {type: "iframe", href: "https://mina.apache.org/", text: "MINA"},
    {type: "iframe", href: "https://netty.io/", text: "Netty"},
    {type: "iframe", href: "http://activemq.apache.org/", text: "ActiveMQ"},
    {type: "iframe", href: "https://www.rabbitmq.com/", text: "RabbitMQ"},
    {type: "iframe", href: "http://hibernate.org", text: "Hibernate"},
    {type: "iframe", href: "http://www.jdbi.org", text: "JDBI"},
    {type: "iframe", href: "http://www.liquibase.org/index.html", text: "Liquibase"},
    {type: "iframe", href: "https://tomcat.apache.org/", text: "Tomcat"},
    {type: "iframe", href: "http://www.eclipse.org/jetty/", text: "Jetty"},
    {type: "iframe", href: "http://www.jboss.org/", text: "JBoss"},
    {type: "iframe", href: "http://logging.apache.org/log4j/1.2/", text: "LOG4J"},
    {type: "iframe", href: "https://logging.apache.org/log4j/2.x/", text: "LOG4J2"},
    {type: "iframe", href: "https://www.slf4j.org", text: "SLF4J"},
    {type: "iframe", href: "https://logback.qos.ch", text: "LOGBACK"},
    {type: "iframe", href: "http://metrics.dropwizard.io/3.2.3/", text: "Metrics"},
    {type: "iframe", href: "http://www.joda.org", text: "Joda"},
    {type: "iframe", href: "https://github.com/google/guava/wiki", text: "Guava"},
    {type: "iframe", href: "https://projectlombok.org", text: "Lombok"},
    {type: "iframe", href: "http://commons.apache.org", text: "Apache Commons"},
    {type: "iframe", href: "http://ant.apache.org/", text: "Ant"},
    {type: "iframe", href: "https://maven.apache.org/", text: "Maven"},
    {type: "iframe", href: "https://gradle.org/", text: "Gradle"},
    {type: "iframe", href: "http://akka.io/", text: "akka"},
    {type: "iframe", href: "http://www.scala-sbt.org/", text: "sbt"},
    {type: "iframe", href: "https://kafka.apache.org/", text: "kafka"},
    {type: "iframe", href: "https://spark.apache.org/", text: "Spark"},
    {type: "iframe", href: "http://storm.apache.org/", text: "STORM"},
    {type: "iframe", href: "https://rocketmq.apache.org/", text: "RocketMQ"},
    {type: "iframe", href: "http://koajs.com/", text: "koa"},
    {type: "iframe", href: "http://www.ehcache.org/", text: "EHCACHE"},
    {type: "iframe", href: "http://www.quartz-scheduler.org/", text: "QUARTZ"},
    {type: "iframe", href: "http://mapstruct.org/", text: "MapStruct"},
    {type: "iframe", href: "https://www.drools.org/", text: "Drools"},
    {type: "iframe", href: "https://www.lightbend.com/", text: "Lightbend"},
    {type: "iframe", href: "http://slick.lightbend.com/", text: "Slick"},
    {type: "iframe", href: "https://www.playframework.com/", text: "play"},
    {type: "iframe", href: "http://www.scalatest.org/", text: "ScalaTest"},
    {type: "iframe", href: "https://spring.io/", text: "spring"},
    {type: "iframe", href: "http://junit.org/", text: "JUnit"},
    {type: "iframe", href: "https://www.getpostman.com/", text: "POSTMAN"},
    {type: "iframe", href: "http://jmeter.apache.org/", text: "JMeter"},
    {type: "iframe", href: "http://jamonapi.sourceforge.net/", text: "JAMon"},
    {type: "iframe", href: "http://springfox.github.io/springfox/", text: "Spring Fox"},
    {type: "iframe", href: "https://nodejs.org/en/", text: "Node.js"}
];

let solutions_tools_system = [
    {type: "iframe", href: "https://nginx.org/", text: "NGINX"},
    {type: "iframe", href: "https://httpd.apache.org/", text: "Apache HTTP"},
    {type: "iframe", href: "https://redis.io/", text: "redis"},
    {type: "iframe", href: "https://ignite.apache.org/", text: "Ignite"},
    {type: "iframe", href: "https://www.mysql.com/", text: "MySQL"},
    {type: "iframe", href: "https://www.oracle.com/database/index.html", text: "ORACLE"},
    {type: "iframe", href: "https://www.postgresql.org/", text: "PostgreSQL"},
    {type: "iframe", href: "http://cassandra.apache.org/", text: "CASSANDRA"},
    {type: "iframe", href: "https://www.rethinkdb.com/", text: "RethinkDB"},
    {type: "iframe", href: "http://www.h2database.com/html/main.html", text: "H2"},
    {type: "iframe", href: "http://hsqldb.org/", text: "HyperSQL"},
    {type: "iframe", href: "https://www.sqlite.org/", text: "SQLite"},
    {type: "iframe", href: "https://jenkins.io/", text: "Jenkins"},
    {type: "iframe", href: "https://travis-ci.org/", text: "Travis CI"},
    {type: "iframe", href: "https://www.docker.com/", text: "docker"},
    {type: "iframe", href: "https://kitematic.com", text: "KITEMATIC"},
    {type: "iframe", href: "https://kubernetes.io/", text: "kubernetes"}
];

let solutions_tools_service = [
    {type: "iframe", href: "https://aws.amazon.com/", text: "amazon web services"},
    {type: "iframe", href: "https://cloud.google.com/", text: "Google Cloud Platform"},
    {type: "iframe", href: "https://www.heroku.com", text: "HEROKU"},
    {type: "iframe", href: "https://www.godaddy.com", text: "GoDaddy"}
];

let index_tags = [];
let tutorials_official_tags = ["oracle"];
let tutorials_3rd_party_tags = [];
let tutorials_ithome_tags = [];
let helpers_tags = [];
let solutions_tools_frontend_tags = [];
let solutions_tools_backend_tags = [];
let solutions_tools_system_tags = [];
let solutions_tools_service_tags = [];

$(function () {
    let filterFunc = function () {
        let keyword = $(this).val().trim().toLowerCase();

        if (keyword === "") {
            $(".item").each(function (index, element) {
                $(element).show();
            });
        } else {
            $(".item").each(function (index, element) {
                if ($(element).text().toLowerCase().indexOf(keyword) !== -1) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });
        }
    };

    let pathname = window.location.pathname;
    let path = pathname.substring(pathname.indexOf("build/") + 6, pathname.indexOf(".html"));

    let tagContents = eval(eval("path") + "_tags");
    let contents = eval(eval("path"));

    let tagsHtml = "";
    tagContents.forEach(function (element) {
        tagsHtml += "<button type=\"button\" class=\"btn btn-link btn-tag tag\" value=\"" + element + "\">#" + element + "</button>";
    });
    tagsHtml += "<button type=\"button\" class=\"btn btn-link btn-tag\" id=\"tag-clear\" value=\"clear\">clear</button>";
    $("#tags").append(tagsHtml);

    let mainHtml = "";
    for (let i = 0; i < contents.length; i++) {
        mainHtml += "<button id=\"" + path + ":" + i + "\" class=\"item btn-link\">" + contents[i].text + "</button>";
    }

    $("#main").append(mainHtml);

    $("#search-input").keyup(filterFunc);

    $(".tag").click(filterFunc);

    $("#tag-clear").click(function () {
        $(".item").each(function (index, element) {
            $(element).show();
        });
    });

    $(".item").click(function () {
        let idNameIdx = $(this).attr("id");
        let name = idNameIdx.split(":")[0];
        let idx = idNameIdx.split(":")[1];

        let arrayName = eval(name);

        let converter = new showdown.Converter();

        if (arrayName[idx].type === "md") {
            $.ajax({
                url: arrayName[idx].href,
                type: "GET",
                success: function (data) {
                    let content = $("#md-content");
                    content.empty();
                    $("#iframe-content").empty();
                    content.append(converter.makeHtml(data));
                }
            });
        } else if (arrayName[idx].type === "iframe") {
            window.open(arrayName[idx].href);
        } else {
            console.log("match error !");
        }
    });
});
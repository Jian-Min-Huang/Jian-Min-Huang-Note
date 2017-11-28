let index = [];

let tutorials_official = [
    {type: "tab", href: "https://docs.oracle.com/javase/tutorial/index.html", text: "The Java&trade; Tutorials"},
    {type: "tab", href: "https://docs.oracle.com/en/database/", text: "ORACLE Help Center"},
    {type: "tab", href: "https://git-scm.com/docs", text: "git Documentation"},
    {type: "tab", href: "https://nodejs.org/en/docs/", text: "Doc | Node.js"}
];

let tutorials_3rd_party = [
    {type: "tab", href: "https://www.w3schools.com", text: "W3Schools"},
    {type: "tab", href: "https://openhome.cc/Gossip/index.html", text: "良葛格學習筆記"},
    {type: "tab", href: "http://tutorials.jenkov.com/", text: "Jenkov.com"},
    {type: "tab", href: "http://www.mkyong.com/", text: "Mkyong.com"},
    {type: "tab", href: "http://www.journaldev.com/", text: "JournalDev.com"},
    {type: "tab", href: "http://www.javaworld.com/", text: "JavaWorld.com"},
    {type: "tab", href: "https://www.tutorialspoint.com/index.htm", text: "tutorialspoint.com"},
    {type: "tab", href: "https://www.petrikainulainen.net", text: "Petri Kainulainen"},
    {type: "tab", href: "http://www.coreservlets.com", text: "coreservlets.com"},
    {type: "tab", href: "http://www.java2s.com", text: "java2s"},
    {type: "tab", href: "http://www.studytrails.com", text: "StudyTrails"},
    {type: "tab", href: "https://www.javatpoint.com", text: "JavaTpoint"},
    {type: "tab", href: "http://www.codedata.com.tw", text: "CodeData"},
    {type: "tab", href: "https://ihower.tw/blog/", text: "ihower {blogging}"},
    {type: "tab", href: "http://highscalability.squarespace.com/", text: "High Scalability"},
    {type: "tab", href: "https://blog.jason.party/", text: "Jason Puzzle 中勝拼圖"},
    {type: "tab", href: "https://blog.gtwang.org", text: "G. T. Wang"},
    {type: "tab", href: "https://backlogtool.com/git-tutorial/tw/contents/", text: "連猴子都能懂的Git入門指南"},
    {type: "tab", href: "https://blog.miniasp.com/", text: "The Will Will Web"}
];

let tutorials_ithome = [
    {type: "tab", href: "https://docs.oracle.com/javase/tutorial/index.html", text: "The Java&trade; Tutorials"},
    {type: "tab", href: "https://docs.oracle.com/en/database/", text: "ORACLE Help Center"}
];

let helpers = [
    {type: "tab", href: "https://www.codecademy.com", text: "Codecademy"},
    {type: "tab", href: "https://www.codeschool.com", text: "Code School"},
    {type: "tab", href: "http://regexr.com", text: "RegExr"},
    {type: "tab", href: "https://jsbin.com/", text: "JS BIN"},
    {type: "tab", href: "https://jsfiddle.net", text: "JSFiddle"},
    {type: "tab", href: "http://sqlfiddle.com", text: "SQL Fiddle"},
    {type: "tab", href: "http://bootstrap.hexschool.com", text: "Bootstrap Document"},
    {type: "tab", href: "https://swagger.io/", text: "Swagger"},
    {type: "tab", href: "https://bootsnipp.com", text: "Bootsnipp"},
    {type: "tab", href: "http://shields.io/", text: "Quality metadata badges for open source projects"},
    {type: "tab", href: "https://developer.mozilla.org/", text: "MDN web docs"},
    {type: "tab", href: "https://start.spring.io", text: "SPRING INITIALIZR"},
    {type: "tab", href: "https://www.wolframalpha.com/", text: "WolframaAlpha"},
    {type: "tab", href: "https://www.webpagefx.com/tools/emoji-cheat-sheet/", text: "EMOJI CHEAT SHEET"},
    {type: "tab", href: "https://github.com/explore", text: "Explore GitHub"}
];

let solutions_tools_frontend = [
    {type: "tab", href: "https://jwt.io", text: "JWT"},
    {type: "tab", href: "http://sass-lang.com", text: "Sass"},
    {type: "tab", href: "http://compass-style.org", text: "compass"},
    {type: "tab", href: "http://lesshat.madebysource.com", text: "LESS"},
    {type: "tab", href: "http://stylus-lang.com", text: "stylus"},
    {type: "tab", href: "http://getbootstrap.com/", text: "Bootstrap"},
    {type: "tab", href: "https://foundation.zurb.com", text: "Foundation"},
    {type: "tab", href: "https://html5boilerplate.com", text: "HTTP BOILERPLATE"},
    {type: "tab", href: "https://purecss.io", text: "PURE"},
    {type: "tab", href: "http://materializecss.com", text: "Materialize"},
    {type: "tab", href: "http://fontawesome.io", text: "Font Awesome"},
    {type: "tab", href: "http://yeoman.io", text: "YEOMAN"}
];

let solutions_tools_backend = [
    {type: "tab", href: "http://hc.apache.org/index.html", text: "Apache HttpComponents"},
    {type: "tab", href: "http://freemarker.org", text: "FreeMaker"},
    {type: "tab", href: "http://www.thymeleaf.org", text: "Thymeleaf"},
    {type: "tab", href: "http://wiki.sitemesh.org/wiki/display/sitemesh/Home", text: "SiteMesh"},
    {type: "tab", href: "http://wiki.fasterxml.com/JacksonHome", text: "Jackson"},
    {type: "tab", href: "https://jersey.github.io", text: "Jersey"},
    {type: "tab", href: "http://cxf.apache.org", text: "Aapache CXF"},
    {type: "tab", href: "http://www.dropwizard.io/1.1.2/docs/", text: "Dropwizard"},
    {type: "tab", href: "https://mina.apache.org/", text: "MINA"},
    {type: "tab", href: "https://netty.io/", text: "Netty"},
    {type: "tab", href: "http://activemq.apache.org/", text: "ActiveMQ"},
    {type: "tab", href: "https://www.rabbitmq.com/", text: "RabbitMQ"},
    {type: "tab", href: "http://hibernate.org", text: "Hibernate"},
    {type: "tab", href: "http://www.jdbi.org", text: "JDBI"},
    {type: "tab", href: "http://www.liquibase.org/index.html", text: "Liquibase"},
    {type: "tab", href: "https://tomcat.apache.org/", text: "Tomcat"},
    {type: "tab", href: "http://www.eclipse.org/jetty/", text: "Jetty"},
    {type: "tab", href: "http://www.jboss.org/", text: "JBoss"},
    {type: "tab", href: "http://logging.apache.org/log4j/1.2/", text: "LOG4J"},
    {type: "tab", href: "https://logging.apache.org/log4j/2.x/", text: "LOG4J2"},
    {type: "tab", href: "https://www.slf4j.org", text: "SLF4J"},
    {type: "tab", href: "https://logback.qos.ch", text: "LOGBACK"},
    {type: "tab", href: "http://metrics.dropwizard.io/3.2.3/", text: "Metrics"},
    {type: "tab", href: "http://www.joda.org", text: "Joda"},
    {type: "tab", href: "https://github.com/google/guava/wiki", text: "Guava"},
    {type: "tab", href: "https://projectlombok.org", text: "Lombok"},
    {type: "tab", href: "http://commons.apache.org", text: "Apache Commons"},
    {type: "tab", href: "http://ant.apache.org/", text: "Ant"},
    {type: "tab", href: "https://maven.apache.org/", text: "Maven"},
    {type: "tab", href: "https://gradle.org/", text: "Gradle"},
    {type: "tab", href: "http://akka.io/", text: "akka"},
    {type: "tab", href: "http://www.scala-sbt.org/", text: "sbt"},
    {type: "tab", href: "https://kafka.apache.org/", text: "kafka"},
    {type: "tab", href: "https://spark.apache.org/", text: "Spark"},
    {type: "tab", href: "http://storm.apache.org/", text: "STORM"},
    {type: "tab", href: "https://rocketmq.apache.org/", text: "RocketMQ"},
    {type: "tab", href: "http://koajs.com/", text: "koa"},
    {type: "tab", href: "http://www.ehcache.org/", text: "EHCACHE"},
    {type: "tab", href: "http://www.quartz-scheduler.org/", text: "QUARTZ"},
    {type: "tab", href: "http://mapstruct.org/", text: "MapStruct"},
    {type: "tab", href: "https://www.drools.org/", text: "Drools"},
    {type: "tab", href: "https://www.lightbend.com/", text: "Lightbend"},
    {type: "tab", href: "http://slick.lightbend.com/", text: "Slick"},
    {type: "tab", href: "https://www.playframework.com/", text: "play"},
    {type: "tab", href: "http://www.scalatest.org/", text: "ScalaTest"},
    {type: "tab", href: "https://spring.io/", text: "spring"},
    {type: "tab", href: "http://junit.org/", text: "JUnit"},
    {type: "tab", href: "https://www.getpostman.com/", text: "POSTMAN"},
    {type: "tab", href: "http://jmeter.apache.org/", text: "JMeter"},
    {type: "tab", href: "http://jamonapi.sourceforge.net/", text: "JAMon"},
    {type: "tab", href: "http://springfox.github.io/springfox/", text: "Spring Fox"},
    {type: "tab", href: "https://coreos.com/etcd/", text: "etcd"},
    {type: "tab", href: "http://vertx.io/", text: "VERT.X"}
];

let solutions_tools_javascript = [
    {type: "tab", href: "https://jquery.com", text: "jQuery"},
    {type: "tab", href: "https://jqueryui.com", text: "jQuery UI"},
    {type: "tab", href: "https://facebook.github.io/react/", text: "React"},
    {type: "tab", href: "https://angularjs.org", text: "ANGULARJS"},
    {type: "tab", href: "https://vuejs.org", text: "Vue.js"},
    {type: "tab", href: "https://www.typescriptlang.org", text: "TypeScript"},
    {type: "tab", href: "http://coffeescript.org", text: "CoffeeScript"},
    {type: "tab", href: "https://jsx.github.io", text: "JSX"},
    {type: "tab", href: "https://babeljs.io", text: "BABEL"},
    {type: "tab", href: "https://www.highcharts.com/demo", text: "Highcharts"},
    {type: "tab", href: "https://d3js.org", text: "D3"},
    {type: "tab", href: "http://www.daterangepicker.com", text: "Data Range Picker"},
    {type: "tab", href: "http://requirejs.org", text: "RequireJS"},
    {type: "tab", href: "http://browserify.org", text: "Browserify"},
    {type: "tab", href: "https://webpack.js.org", text: "webpack"},
    {type: "tab", href: "https://gruntjs.com", text: "Grunt"},
    {type: "tab", href: "http://gulpjs.com", text: "Gulp"},
    {type: "tab", href: "https://bower.io", text: "Bower"},
    {type: "tab", href: "https://www.npmjs.com", text: "npm"},
    {type: "tab", href: "https://yarnpkg.com/en/", text: "yarn"},
    {type: "tab", href: "http://jshint.com", text: "JSHint"},
    {type: "tab", href: "http://www.jslint.com", text: "JSLint"},
    {type: "tab", href: "http://eslint.org", text: "ESLint"},
    {type: "tab", href: "https://github.com/mzabriskie/axios", text: "axios"},
    {type: "tab", href: "https://momentjs.com", text: "MOMENT"},
    {type: "tab", href: "http://www.embeddedjs.com/", text: "EJS"},
    {type: "tab", href: "http://jade-lang.com/", text: "Jade"},
    {type: "tab", href: "http://mathjs.org/index.html", text: "mathjs"},
    {type: "tab", href: "http://www.chartjs.org/", text: "Chart.js"},
    {type: "tab", href: "https://nodejs.org/en/", text: "Node.js"}
];

let solutions_tools_system = [
    {type: "tab", href: "https://nginx.org/", text: "NGINX"},
    {type: "tab", href: "https://httpd.apache.org/", text: "Apache HTTP"},
    {type: "tab", href: "https://redis.io/", text: "redis"},
    {type: "tab", href: "https://ignite.apache.org/", text: "Ignite"},
    {type: "tab", href: "https://www.mysql.com/", text: "MySQL"},
    {type: "tab", href: "https://www.oracle.com/database/index.html", text: "ORACLE"},
    {type: "tab", href: "https://www.postgresql.org/", text: "PostgreSQL"},
    {type: "tab", href: "http://cassandra.apache.org/", text: "CASSANDRA"},
    {type: "tab", href: "https://www.rethinkdb.com/", text: "RethinkDB"},
    {type: "tab", href: "http://www.h2database.com/html/main.html", text: "H2"},
    {type: "tab", href: "http://hsqldb.org/", text: "HyperSQL"},
    {type: "tab", href: "https://www.sqlite.org/", text: "SQLite"},
    {type: "tab", href: "https://jenkins.io/", text: "Jenkins"},
    {type: "tab", href: "https://travis-ci.org/", text: "Travis CI"},
    {type: "tab", href: "https://www.docker.com/", text: "docker"},
    {type: "tab", href: "https://kitematic.com", text: "KITEMATIC"},
    {type: "tab", href: "https://kubernetes.io/", text: "kubernetes"},
    {type: "tab", href: "https://zookeeper.apache.org/", text: "ZooKeeper"},
    {type: "tab", href: "https://pivotal.io/pivotal-gemfire", text: "Gemfire"},
    {type: "tab", href: "https://hazelcast.com/", text: "hazelcast"},
    {type: "tab", href: "http://www.elastic.co/products/elasticsearch", text: "Elasticsearch"},
    {type: "tab", href: "http://lucene.apache.org/solr/", text: "Solr"},
    {type: "tab", href: "https://lucene.apache.org/core/", text: "Lucene"}

];

let solutions_tools_service = [
    {type: "tab", href: "https://aws.amazon.com/", text: "amazon web services"},
    {type: "tab", href: "https://cloud.google.com/", text: "Google Cloud Platform"},
    {type: "tab", href: "https://www.heroku.com", text: "HEROKU"},
    {type: "tab", href: "https://www.godaddy.com", text: "GoDaddy"},
    {type: "tab", href: "https://varnish-cache.org/", text: "Varnish"},
    {type: "tab", href: "http://www.squid-cache.org/", text: "squid"}
];

let index_tags = [];
let tutorials_official_tags = ["oracle"];
let tutorials_3rd_party_tags = [];
let tutorials_ithome_tags = [];
let helpers_tags = [];
let solutions_tools_frontend_tags = [];
let solutions_tools_backend_tags = [];
let solutions_tools_javascript_tags = [];
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
                    $("#md-content").empty();
                    $("#iframe-content").empty();

                    $("#md-content").append(converter.makeHtml(data));
                }
            });
        } else if (arrayName[idx].type === "iframe") {
            let iframeHtml = "<iframe src=\"" + arrayName[idx].href + "\" width=\"100%\" height=\"800px\" frameborder=\"0\"></iframe>";

            $("#md-content").empty();
            $("#iframe-content").empty();
            $("#iframe-content").append(iframeHtml);
        } else if (arrayName[idx].type === "tab") {
            window.open(arrayName[idx].href);
        } else {
            console.log("match error !");
        }
    });
});
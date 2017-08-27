var index = [];

var notes = [
    {href: "../content/notes/Coding Note.txt", text: "Coding Note"},
    {href: "../content/notes/Git Settings.txt", text: "Git Settings"},
    {href: "../content/notes/Intellij IDEA Hot Keys.txt", text: "Intellij IDEA Hot Keys"},
    {href: "../content/notes/Intellij IDEA Settings.txt", text: "Intellij IDEA Settings"},
    {href: "../content/notes/MAC Install.txt", text: "MAC Install"},
    {href: "../content/notes/MAC Settings.txt", text: "MAC Settings"},
    {href: "../content/notes/Oracle.txt", text: "Oracle"},
    {href: "../content/notes/Unix Like Terminal Settings.txt", text: "Unix Like Terminal Settings"},
    {href: "../content/notes/bash.txt", text: "bash"},
    {href: "../content/notes/issues & concepts.txt", text: "Issues & Concepts"},
    {href: "../content/notes/Note Why.txt", text: "Note Why"},
    {href: "../content/notes/vim.txt", text: "vim"}
];

var tutorials_official = [
    {href: "https://docs.oracle.com/javase/tutorial/index.html", text: "The Java&trade; Tutorials"},
    {href: "https://docs.oracle.com/en/database/", text: "ORACLE Help Center"}
];

var tutorials_3rd_party = [
    {href: "https://www.w3schools.com", text: "W3Schools"},
    {href: "https://openhome.cc/Gossip/index.html", text: "良葛格學習筆記"},
    {href: "http://tutorials.jenkov.com/", text: "Jenkov.com"},
    {href: "http://www.mkyong.com/", text: "Mkyong.com"},
    {href: "http://www.journaldev.com/", text: "JournalDev.com"},
    {href: "http://www.javaworld.com/", text: "JavaWorld.com"},
    {href: "https://www.tutorialspoint.com/index.htm", text: "tutorialspoint.com"},
    {href: "https://www.petrikainulainen.net", text: "Petri Kainulainen"},
    {href: "http://www.coreservlets.com", text: "coreservlets.com"},
    {href: "http://www.java2s.com", text: "java2s"},
    {href: "http://www.studytrails.com", text: "StudyTrails"},
    {href: "https://www.javatpoint.com", text: "JavaTpoint"},
    {href: "http://www.codedata.com.tw", text: "CodeData"},
    {href: "https://ihower.tw/blog/", text: "ihower {blogging}"},
    {href: "http://highscalability.squarespace.com/", text: "High Scalability"},
    {href: "https://blog.jason.party/", text: "Jason Puzzle 中勝拼圖"},
    {href: "https://blog.gtwang.org", text: "G. T. Wang"}
];

var helpers = [
    {href: "https://www.codecademy.com", text: "Codecademy"},
    {href: "https://www.codeschool.com", text: "Code School"},
    {href: "http://regexr.com", text: "RegExr"},
    {href: "https://jsbin.com/", text: "JS BIN"},
    {href: "https://jsfiddle.net", text: "JSFiddle"},
    {href: "http://sqlfiddle.com", text: "SQL Fiddle"},
    {href: "http://bootstrap.hexschool.com", text: "Bootstrap Document"},
    {href: "https://swagger.io/", text: "Swagger"},
    {href: "https://bootsnipp.com", text: "Bootsnipp"},
    {href: "http://shields.io/", text: "Quality metadata badges for open source projects"},
    {href: "https://developer.mozilla.org/", text: "MDN web docs"},
    {href: "https://start.spring.io", text: "SPRING INITIALIZR"}
];

var frameworks_frontend = [
    {href: "https://jquery.com", text: "jQuery"},
    {href: "https://jqueryui.com", text: "jQuery UI"},
    {href: "https://facebook.github.io/react/", text: "React"},
    {href: "https://angularjs.org", text: "ANGULARJS"},
    {href: "https://vuejs.org", text: "Vue.js"},
    {href: "http://sass-lang.com", text: "Sass"},
    {href: "http://compass-style.org", text: "compass"},
    {href: "http://lesshat.madebysource.com", text: "LESS"},
    {href: "http://stylus-lang.com", text: "stylus"},
    {href: "https://www.typescriptlang.org", text: "TypeScript"},
    {href: "http://coffeescript.org", text: "CoffeeScript"},
    {href: "https://jsx.github.io", text: "JSX"},
    {href: "https://babeljs.io", text: "BABEL"},
    {href: "http://getbootstrap.com/", text: "Bootstrap"},
    {href: "https://purecss.io", text: "PURE"},
    {href: "http://materializecss.com", text: "Materialize"},
    {href: "http://fontawesome.io", text: "Font Awesome"},
    {href: "https://www.highcharts.com/demo", text: "Highcharts"},
    {href: "https://d3js.org", text: "D3"},
    {href: "http://requirejs.org", text: "RequireJS"},
    {href: "http://browserify.org", text: "Browserify"},
    {href: "https://webpack.js.org", text: "webpack"},
    {href: "https://gruntjs.com", text: "Grunt"},
    {href: "http://gulpjs.com", text: "Gulp"},
    {href: "https://bower.io", text: "Bower"},
    {href: "https://www.npmjs.com", text: "npm"},
    {href: "https://yarnpkg.com/en/", text: "yarn"},
    {href: "http://jshint.com", text: "JSHint"},
    {href: "http://www.jslint.com", text: "JSLint"},
    {href: "http://eslint.org", text: "ESLint"},
    {href: "http://yeoman.io", text: "YEOMAN"}
];

var frameworks_backend = [
    {href: "http://hc.apache.org/index.html", text: "Apache HttpComponents"},
    {href: "http://freemarker.org", text: "FreeMaker"},
    {href: "http://www.thymeleaf.org", text: "Thymeleaf"},
    {href: "http://wiki.sitemesh.org/wiki/display/sitemesh/Home", text: "SiteMesh"},
    {href: "http://wiki.fasterxml.com/JacksonHome", text: "Jackson"},
    {href: "https://jersey.github.io", text: "Jersey"},
    {href: "http://cxf.apache.org", text: "Aapache CXF"},
    {href: "http://www.dropwizard.io/1.1.2/docs/", text: "Dropwizard"},
    {href: "https://mina.apache.org/", text: "MINA"},
    {href: "https://netty.io/", text: "Netty"},
    {href: "http://activemq.apache.org/", text: "ActiveMQ"},
    {href: "https://www.rabbitmq.com/", text: "RabbitMQ"},
    {href: "http://hibernate.org", text: "Hibernate"},
    {href: "http://www.jdbi.org", text: "JDBI"},
    {href: "http://www.liquibase.org/index.html", text: "Liquibase"},
    {href: "https://tomcat.apache.org/", text: "Tomcat"},
    {href: "http://www.eclipse.org/jetty/", text: "Jetty"},
    {href: "http://www.jboss.org/", text: "JBoss"},
    {href: "http://logging.apache.org/log4j/1.2/", text: "LOG4J"},
    {href: "https://logging.apache.org/log4j/2.x/", text: "LOG4J2"},
    {href: "https://www.slf4j.org", text: "SLF4J"},
    {href: "https://logback.qos.ch", text: "LOGBACK"},
    {href: "http://metrics.dropwizard.io/3.2.3/", text: "Metrics"},
    {href: "http://www.joda.org", text: "Joda"},
    {href: "https://github.com/google/guava/wiki", text: "Guava"},
    {href: "https://projectlombok.org", text: "Lombok"},
    {href: "http://commons.apache.org", text: "Apache Commons"},
    {href: "http://ant.apache.org/", text: "Ant"},
    {href: "https://maven.apache.org/", text: "Maven"},
    {href: "https://gradle.org/", text: "Gradle"},
    {href: "http://akka.io/", text: "akka"},
    {href: "http://www.scala-sbt.org/", text: "sbt"},
    {href: "https://kafka.apache.org/", text: "kafka"},
    {href: "https://spark.apache.org/", text: "Spark"},
    {href: "http://storm.apache.org/", text: "STORM"},
    {href: "https://rocketmq.apache.org/", text: "RocketMQ"},
    {href: "http://springfox.github.io/springfox/", text: "Spring Fox"}
    // spring
    // quartz
    // ehcache
    // slick
    // junit
    // scalatest
    // jmeter
    // jamon
    // spray
    // play
    // mapstruct
    // drools
    // scalajs
];

var frameworks_system = [
    {href: "https://nginx.org/", text: "NGINX"},
    {href: "https://httpd.apache.org/", text: "Apache HTTP"},
    {href: "https://redis.io/", text: "redis"},
    {href: "https://ignite.apache.org/", text: "Ignite"},
    {href: "https://www.mysql.com/", text: "MySQL"},
    {href: "https://www.oracle.com/database/index.html", text: "ORACLE"},
    {href: "https://www.postgresql.org/", text: "PostgreSQL"},
    {href: "http://cassandra.apache.org/", text: "CASSANDRA"},
    {href: "https://www.rethinkdb.com/", text: "RethinkDB"},
    {href: "http://www.h2database.com/html/main.html", text: "H2"},
    {href: "http://hsqldb.org/", text: "HyperSQL"},
    {href: "https://www.sqlite.org/", text: "SQLite"},
    {href: "https://jenkins.io/", text: "Jenkins"},
    {href: "https://travis-ci.org/", text: "Travis CI"},
    {href: "https://www.docker.com/", text: "docker"},
    {href: "https://kubernetes.io/", text: "kubernetes"}
];

// var services = [
// aws
// gce
// heroku
// godaddy
// {href: "", text: ""}
// ];

var common_auth = [
    {href: "../content/common/auth/解決問題的第一步_ Authentication vs. Authorization.htm", text: "解決問題的第一步_ Authentication vs. Authorization"}
];

var common_design_pattern = [
    {href: "../content/common/design pattern/Software design pattern - Wikipedia.htm", text: "Software design pattern - Wikipedia"}
];

var common_http = [
    {href: "../content/common/http/Load balancing (computing) - Wikipedia.htm", text: "Load balancing (computing) - Wikipedia"},
    {href: "../content/common/http/HTTP persistent connection - Wikipedia.htm", text: "HTTP persistent connection - Wikipedia"},
    {href: "../content/common/http/request - Http client timeout and server timeout - Stack Overflow.htm", text: "request - Http client timeout and server timeout - Stack Overflow"},
    {href: "../content/common/http/HTTP Redirect 301, 302 區別及對SEO的影響 @ 符碼記憶.htm", text: "HTTP Redirect 301, 302 區別及對SEO的影響 @ 符碼記憶"},
    {href: "../content/common/http/HTTP 的認證模式 @ 藍色情懷   痞客邦 PIXNET.htm", text: "HTTP 的認證模式 @ 藍色情懷   痞客邦 PIXNET"},
    {href: "../content/common/http/Seednet教室 = = HTTP運作原理介紹(一) = =.htm", text: "Seednet教室 = = HTTP運作原理介紹(一) = ="},
    {href: "../content/common/http/Rewrite engine - Wikipedia.htm", text: "Rewrite engine - Wikipedia"},
    {href: "../content/common/http/Transport Layer Security - Wikipedia.htm", text: "Transport Layer Security - Wikipedia"},
    {href: "../content/common/http/程式設計 - 簡明RESTful API設計要點 - Twincl.htm", text: "程式設計 - 簡明RESTful API設計要點 - Twincl"},
    {href: "../content/common/http/HTTP Verbs  談 POST, PUT 和 PATCH 的應用 _ ihower { blogging }.htm", text: "HTTP Verbs  談 POST, PUT 和 PATCH 的應用 _ ihower { blogging }"},
    {href: "../content/common/http/SQL injection - Wikipedia.htm", text: "SQL injection - Wikipedia"},
    {href: "../content/common/http/Cross-site scripting - Wikipedia.htm", text: "Cross-site scripting - Wikipedia"},
    {href: "../content/common/http/Cross-site request forgery - Wikipedia.htm", text: "Cross-site request forgery - Wikipedia"}
];

var common_regular_expression = [
    {href: "../content/common/regular expression/正規表示式 Regular Expression _ 就是愛程式.htm", text: "正規表示式 Regular Expression _ 就是愛程式"}
];

var common_thread = [
    {href: "../content/common/thread/Program _ Process _ Thread 的差別 @ Frank's 資訊科技潮流站   痞客邦 PIXNET.htm", text: "Program _ Process _ Thread 的差別 @ Frank's 資訊科技潮流站   痞客邦 PIXNET"},
    {href: "../content/common/thread/Operating System Study Guide - Chapter 5 Deadlock.htm", text: "Operating System Study Guide - Chapter 5 Deadlock"},
    {href: "../content/common/thread/Dining philosophers problem - Wikipedia.htm", text: "Dining philosophers problem - Wikipedia"},
    {href: "../content/common/thread/Thread (computing) - Wikipedia.htm", text: "Thread (computing) - Wikipedia"}
];

var javascript = [
    {href: "../content/javascript/【javascript】了解函式(function)很重要的筆記 « 和平，奮鬥，救WEB.htm", text: "【javascript】了解函式(function)很重要的筆記 « 和平，奮鬥，救WEB"},
    {
        href: "../content/javascript/javascript - how to disable buttons based on a condition in jsp_ - Stack Overflow.htm",
        text: "javascript - how to disable buttons based on a condition in jsp_ - Stack Overflow"
    }
];

var java_common = [
    {href: "../content/Java/Common/虛有其表的介面.htm", text: "虛有其表的介面"},
    {href: "../content/Java/Common/Call by value？.htm", text: "Call by value？"},
    {href: "../content/Java/Common/Excelsior  [Java] 淺談 call by value 和 call by reference.htm", text: "Excelsior  [Java] 淺談 call by value 和 call by reference"},
    {
        href: "../content/Java/Servlet/使用 Tomcat 7 與 Java Servlet 3.0 API 實作 Asynchronous Servlets：提升伺服器效率的方案 - G. T. Wang.htm",
        text: "使用 Tomcat 7 與 Java Servlet 3.0 API 實作 Asynchronous Servlets：提升伺服器效率的方案 - G. T. Wang"
    },
    {href: "../content/Java/Servlet/Asynchronous processing support in Servlet 3.0 _ JavaWorld.htm", text: "Asynchronous processing support in Servlet 3.0 _ JavaWorld"},
    {
        href: "../content/Java/Servlet/java - What is the difference between thread per connection vs thread per request  - Stack Overflow.htm",
        text: "java - What is the difference between thread per connection vs thread per request  - Stack Overflow"
    },
    {href: "../content/Java/Servlet/Servlet Life Cycle.jpg", text: "Servlet Life Cycle"},
    {href: "../content/Java/Servlet/Servlet Filter.png", text: "Servlet Filter"},
    {
        href: "../content/Java/Servlet/servlets - Difference between JSP forward and redirect - Stack Overflow.htm",
        text: "servlets - Difference between JSP forward and redirect - Stack Overflow"
    },
    {href: "../content/Java/Servlet/[JSP] Servlet的幾種頁面跳轉方式 @ 資訊園   痞客邦 PIXNET.htm", text: "[JSP] Servlet的幾種頁面跳轉方式 @ 資訊園   痞客邦 PIXNET"},
    {href: "../content/Java/Concurrent/ThreadPoolExecutor.htm", text: "ThreadPoolExecutor"},
    {href: "../content/Java/Concurrent/Executors.htm", text: "Executors"},
    {href: "../content/Java/Concurrent/ForkJoinPool · Java多執行緒的基本知識.htm", text: "ForkJoinPool · Java多執行緒的基本知識"},
    {href: "../content/Java/Concurrent/Thread Life Cycle.jpg", text: "Thread Life Cycle"},
    {href: "../content/Java/Concurrent/我是010_ volatile(揮發性) 在Java裡的概念與使用時機.htm", text: "我是010_ volatile(揮發性) 在Java裡的概念與使用時機"},
    {href: "../content/Java/JMeter/Apache JMeter™   負載測試與效能測量的好工具 « Cloudの丘.htm", text: "Apache JMeter™   負載測試與效能測量的好工具 « Cloudの丘"},
    {href: "../content/Java/JVM/【心得】打造極致伺服器 @Minecraft 我的世界（當個創世神） 哈啦板 - 巴哈姆特.htm", text: "【心得】打造極致伺服器 @Minecraft 我的世界（當個創世神） 哈啦板 - 巴哈姆特"},
    {href: "../content/Java/Maven/Maven &amp; Spring.pptx", text: "Maven &amp; Spring"},
    {href: "../content/Java/Spring/Spring bean scopes example.htm", text: "Spring bean scopes example"},
    {href: "../content/Java/Spring/Spring Bean Scopes.htm", text: "Spring Bean Scopes"},
    {href: "../content/Java/Spring/Spring Beans Auto-Wiring.htm", text: "Spring Beans Auto-Wiring"},
    {href: "../content/Java/Spring/Spring Java Based Configuration", text: "Spring Java Based Configuration"},
    {href: "../content/Java/Spring/Spring Bean Life Cycle.htm", text: "Spring Bean Life Cycle"},
    {href: "../content/Java/Spring/Spring Bean Definition.htm", text: "Spring Bean Definition"},
    {href: "../content/Java/Spring/Spring Annotation Based Configuration.htm", text: "Spring Annotation Based Configuration"},
    {href: "../content/Java/Spring/Spring @Required Annotation.htm", text: "Spring @Required Annotation"},
    {href: "../content/Java/Spring/Maven &amp; Spring.pptx", text: "Maven &amp; Spring.pptx"},
    {href: "../content/Java/Spring/java - @Resource vs @Autowired - Stack Overflow.htm", text: "java - @Resource vs @Autowired - Stack Overflow"},
    {href: "../content/Java/Spring/Inversion of Control.png", text: "Inversion of Control"},
    {href: "../content/Java/Spring/Aop Concept.png", text: "Aop Concept"},
    {href: "../content/Java/Spring/第一個 Spring MVC 程式.htm", text: "第一個 Spring MVC 程式 (多個Bean定義檔來源設定)"}
];

var scala = [
    {href: "../content/scala/Scala vs Kotlin – Agilewombat.htm", text: "Scala vs Kotlin – Agilewombat"},
    {href: "../content/scala/Actor Lifecycle.png", text: "Actor Lifecycle"},
    {href: "../content/scala/Actor Dispatcher.png", text: "Actor Dispatcher"}
];

var database_common = [
    {href: "../content/database/common/第一正規化 - 維基百科，自由的百科全書.htm", text: "第一正規化 - 維基百科，自由的百科"},
    {href: "../content/database/common/第二正規化 - 維基百科，自由的百科全書.htm", text: "第二正規化 - 維基百科，自由的百科"},
    {href: "../content/database/common/第三正規化 - 維基百科，自由的百科全書.htm", text: "第三正規化 - 維基百科，自由的百科"},
    {href: "../content/database/common/Primary、Unique、Index各代表什麼意義_ _ MySQL Taiwan.htm", text: "Primary、Unique、Index各代表什麼意義_ _ MySQL Taiwan"},
    {href: "../content/database/common/RDBMS Normal Form.pdf", text: "RDBMS Normal Form"}
];

var database_oracle = [
    {href: "../content/database/oracle/Start with connect by prior 階層式查詢用法 _ Jeff 隨手記 - 點部落.htm", text: "Start with connect by prior 階層式查詢用法 _ Jeff 隨手記 - 點部落"},
    {href: "../content/database/oracle/Oracle與日期有關的常用函數 @ 狐的窩 __ 痞客邦 PIXNET __.htm", text: "Oracle與日期有關的常用函數 @ 狐的窩 __ 痞客邦 PIXNET __"}
];

var database_redis = [
    {href: "../content/database/redis/資料庫的好夥伴：Redis _ TechBridge 技術共筆部落格.htm", text: "Redis 簡介及應用"}
];

var database_sql = [
    {href: "../content/database/sql/[SQL] 5 types of SQL JOIN _ Programming blog.htm", text: "[SQL] 5 types of SQL JOIN _ Programming blog"},
    {href: "../content/database/sql/[SQL] WHERE 1=1 做什麼用的  _ CHF's note - 點部落.htm", text: "[SQL] WHERE 1=1 做什麼用的  _ CHF's note - 點部落"},
    {href: "../content/database/sql/sql - Full Outer Join in MySQL - Stack Overflow.htm", text: "sql - Full Outer Join in MySQL - Stack Overflow"},
    {href: "../content/database/sql/sql - Retrieving the last record in each group - Stack Overflow.htm", text: "sql - Retrieving the last record in each group - Stack Overflow"},
    {href: "../content/database/sql/SQL 找出欄位值重覆的記錄及刪除重複記錄.htm", text: "SQL 找出欄位值重覆的記錄及刪除重複記錄"}
];

var devops_ci_cd = [
    {href: "../content/devops/ci & cd/Re  [請益] 這些軟體工程的方法在台灣的普及度  - 看板 Soft_Job - 批踢踢實業坊.htm", text: "Re  [請益] 這些軟體工程的方法在台灣的普及度  - 看板 Soft_Job - 批踢踢實業坊"},
    {href: "../content/devops/ci & cd/持續整合 (Continuous Integration) 簡介與應用.docx", text: "持續整合 (Continuous Integration) 簡介與應用"}
];

var devops_docker = [
    {href: "../content/devops/docker/docker-note-book.pdf", text: "Docker Notebook"}
];

var devops_version_control = [
    {href: "../content/devops/version control/版本控管(Version Control)概念 以國票證券SVN版控為例.pptx", text: "版本控管(Version Control)概念 以國票證券SVN版控為例"},
    {href: "../content/devops/version control/淺談Subversion(SVN) Hook Script及其應用.docx", text: "淺談Subversion(SVN) Hook Script及其應用"}
];

var tools = [
    {href: "https://brew.sh/index_zh-tw.html", text: "Homebrew"},
    {href: "../content/tools/dev-notes.pdf", text: "dev-notes nginx"},
    {href: "../content/tools/The Will Will Web _ Sublime Text 3 新手上路：必要的安裝、設定與基本使用教學.htm", text: "The Will Will Web _ Sublime Text 3 新手上路：必要的安裝、設定與基本使用教學"},
    {href: "../content/tools/HTML-CSS-JS Prettify - Packages - Package Control.htm", text: "HTML-CSS-JS Prettify - Packages - Package Control"},
    {href: "../content/tools/Travis CI build status badge on GitHub « Pymaster.htm", text: "Travis CI build status badge on GitHub « Pymaster"},
    {href: "../content/tools/Bit Twiddling Hacks.htm", text: "Bit Twiddling Hacks"},
    {href: "../content/tools/Intellij IDEA – Auto reload a web application (hot deploy).htm", text: "Intellij IDEA – Auto reload a web application (hot deploy)"},
    {href: "../content/tools/啃蘋果日記_ [心得] Better Touch Tool 搭配 Safari_Chrome_Firefox_IE.htm", text: "啃蘋果日記_ [心得] Better Touch Tool 搭配 Safari_Chrome_Firefox_IE.htm"}
];

var index_tags = [];
var notes_tags = ["coding", "mac"];
var tutorials_official_tags = [];
var tutorials_3rd_party_tags = [];
var helpers_tags = [];
var frameworks_frontend_tags = [];
var frameworks_backend_tags = [];
var frameworks_system_tags = [];
var services_tags = [];
var common_auth_tags = [];
var common_design_pattern_tags = [];
var common_http_tags = [];
var common_regular_expression_tags = [];
var common_thread_tags = [];
var javascript_tags = [];
var java_common_tags = [];
var scala_tags = [];
var database_common_tags = [];
var database_oracle_tags = [];
var database_redis_tags = [];
var database_sql_tags = [];
var devops_ci_cd_tags = [];
var devops_docker_tags = [];
var devops_version_control_tags = [];
var tools_tags = [];

$(function () {
    var filterFunc = function () {
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

    var pathname = window.location.pathname;
    var path = pathname.substring(pathname.indexOf("build/") + 6, pathname.indexOf(".html"));

    var tagContents = eval(eval("path") + "_tags");
    var contents = eval(eval("path"));

    var tagsHtml = "";
    tagContents.forEach(function (element) {
        tagsHtml += "<button type=\"button\" class=\"btn btn-link btn-tag tag\" value=\"" + element + "\">#" + element + "</button>";
    });
    tagsHtml += "<button type=\"button\" class=\"btn btn-link btn-tag\" id=\"tag-clear\" value=\"clear\">clear</button>";
    $("#tags").append(tagsHtml);

    var mainHtml = "";
    for (var i = 0; i < contents.length; i++) {
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
        var idNameIdx = $(this).attr("id");
        var name = idNameIdx.split(":")[0];
        var idx = idNameIdx.split(":")[1];

        var arrayName = eval(eval("name"));

        var converter = new showdown.Converter();

        $.ajax({
            url: arrayName[idx],
            method: "GET",
            success: function (data) {
                $("#md-content").empty();
                $("#md-content").append(converter.makeHtml(data));
            }
        });
    });
});
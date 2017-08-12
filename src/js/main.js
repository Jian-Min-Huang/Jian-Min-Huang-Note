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
var notes_tags = ["coding", "mac"];

var tutorials_official = [];
tutorials_official.push({href: "https://docs.oracle.com/javase/tutorial/index.html", text: "The Java&trade; Tutorials"});
var tutorials_official_tags = [];

var tutorials_3rd_party = [];
tutorials_3rd_party.push({href: "https://www.w3schools.com", text: "W3Schools"});
tutorials_3rd_party.push({href: "https://openhome.cc/Gossip/index.html", text: "良葛格學習筆記"});
tutorials_3rd_party.push({href: "http://tutorials.jenkov.com/", text: "Jenkov.com"});
tutorials_3rd_party.push({href: "http://www.mkyong.com/", text: "Mkyong.com"});
tutorials_3rd_party.push({href: "http://www.journaldev.com/", text: "JournalDev.com"});
tutorials_3rd_party.push({href: "http://www.javaworld.com/", text: "JavaWorld.com"});
tutorials_3rd_party.push({href: "https://www.tutorialspoint.com/index.htm", text: "tutorialspoint.com"});
tutorials_3rd_party.push({href: "https://www.petrikainulainen.net", text: "Petri Kainulainen"});
tutorials_3rd_party.push({href: "http://www.coreservlets.com", text: "coreservlets.com"});
tutorials_3rd_party.push({href: "http://www.java2s.com", text: "java2s"});
tutorials_3rd_party.push({href: "www.studytrails.com", text: "StudyTrails"});
tutorials_3rd_party.push({href: "https://www.javatpoint.com", text: "JavaTpoint"});
tutorials_3rd_party.push({href: "http://www.codedata.com.tw", text: "CodeData"});
tutorials_3rd_party.push({href: "https://ihower.tw/blog/", text: "ihower {blogging}"});
tutorials_3rd_party.push({href: "http://highscalability.squarespace.com/", text: "High Scalability"});
tutorials_3rd_party.push({href: "https://blog.jason.party/", text: "Jason Puzzle 中勝拼圖"});
tutorials_3rd_party.push({href: "https://blog.gtwang.org", text: "G. T. Wang"});
var tutorials_3rd_party_tags = [];

var helpers = [];
helpers.push({href: "https://www.codecademy.com", text: "Codecademy"});
helpers.push({href: "https://www.codeschool.com", text: "Code School"});
helpers.push({href: "http://regexr.com", text: "RegExr"});
helpers.push({href: "https://jsbin.com/", text: "JS BIN"});
helpers.push({href: "https://jsfiddle.net", text: "JSFiddle"});
helpers.push({href: "http://sqlfiddle.com", text: "SQL Fiddle"});
var helpers_tags = [];

var frameworks_backend = [];
frameworks_backend.push({href: "https://facebook.github.io/react/", text: "React"});
frameworks_backend.push({href: "https://angularjs.org", text: "ANGULARJS"});
frameworks_backend.push({href: "https://vuejs.org", text: "Vue.js"});
frameworks_backend.push({href: "http://sass-lang.com", text: "Sass"});
frameworks_backend.push({href: "http://compass-style.org", text: "compass"});
frameworks_backend.push({href: "http://lesshat.madebysource.com", text: "LESS"});
frameworks_backend.push({href: "http://stylus-lang.com", text: "stylus"});
frameworks_backend.push({href: "https://www.typescriptlang.org", text: "TypeScript"});
frameworks_backend.push({href: "http://coffeescript.org", text: "CoffeeScript"});
frameworks_backend.push({href: "https://jsx.github.io", text: "JSX"});
frameworks_backend.push({href: "https://babeljs.io", text: "BABEL"});
frameworks_backend.push({href: "http://getbootstrap.com/", text: "Bootstrap"});
frameworks_backend.push({href: "http://materializecss.com", text: "Materialize"});
frameworks_backend.push({href: "http://fontawesome.io", text: "Font Awesome"});
frameworks_backend.push({href: "https://www.highcharts.com/demo", text: "Highcharts"});
frameworks_backend.push({href: "https://d3js.org", text: "D3"});
frameworks_backend.push({href: "http://requirejs.org", text: "RequireJS"});
frameworks_backend.push({href: "http://browserify.org", text: "Browserify"});
frameworks_backend.push({href: "https://webpack.js.org", text: "webpack"});
frameworks_backend.push({href: "https://gruntjs.com", text: "Grunt"});
frameworks_backend.push({href: "http://gulpjs.com", text: "Gulp"});
frameworks_backend.push({href: "https://bower.io", text: "Bower"});
frameworks_backend.push({href: "https://www.npmjs.com", text: "npm"});
frameworks_backend.push({href: "https://yarnpkg.com/en/", text: "yarn"});
frameworks_backend.push({href: "http://jshint.com", text: "JSHint"});
frameworks_backend.push({href: "http://www.jslint.com", text: "JSLint"});
frameworks_backend.push({href: "http://eslint.org", text: "ESLint"});
frameworks_backend.push({href: "http://yeoman.io", text: "YEOMAN"});
var frameworks_backend_tags = [];

var frameworks_frontend = [];
frameworks_frontend.push({href: "http://hc.apache.org/index.html", text: "Apache HttpComponents"});
frameworks_frontend.push({href: "http://freemarker.org", text: "FreeMaker"});
frameworks_frontend.push({href: "http://www.thymeleaf.org", text: "Thymeleaf"});
frameworks_frontend.push({href: "http://wiki.sitemesh.org/wiki/display/sitemesh/Home", text: "SiteMesh"});
frameworks_frontend.push({href: "http://wiki.fasterxml.com/JacksonHome", text: "Jackson"});
frameworks_frontend.push({href: "https://jersey.github.io", text: "Jersey"});
frameworks_frontend.push({href: "http://cxf.apache.org", text: "Aapache CXF"});
frameworks_frontend.push({href: "http://www.dropwizard.io/1.1.2/docs/", text: "Dropwizard"});
frameworks_frontend.push({href: "https://mina.apache.org/", text: "MINA"});
frameworks_frontend.push({href: "https://netty.io/", text: "Netty"});
frameworks_frontend.push({href: "http://activemq.apache.org/", text: "ActiveMQ"});
frameworks_frontend.push({href: "https://www.rabbitmq.com/", text: "RabbitMQ"});
frameworks_frontend.push({href: "http://hibernate.org", text: "Hibernate"});
frameworks_frontend.push({href: "http://www.jdbi.org", text: "JDBI"});
frameworks_frontend.push({href: "http://www.liquibase.org/index.html", text: "Liquibase"});
frameworks_frontend.push({href: "https://tomcat.apache.org/", text: "Tomcat"});
frameworks_frontend.push({href: "http://www.eclipse.org/jetty/", text: "Jetty"});
frameworks_frontend.push({href: "http://www.jboss.org/", text: "JBoss"});
frameworks_frontend.push({href: "http://logging.apache.org/log4j/1.2/", text: "LOG4J"});
frameworks_frontend.push({href: "https://logging.apache.org/log4j/2.x/", text: "LOG4J2"});
frameworks_frontend.push({href: "https://www.slf4j.org", text: "SLF4J"});
frameworks_frontend.push({href: "https://logback.qos.ch", text: "LOGBACK"});
frameworks_frontend.push({href: "http://metrics.dropwizard.io/3.2.3/", text: "Metrics"});
frameworks_frontend.push({href: "http://www.joda.org", text: "Joda"});
frameworks_frontend.push({href: "https://github.com/google/guava/wiki", text: "Guava"});
frameworks_frontend.push({href: "https://projectlombok.org", text: "Lombok"});
frameworks_frontend.push({href: "http://commons.apache.org", text: "Apache Commons"});
frameworks_frontend.push({href: "http://ant.apache.org/", text: "Ant"});
frameworks_frontend.push({href: "https://maven.apache.org/", text: "Maven"});
frameworks_frontend.push({href: "https://gradle.org/", text: "Gradle"});
frameworks_frontend.push({href: "http://akka.io/", text: "akka"});
frameworks_frontend.push({href: "http://www.scala-sbt.org/", text: "sbt"});
var frameworks_frontend_tags = [];

var common_thread = [];
common_thread.push({href:"../content/Common/Program _ Process _ Thread 的差別 @ Frank's 資訊科技潮流站   痞客邦 PIXNET.htm", text: "Program _ Process _ Thread 的差別 @ Frank's 資訊科技潮流站   痞客邦 PIXNET"});
common_thread.push({href:"../content/Common/Operating System Study Guide - Chapter 5 Deadlock.htm", text: "Operating System Study Guide - Chapter 5 Deadlock"});
common_thread.push({href:"../content/Common/Dining philosophers problem - Wikipedia.htm", text: "Dining philosophers problem - Wikipedia"});
common_thread.push({href:"../content/Common/Thread (computing) - Wikipedia.htm", text: "Thread (computing) - Wikipedia"});
var common_thread_tags = [];

var common_design_pattern = [];
common_design_pattern.push({href:"../content/Design Pattern/Software design pattern - Wikipedia.htm", text: "Software design pattern - Wikipedia"});
var common_design_pattern_tags = [];

var common_http = [];
common_http.push({href:"../content/HTTP/Load balancing (computing) - Wikipedia.htm", text: "Load balancing (computing) - Wikipedia"});
common_http.push({href:"../content/HTTP/HTTP persistent connection - Wikipedia.htm", text: "HTTP persistent connection - Wikipedia"});
common_http.push({href:"../content/HTTP/request - Http client timeout and server timeout - Stack Overflow.htm", text: "request - Http client timeout and server timeout - Stack Overflow"});
common_http.push({href:"../content/HTTP/Common/HTTP Redirect 301, 302 區別及對SEO的影響 @ 符碼記憶.htm", text: "HTTP Redirect 301, 302 區別及對SEO的影響 @ 符碼記憶"});
common_http.push({href:"../content/HTTP/Common/HTTP 的認證模式 @ 藍色情懷   痞客邦 PIXNET.htm", text: "HTTP 的認證模式 @ 藍色情懷   痞客邦 PIXNET"});
common_http.push({href:"../content/HTTP/Common/Seednet教室 = = HTTP運作原理介紹(一) = =.htm", text: "Seednet教室 = = HTTP運作原理介紹(一) = ="});
common_http.push({href:"../content/HTTP/Common/HTTP persistent connection - Wikipedia.htm", text: "HTTP persistent connection - Wikipedia"});
common_http.push({href:"../content/HTTP/Common/Rewrite engine - Wikipedia.htm", text: "Rewrite engine - Wikipedia"});
common_http.push({href:"../content/HTTP/Common/Transport Layer Security - Wikipedia.htm", text: "Transport Layer Security - Wikipedia"});
common_http.push({href:"../content/HTTP/RESTFul/程式設計 - 簡明RESTful API設計要點 - Twincl.htm", text: "程式設計 - 簡明RESTful API設計要點 - Twincl"});
common_http.push({href:"../content/HTTP/RESTFul/HTTP Verbs  談 POST, PUT 和 PATCH 的應用 _ ihower { blogging }.htm", text: "HTTP Verbs  談 POST, PUT 和 PATCH 的應用 _ ihower { blogging }"});
common_http.push({href:"../content/HTTP/Security/SQL injection - Wikipedia.htm", text: "SQL injection - Wikipedia"});
common_http.push({href:"../content/HTTP/Security/Cross-site scripting - Wikipedia.htm", text: "Cross-site scripting - Wikipedia"});
common_http.push({href:"../content/HTTP/Security/Cross-site request forgery - Wikipedia.htm", text: "Cross-site request forgery - Wikipedia"});
var common_http_tags = [];

var java_common = [];
java_common.push({href:"../content/Java/Common/虛有其表的介面.htm", text: "虛有其表的介面"});
java_common.push({href:"../content/Java/Common/Call by value？.htm", text: "Call by value？"});
java_common.push({href:"../content/Java/Common/Excelsior  [Java] 淺談 call by value 和 call by reference.htm", text: "Excelsior  [Java] 淺談 call by value 和 call by reference"});
java_common.push({href:"../content/Java/Servlet/使用 Tomcat 7 與 Java Servlet 3.0 API 實作 Asynchronous Servlets：提升伺服器效率的方案 - G. T. Wang.htm", text: "使用 Tomcat 7 與 Java Servlet 3.0 API 實作 Asynchronous Servlets：提升伺服器效率的方案 - G. T. Wang"});
java_common.push({href:"../content/Java/Servlet/Asynchronous processing support in Servlet 3.0 _ JavaWorld.htm", text: "Asynchronous processing support in Servlet 3.0 _ JavaWorld"});
java_common.push({href:"../content/Java/Servlet/java - What is the difference between thread per connection vs thread per request  - Stack Overflow.htm", text: "java - What is the difference between thread per connection vs thread per request  - Stack Overflow"});
java_common.push({href:"../content/Java/Servlet/Servlet Life Cycle.jpg", text: "Servlet Life Cycle"});
java_common.push({href:"../content/Java/Servlet/Servlet Filter.png", text: "Servlet Filter"});
java_common.push({href:"../content/Java/Servlet/servlets - Difference between JSP forward and redirect - Stack Overflow.htm", text: "servlets - Difference between JSP forward and redirect - Stack Overflow"});
java_common.push({href:"../content/Java/Servlet/[JSP] Servlet的幾種頁面跳轉方式 @ 資訊園   痞客邦 PIXNET.htm", text: "[JSP] Servlet的幾種頁面跳轉方式 @ 資訊園   痞客邦 PIXNET"});
java_common.push({href:"../content/Java/Concurrent/ThreadPoolExecutor.htm", text: "ThreadPoolExecutor"});
java_common.push({href:"../content/Java/Concurrent/Executors.htm", text: "Executors"});
java_common.push({href:"../content/Java/Concurrent/ForkJoinPool · Java多執行緒的基本知識.htm", text: "ForkJoinPool · Java多執行緒的基本知識"});
java_common.push({href:"../content/Java/Concurrent/Thread Life Cycle.jpg", text: "Thread Life Cycle"});
java_common.push({href:"../content/Java/JMeter/Apache JMeter™   負載測試與效能測量的好工具 « Cloudの丘.htm", text: "Apache JMeter™   負載測試與效能測量的好工具 « Cloudの丘"});
java_common.push({href:"../content/Java/JVM/【心得】打造極致伺服器 @Minecraft 我的世界（當個創世神） 哈啦板 - 巴哈姆特.htm", text: "【心得】打造極致伺服器 @Minecraft 我的世界（當個創世神） 哈啦板 - 巴哈姆特"});
java_common.push({href:"../content/Java/Maven/Maven &amp; Spring.pptx", text: "Maven &amp; Spring"});
java_common.push({href:"../content/Java/Spring/Spring bean scopes example.htm", text: "Spring bean scopes example"});
java_common.push({href:"../content/Java/Spring/Spring Bean Scopes.htm", text: "Spring Bean Scopes"});
java_common.push({href:"../content/Java/Spring/Spring Beans Auto-Wiring.htm", text: "Spring Beans Auto-Wiring"});
java_common.push({href:"../content/Java/Spring/Spring Java Based Configuration", text: "Spring Java Based Configuration"});
java_common.push({href:"../content/Java/Spring/Spring Bean Life Cycle.htm", text: "Spring Bean Life Cycle"});
java_common.push({href:"../content/Java/Spring/Spring Bean Definition.htm", text: "Spring Bean Definition"});
java_common.push({href:"../content/Java/Spring/Spring Annotation Based Configuration.htm", text: "Spring Annotation Based Configuration"});
java_common.push({href:"../content/Java/Spring/Spring @Required Annotation.htm", text: "Spring @Required Annotation"});
java_common.push({href:"../content/Java/Spring/Maven &amp; Spring.pptx", text: "Maven &amp; Spring.pptx"});
java_common.push({href:"../content/Java/Spring/java - @Resource vs @Autowired - Stack Overflow.htm", text: "java - @Resource vs @Autowired - Stack Overflow"});
java_common.push({href:"../content/Java/Spring/Inversion of Control.png", text: "Inversion of Control"});
java_common.push({href:"../content/Java/Spring/Aop Concept.png", text: "Aop Concept"});
java_common.push({href:"../content/Java/Spring/第一個 Spring MVC 程式.htm", text: "第一個 Spring MVC 程式 (多個Bean定義檔來源設定)"});
var java_common_tags = [];

var scala = [];
scala.push({href:"../content/Scala/Akka/Actor Lifecycle.png", text: "Actor Lifecycle"});
scala.push({href:"../content/Scala/Akka/Actor Dispatcher.png", text: "Actor Dispatcher"});
var scala_tags = [];

var database_cache = [];
database_cache.push({href:"../content/Database/Redis/資料庫的好夥伴：Redis _ TechBridge 技術共筆部落格.htm", text: "Redis 簡介及應用"});
var database_cache_tags = [];

var database_sql = [];
database_sql.push({href:"../content/Database/Normalization/第一正規化 - 維基百科，自由的百科全書.htm", text: "第一正規化 - 維基百科，自由的百科"});
database_sql.push({href:"../content/Database/Normalization/第二正規化 - 維基百科，自由的百科全書.htm", text: "第二正規化 - 維基百科，自由的百科"});
database_sql.push({href:"../content/Database/Normalization/第三正規化 - 維基百科，自由的百科全書.htm", text: "第三正規化 - 維基百科，自由的百科"});
database_sql.push({href:"../content/Database/Common/Primary、Unique、Index各代表什麼意義_ _ MySQL Taiwan.htm", text: "Primary、Unique、Index各代表什麼意義_ _ MySQL Taiwan"});
database_sql.push({href:"../content/Database/Sql/[SQL] 5 types of SQL JOIN _ Programming blog.htm", text: "[SQL] 5 types of SQL JOIN _ Programming blog"});
database_sql.push({href:"../content/Database/Sql/[SQL] WHERE 1=1 做什麼用的  _ CHF's note - 點部落.htm", text: "[SQL] WHERE 1=1 做什麼用的  _ CHF's note - 點部落"});
database_sql.push({href:"../content/Database/Sql/sql - Full Outer Join in MySQL - Stack Overflow.htm", text: "sql - Full Outer Join in MySQL - Stack Overflow"});
database_sql.push({href:"../content/Database/Common/RDBMS Normal Form.pdf", text: "RDBMS Normal Form"});
database_sql.push({href:"../content/Database/Oracle/Oracle與日期有關的常用函數 @ 狐的窩 __ 痞客邦 PIXNET __.htm", text: "Oracle與日期有關的常用函數 @ 狐的窩 __ 痞客邦 PIXNET __"});
var database_sql_tags = [];

var devops_ci_cd = [];
devops_ci_cd.push({href:"../content/DevOps/CI &amp; CD/Re  [請益] 這些軟體工程的方法在台灣的普及度  - 看板 Soft_Job - 批踢踢實業坊.htm", text: "Re  [請益] 這些軟體工程的方法在台灣的普及度  - 看板 Soft_Job - 批踢踢實業坊"});
devops_ci_cd.push({href:"../content/DevOps/CI &amp; CD/持續整合 (Continuous Integration) 簡介與應用.docx", text: "持續整合 (Continuous Integration) 簡介與應用"});
var devops_ci_cd_tags = [];

var devops_version_control = [];
devops_version_control.push({href:"../content/Version Control/版本控管(Version Control)概念 以國票證券SVN版控為例.pptx", text: "版本控管(Version Control)概念 以國票證券SVN版控為例"});
devops_version_control.push({href:"../content/Version Control/淺談Subversion(SVN) Hook Script及其應用.docx", text: "淺談Subversion(SVN) Hook Script及其應用"});
var devops_version_control_tags = [];

var tools = [];
tools.push({href:"../content/Tools/The Will Will Web _ Sublime Text 3 新手上路：必要的安裝、設定與基本使用教學.htm", text: "The Will Will Web _ Sublime Text 3 新手上路：必要的安裝、設定與基本使用教學"});
tools.push({href:"../content/Tools/HTML-CSS-JS Prettify - Packages - Package Control.htm", text: "HTML-CSS-JS Prettify - Packages - Package Control"});
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
    contents.forEach(function (element) {
        mainHtml += "<div class=\"item\"><a href=\"" + element.href + "\">" + element.text + "</a></div>";
    });
    $("#main").append(mainHtml);

    $("#search-input").keyup(filterFunc);

    $(".tag").click(filterFunc);

    $("#tag-clear").click(function () {
        $(".item").each(function (index, element) {
            $(element).show();
        });
    });
});
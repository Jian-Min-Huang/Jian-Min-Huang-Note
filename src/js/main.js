var index = [];

var notes = [
    {type: "md", href: "../content/notes/bash.md", text: "bash"},
    {type: "md", href: "../content/notes/Coding Note.md", text: "Coding Note"},
    {type: "md", href: "../content/notes/Git Settings.md", text: "Git Settings"},
    {type: "md", href: "../content/notes/Intellij IDEA Hot Keys.md", text: "Intellij IDEA Hot Keys"},
    {type: "md", href: "../content/notes/Intellij IDEA Settings.md", text: "Intellij IDEA Settings"},
    {type: "md", href: "../content/notes/issues & concepts.md", text: "Issues & Concepts"},
    {type: "md", href: "../content/notes/MAC Install.md", text: "MAC Install"},
    {type: "md", href: "../content/notes/MAC Settings.md", text: "MAC Settings"},
    {type: "md", href: "../content/notes/Maven Note.md", text: "Maven Note"},
    {type: "md", href: "../content/notes/NGINX Note.md", text: "NGINX Note"},
    {type: "md", href: "../content/notes/Note Why.md", text: "Note Why"},
    {type: "md", href: "../content/notes/Oracle.md", text: "Oracle"},
    {type: "md", href: "../content/notes/SQL.md", text: "SQL"},
    {type: "md", href: "../content/notes/Unix Like Terminal Settings.md", text: "Unix Like Terminal Settings"},
    {type: "md", href: "../content/notes/vim.md", text: "vim"}
];

var tutorials_official = [
    {type: "iframe", href: "https://docs.oracle.com/javase/tutorial/index.html", text: "The Java&trade; Tutorials"},
    {type: "iframe", href: "https://docs.oracle.com/en/database/", text: "ORACLE Help Center"}
];

var tutorials_3rd_party = [
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

var helpers = [
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
    {type: "iframe", href: "https://start.spring.io", text: "SPRING INITIALIZR"}
];

var frameworks_frontend = [
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

var frameworks_backend = [
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
    {type: "iframe", href: "http://jmeter.apache.org/", text: "JMeter"},
    {type: "iframe", href: "http://jamonapi.sourceforge.net/", text: "JAMon"},
    {type: "iframe", href: "http://springfox.github.io/springfox/", text: "Spring Fox"}
];

var frameworks_system = [
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
    {type: "iframe", href: "https://kubernetes.io/", text: "kubernetes"}
];

// var services = [
// aws
// gce
// heroku
// godaddy
// {type: "iframe", href: "", text: ""}
// ];

var common_auth = [
    {type: "iframe", href: "../content/common/auth/解決問題的第一步_ Authentication vs. Authorization.htm", text: "解決問題的第一步_ Authentication vs. Authorization"}
];

var common_design_pattern = [
    {type: "iframe", href: "../content/common/design pattern/Software design pattern - Wikipedia.htm", text: "Software design pattern - Wikipedia"}
];

var common_http = [
    {type: "iframe", href: "../content/common/http/Load balancing (computing) - Wikipedia.htm", text: "Load balancing (computing) - Wikipedia"},
    {type: "iframe", href: "../content/common/http/HTTP persistent connection - Wikipedia.htm", text: "HTTP persistent connection - Wikipedia"},
    {type: "iframe", href: "../content/common/http/request - Http client timeout and server timeout - Stack Overflow.htm", text: "request - Http client timeout and server timeout - Stack Overflow"},
    {type: "iframe", href: "../content/common/http/HTTP Redirect 301, 302 區別及對SEO的影響 @ 符碼記憶.htm", text: "HTTP Redirect 301, 302 區別及對SEO的影響 @ 符碼記憶"},
    {type: "iframe", href: "../content/common/http/HTTP 的認證模式 @ 藍色情懷   痞客邦 PIXNET.htm", text: "HTTP 的認證模式 @ 藍色情懷   痞客邦 PIXNET"},
    {type: "iframe", href: "../content/common/http/Seednet教室 = = HTTP運作原理介紹(一) = =.htm", text: "Seednet教室 = = HTTP運作原理介紹(一) = ="},
    {type: "iframe", href: "../content/common/http/Rewrite engine - Wikipedia.htm", text: "Rewrite engine - Wikipedia"},
    {type: "iframe", href: "../content/common/http/Transport Layer Security - Wikipedia.htm", text: "Transport Layer Security - Wikipedia"},
    {type: "iframe", href: "../content/common/http/程式設計 - 簡明RESTful API設計要點 - Twincl.htm", text: "程式設計 - 簡明RESTful API設計要點 - Twincl"},
    {type: "iframe", href: "../content/common/http/HTTP Verbs  談 POST, PUT 和 PATCH 的應用 _ ihower { blogging }.htm", text: "HTTP Verbs  談 POST, PUT 和 PATCH 的應用 _ ihower { blogging }"},
    {type: "iframe", href: "../content/common/http/SQL injection - Wikipedia.htm", text: "SQL injection - Wikipedia"},
    {type: "iframe", href: "../content/common/http/Cross-site scripting - Wikipedia.htm", text: "Cross-site scripting - Wikipedia"},
    {type: "iframe", href: "../content/common/http/Cross-site request forgery - Wikipedia.htm", text: "Cross-site request forgery - Wikipedia"}
];

var common_regular_expression = [
    {type: "iframe", href: "../content/common/regular expression/正規表示式 Regular Expression _ 就是愛程式.htm", text: "正規表示式 Regular Expression _ 就是愛程式"}
];

var common_thread = [
    {type: "iframe", href: "../content/common/thread/Program _ Process _ Thread 的差別 @ Frank's 資訊科技潮流站   痞客邦 PIXNET.htm", text: "Program _ Process _ Thread 的差別 @ Frank's 資訊科技潮流站   痞客邦 PIXNET"},
    {type: "iframe", href: "../content/common/thread/Operating System Study Guide - Chapter 5 Deadlock.htm", text: "Operating System Study Guide - Chapter 5 Deadlock"},
    {type: "iframe", href: "../content/common/thread/Dining philosophers problem - Wikipedia.htm", text: "Dining philosophers problem - Wikipedia"},
    {type: "iframe", href: "../content/common/thread/Thread (computing) - Wikipedia.htm", text: "Thread (computing) - Wikipedia"}
];

var javascript = [
    {type: "iframe", href: "../content/javascript/【javascript】了解函式(function)很重要的筆記 « 和平，奮鬥，救WEB.htm", text: "【javascript】了解函式(function)很重要的筆記 « 和平，奮鬥，救WEB"},
    {
        type: "iframe",
        href: "../content/javascript/javascript - how to disable buttons based on a condition in jsp_ - Stack Overflow.htm",
        text: "javascript - how to disable buttons based on a condition in jsp_ - Stack Overflow"
    }
];

var java_common = [
    {type: "iframe", href: "../content/Java/Common/虛有其表的介面.htm", text: "虛有其表的介面"},
    {type: "iframe", href: "../content/Java/Common/Call by value？.htm", text: "Call by value？"},
    {type: "iframe", href: "../content/Java/Common/Excelsior  [Java] 淺談 call by value 和 call by reference.htm", text: "Excelsior  [Java] 淺談 call by value 和 call by reference"},
    {
        type: "iframe",
        href: "../content/Java/Servlet/使用 Tomcat 7 與 Java Servlet 3.0 API 實作 Asynchronous Servlets：提升伺服器效率的方案 - G. T. Wang.htm",
        text: "使用 Tomcat 7 與 Java Servlet 3.0 API 實作 Asynchronous Servlets：提升伺服器效率的方案 - G. T. Wang"
    },
    {type: "iframe", href: "../content/Java/Servlet/Asynchronous processing support in Servlet 3.0 _ JavaWorld.htm", text: "Asynchronous processing support in Servlet 3.0 _ JavaWorld"},
    {
        type: "iframe",
        href: "../content/Java/Servlet/java - What is the difference between thread per connection vs thread per request  - Stack Overflow.htm",
        text: "java - What is the difference between thread per connection vs thread per request  - Stack Overflow"
    },
    {type: "iframe", href: "../content/Java/Servlet/Servlet Life Cycle.jpg", text: "Servlet Life Cycle"},
    {type: "iframe", href: "../content/Java/Servlet/Servlet Filter.png", text: "Servlet Filter"},
    {
        type: "iframe",
        href: "../content/Java/Servlet/servlets - Difference between JSP forward and redirect - Stack Overflow.htm",
        text: "servlets - Difference between JSP forward and redirect - Stack Overflow"
    },
    {type: "iframe", href: "../content/Java/Servlet/[JSP] Servlet的幾種頁面跳轉方式 @ 資訊園   痞客邦 PIXNET.htm", text: "[JSP] Servlet的幾種頁面跳轉方式 @ 資訊園   痞客邦 PIXNET"},
    {type: "iframe", href: "../content/Java/Concurrent/ThreadPoolExecutor.htm", text: "ThreadPoolExecutor"},
    {type: "iframe", href: "../content/Java/Concurrent/Executors.htm", text: "Executors"},
    {type: "iframe", href: "../content/Java/Concurrent/ForkJoinPool · Java多執行緒的基本知識.htm", text: "ForkJoinPool · Java多執行緒的基本知識"},
    {type: "iframe", href: "../content/Java/Concurrent/Thread Life Cycle.jpg", text: "Thread Life Cycle"},
    {type: "iframe", href: "../content/Java/Concurrent/我是010_ volatile(揮發性) 在Java裡的概念與使用時機.htm", text: "我是010_ volatile(揮發性) 在Java裡的概念與使用時機"},
    {type: "iframe", href: "../content/Java/JMeter/Apache JMeter™   負載測試與效能測量的好工具 « Cloudの丘.htm", text: "Apache JMeter™   負載測試與效能測量的好工具 « Cloudの丘"},
    {type: "iframe", href: "../content/Java/JVM/【心得】打造極致伺服器 @Minecraft 我的世界（當個創世神） 哈啦板 - 巴哈姆特.htm", text: "【心得】打造極致伺服器 @Minecraft 我的世界（當個創世神） 哈啦板 - 巴哈姆特"},
    {type: "iframe", href: "../content/Java/Maven/Maven &amp; Spring.pptx", text: "Maven &amp; Spring"},
    {type: "iframe", href: "../content/Java/Spring/Spring bean scopes example.htm", text: "Spring bean scopes example"},
    {type: "iframe", href: "../content/Java/Spring/Spring Bean Scopes.htm", text: "Spring Bean Scopes"},
    {type: "iframe", href: "../content/Java/Spring/Spring Beans Auto-Wiring.htm", text: "Spring Beans Auto-Wiring"},
    {type: "iframe", href: "../content/Java/Spring/Spring Java Based Configuration", text: "Spring Java Based Configuration"},
    {type: "iframe", href: "../content/Java/Spring/Spring Bean Life Cycle.htm", text: "Spring Bean Life Cycle"},
    {type: "iframe", href: "../content/Java/Spring/Spring Bean Definition.htm", text: "Spring Bean Definition"},
    {type: "iframe", href: "../content/Java/Spring/Spring Annotation Based Configuration.htm", text: "Spring Annotation Based Configuration"},
    {type: "iframe", href: "../content/Java/Spring/Spring @Required Annotation.htm", text: "Spring @Required Annotation"},
    {type: "iframe", href: "../content/Java/Spring/Maven &amp; Spring.pptx", text: "Maven &amp; Spring.pptx"},
    {type: "iframe", href: "../content/Java/Spring/java - @Resource vs @Autowired - Stack Overflow.htm", text: "java - @Resource vs @Autowired - Stack Overflow"},
    {type: "iframe", href: "../content/Java/Spring/Inversion of Control.png", text: "Inversion of Control"},
    {type: "iframe", href: "../content/Java/Spring/Aop Concept.png", text: "Aop Concept"},
    {type: "iframe", href: "../content/Java/Spring/第一個 Spring MVC 程式.htm", text: "第一個 Spring MVC 程式 (多個Bean定義檔來源設定)"}
];

var scala = [
    {type: "iframe", href: "../content/scala/Scala vs Kotlin – Agilewombat.htm", text: "Scala vs Kotlin – Agilewombat"},
    {type: "iframe", href: "../content/scala/Actor Lifecycle.png", text: "Actor Lifecycle"},
    {type: "iframe", href: "../content/scala/Actor Dispatcher.png", text: "Actor Dispatcher"}
];

var database_common = [
    {type: "iframe", href: "../content/database/common/第一正規化 - 維基百科，自由的百科全書.htm", text: "第一正規化 - 維基百科，自由的百科"},
    {type: "iframe", href: "../content/database/common/第二正規化 - 維基百科，自由的百科全書.htm", text: "第二正規化 - 維基百科，自由的百科"},
    {type: "iframe", href: "../content/database/common/第三正規化 - 維基百科，自由的百科全書.htm", text: "第三正規化 - 維基百科，自由的百科"},
    {type: "iframe", href: "../content/database/common/Primary、Unique、Index各代表什麼意義_ _ MySQL Taiwan.htm", text: "Primary、Unique、Index各代表什麼意義_ _ MySQL Taiwan"},
    {type: "iframe", href: "../content/database/common/RDBMS Normal Form.pdf", text: "RDBMS Normal Form"}
];

var database_oracle = [
    {type: "iframe", href: "../content/database/oracle/Start with connect by prior 階層式查詢用法 _ Jeff 隨手記 - 點部落.htm", text: "Start with connect by prior 階層式查詢用法 _ Jeff 隨手記 - 點部落"},
    {type: "iframe", href: "../content/database/oracle/Oracle與日期有關的常用函數 @ 狐的窩 __ 痞客邦 PIXNET __.htm", text: "Oracle與日期有關的常用函數 @ 狐的窩 __ 痞客邦 PIXNET __"}
];

var database_redis = [
    {type: "iframe", href: "../content/database/redis/資料庫的好夥伴：Redis _ TechBridge 技術共筆部落格.htm", text: "Redis 簡介及應用"}
];

var database_sql = [
    {type: "iframe", href: "../content/database/sql/[SQL] 5 types of SQL JOIN _ Programming blog.htm", text: "[SQL] 5 types of SQL JOIN _ Programming blog"},
    {type: "iframe", href: "../content/database/sql/[SQL] WHERE 1=1 做什麼用的  _ CHF's note - 點部落.htm", text: "[SQL] WHERE 1=1 做什麼用的  _ CHF's note - 點部落"},
    {type: "iframe", href: "../content/database/sql/sql - Full Outer Join in MySQL - Stack Overflow.htm", text: "sql - Full Outer Join in MySQL - Stack Overflow"},
    {type: "iframe", href: "../content/database/sql/sql - Retrieving the last record in each group - Stack Overflow.htm", text: "sql - Retrieving the last record in each group - Stack Overflow"},
    {type: "iframe", href: "../content/database/sql/SQL 找出欄位值重覆的記錄及刪除重複記錄.htm", text: "SQL 找出欄位值重覆的記錄及刪除重複記錄"}
];

var devops_ci_cd = [
    {type: "iframe", href: "../content/devops/ci & cd/Re  [請益] 這些軟體工程的方法在台灣的普及度  - 看板 Soft_Job - 批踢踢實業坊.htm", text: "Re  [請益] 這些軟體工程的方法在台灣的普及度  - 看板 Soft_Job - 批踢踢實業坊"},
    {type: "iframe", href: "../content/devops/ci & cd/持續整合 (Continuous Integration) 簡介與應用.docx", text: "持續整合 (Continuous Integration) 簡介與應用"}
];

var devops_docker = [
    {type: "iframe", href: "../content/devops/docker/docker-note-book.pdf", text: "Docker Notebook"}
];

var devops_version_control = [
    {type: "iframe", href: "../content/devops/version control/版本控管(Version Control)概念 以國票證券SVN版控為例.pptx", text: "版本控管(Version Control)概念 以國票證券SVN版控為例"},
    {type: "iframe", href: "../content/devops/version control/淺談Subversion(SVN) Hook Script及其應用.docx", text: "淺談Subversion(SVN) Hook Script及其應用"}
];

var tools = [
    {type: "iframe", href: "https://brew.sh/index_zh-tw.html", text: "Homebrew"},
    {type: "iframe", href: "../content/tools/dev-notes.pdf", text: "dev-notes nginx"},
    {type: "iframe", href: "../content/tools/The Will Will Web _ Sublime Text 3 新手上路：必要的安裝、設定與基本使用教學.htm", text: "The Will Will Web _ Sublime Text 3 新手上路：必要的安裝、設定與基本使用教學"},
    {type: "iframe", href: "../content/tools/HTML-CSS-JS Prettify - Packages - Package Control.htm", text: "HTML-CSS-JS Prettify - Packages - Package Control"},
    {type: "iframe", href: "../content/tools/Travis CI build status badge on GitHub « Pymaster.htm", text: "Travis CI build status badge on GitHub « Pymaster"},
    {type: "iframe", href: "../content/tools/Bit Twiddling Hacks.htm", text: "Bit Twiddling Hacks"},
    {type: "iframe", href: "../content/tools/Intellij IDEA – Auto reload a web application (hot deploy).htm", text: "Intellij IDEA – Auto reload a web application (hot deploy)"},
    {type: "iframe", href: "../content/tools/啃蘋果日記_ [心得] Better Touch Tool 搭配 Safari_Chrome_Firefox_IE.htm", text: "啃蘋果日記_ [心得] Better Touch Tool 搭配 Safari_Chrome_Firefox_IE.htm"}
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
                if ($(element).text().toLowerCase().indexOf(keyword) != -1) {
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

        var arrayName = eval(name);

        var converter = new showdown.Converter();

        if (arrayName[idx].type === "md") {
            $.ajax({
                url: arrayName[idx].href,
                method: "GET",
                success: function (data) {
                    $("#md-content").empty();
                    $("#iframe-content").empty();
                    $("#md-content").append(converter.makeHtml(data));
                }
            });
        } else if (arrayName[idx].type === "iframe") {
            var iframeHtml = "<iframe src=\"" + arrayName[idx].href + "\" width=\"100%\" height=\"800px\" frameborder=\"0\"></iframe>";

            $("#md-content").empty();
            $("#iframe-content").empty();
            $("#iframe-content").append(iframeHtml);
        } else {
            console.log("match error !");
        }
    });
});
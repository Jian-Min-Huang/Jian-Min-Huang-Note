##### 外功
* Frontend
  * Html
  * Css
    * LESS
  * Javascript
    * Jquery
* Java & Scala
  * Java SDK (J2SE, J2EE)
  * Scala SDK
  * Comprehensive (Spring)
  * Http (Spray)
  * Network (Netty, Akka)
  * Message-Oriented Middleware ((ActiveMQ), (RabbitMQ))
  * Persistence (Hibernate, MyBatis, Slick)
  * Test (JUnit, JMH, ScalaTest)
  * Other (Quartz, (Ehcache))
* Database [Redis, MySQL, Oracle, Sqlite, (Cassandra))
* Server (Nginx, Tomcat, Jetty, JBoss)
* Build (Ant, Maven, (Gradle), Sbt)
* Cloud (AWS, GCP, (Azure))
* Scm (Subversion, Git)
* Continuous Integration (Jenkins, Travis CI)
* Operating System (Window, Linux)
* Test Tool (JMeter, Postman, (Selenium))
* DevOps (Docker)

##### 烏托邦
* 漂亮的UI
* 良好的UX
* 適合的工具及函式庫
* 一致的 Coding Style
* 高內聚低耦合的架構
* 水平伸縮
* 快速佈署
* 易於測試
* 方便監控
* 無狀態或強健的狀態流程
* 快速響應
* 異常回復

##### 系統結構
* CDN
* 負載平衡&反向代理
  * 表現層
  * 控制層 檢查引數, 驗證權限, 派發請求, 處理回應
    * 快取層
  * 服務層 撰寫邏輯, 異常處理 
    * 通訊層
  * 持久層 數據保存
* 資料庫

##### RESTful & RPC

##### Naming Conversions
```java
com.${TEAM_NAME}.${PROJECT_NAME}.${LANGUAGE}.XXX
org.${TEAM_NAME}.${PROJECT_NAME}.${LANGUAGE}.XXX
simpleVariable
simpleVariable_Unit
xxxController
xxxService
xxxRepository
  insert(xxxDto) : int
  select(...) : int
  select(...) : List[xxxEntity]
  update(xxxDto) : int
  delete(xxxDto) : int
database-name
table_name
${COLUMN_TYPE}_COLUMN_NAME
```

# Object member order
```
fields
constructors
methods
getter/setter
private class
```

# Style
x Constant obey encapsulation rule, cause low cohesion and high coupling
x xxxUtil obey delegation rule, cause high coupling and duplicate code
o xxxVo as argument can decrease amount of arguments
o xxxDto is for different client and xxxVo is for server, so it need to transform

# Special Object
* Pojo
* JavaBean
* Bo (business)
* Dao (data access)
* Vo (value)
* Do (domain)
* Qo (query)
* To (transfer)
* Dto (data transfer)
* Po (persistent)
* Session Bean
  * Stateless Session Bean
  * Stateful Session Bean
* Entity Bean
* Message Driven Bean

##### debug procedure
* open issue
* open feature/hotfix branch
* reappear
* modify
* local test
* submit
* merge branch
* integration test
* close issue

##### 經驗&技巧
* 空間換時間
* 快取 > 硬碟
* 省流量 差異 > 全部
* method inline (例如 logger isDebugEnabled)
* 用多型代替if else
* 封裝行為與使用委派原則 (例如不要用xxxUtil)
* 用String來表示狀態會更有意義
* 用Int則是方便數學計算，程式碼更簡潔
* 避免子函數互相呼叫(放到主流程邏輯會比較清晰)
* 10Mbps = 10 * 1024K bits = 10 * 1024 / 8 KBs = 1250 KB/s = 1.25 MB/s
* POC經驗
  * 小型範例與測試
  * 寫下來
  * 圖形化
  * 創意
  * 簡化變因
  * divide and conquer
* 盡量寫成純函數(輸入輸出資料串流全是顯式 Explicit 的)，無狀態、執行緒安全，任意組合後還是純函數，可對運算結果快取
  * 只能操作輸入的final argument
  * 不能讀寫全域變數、IO(否則便是非純函數)
  * 不能更改argument的內容(否則便是非純函數)
  * 再透過回傳新物件傳遞給外部

##### 坑
* 編碼(HTTP, JAVA COMPILE, LOG, DB)
* 執行緒安全
* 轉型及相等性
* 非同步
* 變數生命週期
* Dead Lock
* 資源釋放 (try catch finally)
* scala函數明確return
* 浮點數進位計算

##### 寫程式的演進
```
(凌群) 一支主程式 可以動就好 直接硬寫(不OOP 資料跟行為混在一起)
(凌群) 自訂函數(不OOP 資料跟行為沒混在一起)
(國票) 功能性物件分類(java bean dto vo dao bo util ...)
(亞太) 藉參數設定(Config)取得基本彈性
(中華) Spring Code Type IOC/DI AOP ISP and Programming for Interface not implementation
(自學) 用 XML 設定做出更複雜的設定檔 應用在 Reflection 及 JMX (更多的操作彈性)
(自學) 應用設計模式並符合設計原則(OOP(sollid))
(自學) 做好例外處理 寫出易測的程式
(紐摩) 必要時使用原始 API 別依賴 Framework
(瑞豪) 學會在不同的狀況選擇適合的框架(工具)
(瑞豪) 進階議題 SA SD 
                 設計架構(SOA, Microservice, n-Tier)
			  PG
			     敏捷
				 瀑布
				 DevOps
				 演算法視覺化
				 安全性
				 效能調教(GC)
				 輔助工具(Postman)
				 除錯(斷點 遠端JDPA)
				 單元測試
			  SE
				 虛擬化部署
			  QA
				 功能測試
			     整合測試
				 壓力測試
		      MIS
				 管理後台
			     監控告警
			  DBA
				 資料庫備份
(瑞豪) 正視物件導向，使用class(OOP、資料跟行為在一起、封裝資料、善用委派)
(瑞豪) 設計分散式系統
(伯牙) 更多的DB操作(SEQ 階層 JOIN VIEW STORED PROCEDURE) 前端操作(JQUERY REACT) 效能調教(HTTP POOL) AA模組 MyBatis(Paging) 後端操作(Nginx Redis) 架構 Infra(CDN) 前後端合作技巧(static domain thymeleaf api init setting QA(順序 速度 步驟)
(伯牙) 學習當主管 Build Team (member, jira, trello, wiki, issue for meeting, 跨部門合作)
(自學) 語言特性的本質 (例如純函數 FP method invoke chain 其實也能透過java+dp完成 是看寫的人的態度)
```
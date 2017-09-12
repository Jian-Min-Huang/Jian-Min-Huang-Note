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

##### 系統結構
* 負載平衡
  * 表現層
  * 控制層 檢查引數, 驗證權限, 派發請求, 處理回應
    * 快取層
  * 服務層 撰寫邏輯, 異常處理 
    * 通訊層
  * 持久層 數據保存
* 資料庫

##### Naming Conversions
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

# Object member order
fields
constructors
methods
getter/setter
private class

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
```
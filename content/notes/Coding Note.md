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
o xxxDto as argument can decrease amount of arguments

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
* Po (persistant)
* Session Bean
 * Stateless Session Bean
 * Stateful Session Bean
* Entity Bean
* Message Driven Bean
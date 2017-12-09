##### Cloud
* IAAS
  * GCP
  * AWS EC2
* PAAS
  * Heroku
* SAAS
  * Google Drive
  * Dropbox
* BAAS
  * Firebase
* FAAS
  * AWS Lambda

##### Functional
* function side effect
* pure function
* referential transparent
* immutable
* first-class function
* higher-order function

##### Object-Oriented
* Encapsulation
* Inheritance
* Polymorphism
* Diamond Problem

# Famous Person & Organization
* Apache Software Foundation
* Martin Fowler
* Kent Beck
* Erich Gamma
* Doug Lea
* Martin Odersky

##### Development Style
* Scrum
* Agile
* Waterfall
* Kanban
* Extreme
* Lean
* (BDD) Behavior Driven Development
* (DDD) Domain Driven Development
* (TDD) Test Driven Development

# Web
* Security
  * OWASP
  * Sql Injection
  * XSS
  * CSRF
  * DDOS
* CORS
* SEO
* GA

##### Unclassified
> Model1, Model2
> MVC, MVP, PM, MVVM
> Single Page Application, Client Side Render, Server Side Render
> Spaghetti Code, Ravioli Code, Lasagna Code
> Dependency Hell, Callback Hell
> Box Model
> Load Balance (Round-robin DNS)
> DNS
> Forward & Reverse Proxy
> CDN + HLS

# Transaction
Two Phase Commit Protocol
Three Phase Commit Protocol
Paxos
Message Topic in Transcation

# Database
Sql Joins(Cross, Inner, Left, Right, Full)
Database Partitioning
	Horizontal (1 table to many table)
		Pros
		Cons
	Vertical (different business, different database)
		Pros
		Cons
Database Sharding
Separate Read Write Action
	Application
	Database
RAC
ACID
    Atomicity
    Consistency
    Isolation
    Durability

# Architecture
Service Oriented Architecture
Enterprise Service Bus
Microservice and API Gateway
Master Slave
Active Standby
Active Active
Cluster
Finite Status Machine
    init
    processing
    done
    error
    change
    save
    redo
    monitor
Centralized and Decentralized
Publish Subscribe
Producer Consumer
3-tier architechure
CAP Theorem
    Consistence, all user can get same data at same time
    Availability, save data on many node, cluster can work well when a node fail
    Partition-tolerant each node can keep working when network is error
BASE Theorem
    BA,  Basically Available
    S, Soft state
    E, Eventual consistency
Synchronous
Asynchronous
Event Driven
Centralized Control System
Business Horizontal and Vertical Split
Pull and Push



# Software
ORM
Backward Compatibility
Forward Compatibility
Agile
Waterfall
Garbage Collection
Period(thread sleep, crontab, java timer, Quartz)
Versioning
Consistent hashing
Distributed Hash Tables
Hot & Cold Depolyment
Iterative and incremental Devlopment
DevOps
Continuous Integration
Continuous Delivery
Message-oriented middleware
Software transactional memory
Actor
C10K Problem
Reactor pattern (netty)
Proactor pattern

Tail Recursion

Anemic domain model
GRASP
Object transformation
Message Queue
    at least once
    at most once
    exact once
inviting code
service discover
keep alive

Syntactic sugar

zen coding

event-driven architecture
service-oriented architecture
staged event-driven architecture

sql & nosql crud compare
##### vm options
```
$ cd /Applications/IntelliJ IDEA.app/Contents/bin
$ vim idea.vmoptions

-Xms2g
-Xmx2g
```

##### installed plugins
* Scala
* Live Edit Tool
* NodeJS
* Lombok
* Background Image Plus

##### run tomcat
* Server
  * On 'update' action: Update classes and resources
  * On frame deactivation: Do nothing
* Deployment
  * xxx:war exploded
* Before launch
  * Build 'xxx:war exploded' artifact
  
##### setting
* Preferences -> Appearance & Behavior -> Appearance -> Show memory indicator
* Preferences -> Editor -> General -> Editor Tabs -> Tab Appearance -> Placement
* Preferences -> Editor -> Appearance -> Show right margin
* Preferences -> Editor -> Code Style -> Right margin
* Preferences -> Editor -> Code Style -> Line separator
* Preferences -> Editor -> General ->  Show quick documentation on mouse move
* Preferences -> Editor -> General ->  Limits -> Recent file limits 200
* Preferences -> Editor -> Inspections -> Spring -> Spring Core -> Code -> Autowiring for Bean Class
* Preferences -> Build, Execution, Deployment -> Maven -> User setting file
* Preferences -> Build, Execution, Deployment -> Compiler -> Annotation Processors -> Enable Annotation Processing
* Editor -> Inspections -> Serialization Issues
* Editor -> Inspections -> Spring -> Srping Core -> Code -> Autowiring for Bean Class
* Tools -> Terminal -> Application settings -> Shell path -> /bin/zsh

##### template
* Editor -> File and Code Templates -> Includes -> File Header -> @author Vincent Huang

##### clean project
* File -> Invalidate Caches

#####
```
If this is a Gradle module, please check the .idea project folder there is a gradle.xml

  <GradleProjectSettings>
    <option name="distributionType" value="DEFAULT_WRAPPED" />
    <option name="externalProjectPath" value="$PROJECT_DIR$/xxx" />
    <option name="gradleHome" value="/opt/gradle/gradle-2.13" />
    ......
  </GradleProjectSettings>
you should remove this entry and try to reimport your module
```
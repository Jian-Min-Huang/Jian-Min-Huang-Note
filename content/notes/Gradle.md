./gradlew sport-core:build -x test -profile
./gradlew sport-core:dependencies --configuration compile
./gradlew sport-core:publishToMavenLocal
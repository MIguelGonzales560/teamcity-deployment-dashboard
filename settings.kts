import jetbrains.buildServer.configs.kotlin.v2018_2.*
import jetbrains.buildServer.configs.kotlin.v2018_2.buildSteps.powerShell
import jetbrains.buildServer.configs.kotlin.v2018_2.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2018_2.triggers.finishBuildTrigger
import jetbrains.buildServer.configs.kotlin.v2018_2.triggers.vcs
import jetbrains.buildServer.configs.kotlin.v2018_2.vcs.GitVcsRoot

/*
The settings script is an entry point for defining a TeamCity
project hierarchy. The script should contain a single call to the
project() function with a Project instance or an init function as
an argument.

VcsRoots, BuildTypes, Templates, and subprojects can be
registered inside the project using the vcsRoot(), buildType(),
template(), and subProject() methods respectively.

To debug settings scripts in command-line, run the

    mvnDebug org.jetbrains.teamcity:teamcity-configs-maven-plugin:generate

command and attach your debugger to the port 8000.

To debug in IntelliJ Idea, open the 'Maven Projects' tool window (View
-> Tool Windows -> Maven Projects), find the generate task node
(Plugins -> teamcity-configs -> teamcity-configs:generate), the
'Debug' option is available in the context menu for the task.
*/

version = "2019.1"

project {

    vcsRoot(DeploymentDashboardLocal)

    buildType(Deploy)
    buildType(Backend)
    buildType(Frontend)

    params {
        param("env.SNAPSHOT", "true")
    }

    buildTypesOrder = arrayListOf(Frontend, Backend)
}

object Backend : BuildType({
    name = "Backend"

    artifactRules = "server/build/distributions/deployment-dashboard.zip"

    params {
        param("env.SNAPSHOT", "${Frontend.depParamRefs["env.SNAPSHOT"]}")
    }

    vcs {
        root(DeploymentDashboardLocal)
    }

    steps {
        script {
            name = "Build"
            scriptContent = "gradle serverPlugin"
        }
        powerShell {
            name = "Rename"
            scriptMode = script {
                content = "mv server/build/distributions/server.zip server/build/distributions/deployment-dashboard.zip -force"
            }
        }
    }

    triggers {
        finishBuildTrigger {
            buildType = "${Frontend.id}"
            successfulOnly = true
        }
    }

    dependencies {
        dependency(Frontend) {
            snapshot {
            }

            artifacts {
                artifactRules = """build => server\src\main\resources\buildServerResources"""
            }
        }
    }
})

object Deploy : BuildType({
    name = "Deploy"

    enablePersonalBuilds = false
    type = BuildTypeSettings.Type.DEPLOYMENT
    maxRunningBuilds = 1

    params {
        param("PROJECT", "Deployment Dashboard")
        param("ENVIRONMENT", "test")
    }

    steps {
        powerShell {
            name = "Copy"
            scriptMode = script {
                content = """
                    ${'$'}filename = "deployment-dashboard.zip"
                    
                    cp ${'$'}filename "c:\TeamCityData\plugins\"
                """.trimIndent()
            }
        }
    }

    triggers {
        finishBuildTrigger {
            buildType = "${Backend.id}"
            successfulOnly = true
        }
    }

    dependencies {
        dependency(Backend) {
            snapshot {
            }

            artifacts {
                artifactRules = "deployment-dashboard.zip"
            }
        }
    }
})

object Frontend : BuildType({
    name = "Frontend"

    artifactRules = "frontend/build => build"

    vcs {
        root(DeploymentDashboardLocal)
    }

    steps {
        script {
            name = "Install"
            workingDir = "frontend"
            scriptContent = "npm install"
        }
        script {
            name = "Test"
            workingDir = "frontend"
            scriptContent = "set CI=true && npm test"
        }
        script {
            name = "Build"
            workingDir = "frontend"
            scriptContent = "npm run build"
        }
    }

    triggers {
        vcs {
            branchFilter = ""
        }
    }
})

object DeploymentDashboardLocal : GitVcsRoot({
    name = "Deployment Dashboard Local"
    pollInterval = 30
    url = "file:///c:/dev/teamcity/deployment-dashboard"
    branchSpec = "+:refs/heads/*"
})

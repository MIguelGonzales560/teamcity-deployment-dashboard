package com.github.vyadh.teamcity.deploys

import jetbrains.buildServer.controllers.BaseController
import jetbrains.buildServer.serverSide.ProjectManager
import jetbrains.buildServer.serverSide.SBuildServer
import jetbrains.buildServer.web.openapi.WebControllerManager
import org.springframework.web.servlet.ModelAndView
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class DeployEditProjectController(
      sBuildServer: SBuildServer,
      webControllerManager: WebControllerManager,
      private val projectManager: ProjectManager
) : BaseController(sBuildServer) {

  private val configStore = DeployConfigStore()

  init {
    webControllerManager.registerController("/admin/deploys-edit-project.html", this)
  }

  override fun doHandle(
        request: HttpServletRequest,
        response: HttpServletResponse): ModelAndView? {

    val dashboardEnabled = request.getParameter(DeployConfigKeys.dashboardEnabled)
    val projectKey = request.getParameter(DeployConfigKeys.projectKey)
    val environmentKey = request.getParameter(DeployConfigKeys.environmentKey)
    val environments = request.getParameter(DeployConfigKeys.environments)
    val config = DeployConfig(dashboardEnabled, projectKey, environmentKey, environments)

    val projectExternalId = request.getParameter(DeployConfigKeys.projectExternalId)
    val project = projectManager.findProjectByExternalId(projectExternalId)

    if (project != null) {
      configStore.store(config, project)
    }

    return null
  }

}

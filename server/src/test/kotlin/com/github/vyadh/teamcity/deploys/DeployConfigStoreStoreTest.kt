package com.github.vyadh.teamcity.deploys

import com.nhaarman.mockitokotlin2.*
import jetbrains.buildServer.serverSide.SProject
import jetbrains.buildServer.serverSide.SProjectFeatureDescriptor
import org.junit.jupiter.api.Test

internal class DeployConfigStoreStoreTest {

  private val store = DeployConfigStore()
  private val config = DeployConfig(
        dashboardEnabled = "true",
        projectKey = "project",
        environmentKey = "env",
        environments = "dev,prod"
  )

  @Test
  fun addFeatureWhenMissing() {
    val project = projectWith(emptyList())

    store.store(config, project)

    verify(project).addFeature(type, config.toMap())
    verify(project).persist()
  }

  @Test
  fun addFeatureIsNotCalledWhenConfigDisabled() {
    val project = projectWith(emptyList())
    val disabled = DeployConfig.disabled

    store.store(disabled, project)

    verify(project, times(0)).addFeature(type, disabled.toMap())
    verify(project, times(0)).persist()
  }

  @Test
  internal fun updateFeatureWhenExisting() {
    val project = projectWith(listOf(feature("id", type, config.toMap())))
    val altConfig = config.copy(environments = "dev,uat,prod")

    store.store(altConfig, project)

    verify(project).updateFeature("id", type, altConfig.toMap())
    verify(project).persist()
  }

  @Test
  internal fun removeFeatureIfDisabled() {
    val project = projectWith(listOf(feature("id", type, config.toMap())))

    store.store(DeployConfig.disabled, project)

    verify(project).removeFeature("id")
    verify(project).persist()
  }


  private fun projectWith(features: Collection<SProjectFeatureDescriptor>): SProject {
    return mock {
      on { getOwnFeaturesOfType(type) } doReturn features
    }
  }

  private fun feature(id: String, type: String, params: Map<String, String>): SProjectFeatureDescriptor {
    return mock {
      on { getId() }.doReturn(id)
      on { getType() }.doReturn(type)
      on { parameters }.doReturn(params)
    }
  }

  companion object {
    const val type = "deployment-dashboard-config"
  }

}

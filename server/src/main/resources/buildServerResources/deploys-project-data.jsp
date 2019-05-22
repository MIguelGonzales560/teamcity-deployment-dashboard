<%@ page contentType="application/json;charset=UTF-8" language="java" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
{
  "deploys": [
    <c:forEach items="${deploys}" var="deploy" varStatus="loop">
    {
      "name": "<c:out value="${deploy.project}"/>",
      "version": "<c:out value="${deploy.version}"/>",
      "environment": "<c:out value="${deploy.environment}"/>",
      "time": "<c:out value="${deploy.time}" escapeXml="false"/>",
      "status": "<c:out value="${deploy.status}" escapeXml="false"/>",
      "link": "<c:out value="${deploy.link}" escapeXml="false"/>"
    }<c:if test="${!loop.last}">,</c:if>
    </c:forEach>
  ]
}

	<%
		String name = "Premendra";
		String from = "MTH";
		String branch = "CS";
	%>

	<jsp:include page="second.jsp" flush="true">
		<jsp:param name="name" value="<%=name%>" />
		<jsp:param name="from" value="<%=from%>" />
		<jsp:param name="branch" value="<%=branch%>" />
	</jsp:include>
<%
		String name = request.getParameter("name");
		name = (name.trim()).toUpperCase();
		String from = request.getParameter("from");
		from = (from.trim()).toUpperCase();
		String branch = request.getParameter("branch");
		branch = (branch.trim()).toUpperCase();
%>

Your Name : <%=name%><br/>
You're From : <%=from%><br/>
Your Branch : <%=branch%><br/>
let arr=["AWS","Jira","Bitbucket","Jenkins","Core Java","jdbc","jsp","servlet","JavaScript","HTML","CSS","tomcat","MySQL","Windows OS","Core Java","jdbc","jsp","servlet","JavaScript","HTML","CSS","tomcat","MySQL","Windows OS","Core Java","JDBC","Jasper Reports","PostGreSQL","Ubuntu Linux OS","Adobe Flex 4","Core Java","JDBC","Jasper Reports","Apache SOLR","Adobe Flex 4","Core Java","Hibernate","Apache SOLR","Adobe Flex 4","Core Java","Hibernate","Jasper Reports","Core Java","Servlet/JSP","Hibernate","Struts 2","HTML","CSS","Bootstrap 3","JavaScript","DB2","Websphere","Core Java","Servlet/JSP","Hibernate","Struts 2","HTML","CSS","Bootstrap 3","JavaScript","DB2","Websphere","Core Java","Servlet/JSP","Hibernate","Struts 2","HTML","CSS","Bootstrap 3","JavaScript","DB2","Websphere","Core Java","Servlet/JSP","Hibernate","Struts 2","HTML","CSS","Bootstrap 3","JavaScript","DB2","Websphere","Core Java","Servlet/JSP","Hibernate","Struts 2","HTML","CSS","Bootstrap 3","JavaScript","DB2","Websphere","Core Java","Restful web services using Jersey","Hibernate","AngularJS 1.1","Bootstrap 3","JavaScript","MySQL","Tomcat","Core Java","Servlet/JSP","Hibernate","Struts 2","HTML","CSS","Bootstrap 3","JavaScript","DB2","Websphere","Core Java","JUnit","Spring Boot","Spring Batch","Spring JDBC","Hibernate","Talend","Oracle 12g","Core Java","Hibernate","MySQL/SQL Server","Spring Boot","Spring REST","Spring Data","AngularJS 1.7","Bootstrap","Tomcat","Core Java","Servlet/JSP","ReactJS","Bootstrap","NodeJS","Spring Boot","Spring REST","Weblogic","Oracle","Core Java","Spring Rest","Spring Batch","Hibernate","Core Java","Spring Rest","Spring Batch","Spring Data","Hibernate","Core Java","Spring Rest","JasperReports","Collections API","Core Java","Servlet/JSP","Hibernate","Spring Boot","Oracle 12g","ReactJS","Bootstrap"];

let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
unique.sort();
console.log(unique);
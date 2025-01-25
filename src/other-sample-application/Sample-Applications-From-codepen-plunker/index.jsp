<!DOCTYPE html>
<html>
<%-- graph-data-representation --%>

<head>
    <%@ page import = "java.io.*" %>
    <%@ page import = "java.util.*" %>
    <%

        String folderRelativePath="./other-sample-application/Sample-Applications-From-codepen-plunker";
        String appenderForFolderPathWrtIndexJSP="";

        ServletContext context = request.getServletContext();
        String realpath = context.getRealPath(folderRelativePath);
        //out.println("realpath == "+realpath);
        List<String> htmlFiles= getAllHtmlFiles(realpath,appenderForFolderPathWrtIndexJSP);
        String ulLiText=generateLinksHtmlTextFromList(htmlFiles);
        
    %>

    <%!
    
    public static List<String> getAllHtmlFiles(String exampleDirPath, String appender) {
		StringBuffer sb = new StringBuffer();

		List<String> allHtmlFiles = new ArrayList<String>();

		File[] htmlFilesArr = new File(exampleDirPath).listFiles(new FileFilter() {

			@Override
			public boolean accept(File pathname) {
				if (pathname != null && pathname.isFile() && pathname.getName() != null
						&& pathname.getName().endsWith(".html")) {
					return true;
				}
				return false;
			}
		});
		for (File file : htmlFilesArr) {
			allHtmlFiles.add((appender.length() > 0 ? (appender + "/") : "") + file.getName());
		}

		File[] exDirSubDirectories = new File(exampleDirPath).listFiles(new FileFilter() {

			@Override
			public boolean accept(File pathname) {
				if (pathname != null && pathname.isDirectory()) {
					return true;
				}
				return false;
			}
		});

		for (File file : exDirSubDirectories) {
			if (file != null && file.isDirectory()) {
				List<String> files=getAllHtmlFiles(file.getAbsolutePath(), (appender.length() > 0 ? (appender + "/") : "") + file.getName());
				for(String child:files) {
					allHtmlFiles.add(child);
				}				
			}
		}

		//System.out.println(sb.toString());
		return allHtmlFiles;
	}
	
	public static String generateLinksHtmlTextFromList(List<String> linksArr) {

		StringBuffer sb = new StringBuffer();
		int index = 0;
		sb.append("<ul>\n");
		for (String link : linksArr) {
			sb.append("<li><a class=\"htmlFileLinkClass\" onclick=\"load(this," + (index++) + ",'" +  link + "')\">" + "" + link
					+ "</a>\r\n" + "                                </li>\n");
		}
		sb.append("</ul>\n");

		//System.out.println(sb.toString());
		return sb.toString();
	}

    %>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        * {
            box-sizing: border-box;
        }

        /* Create two equal columns that floats next to each other */
        .column {
            float: left;
            width: 50%;
            padding: 10px;
            height: 300px;
            /* Should be removed. Only for demonstration */
        }

        .column-25 {
            float: left;
            width: 25%;
            /* padding: 10px; */
            height: 500px;
            /* Should be removed. Only for demonstration */
        }

        .column-75 {
            float: left;
            width: 75%;
            /* padding: 10px; */
            height: 500px;
            /* Should be removed. Only for demonstration */
        }

        .column-sm-20 {
            float: left;
            width: 25%;
            /* padding: 10px; */
            height: 40px;
            /* Should be removed. Only for demonstration */
        }

        .column-sm-80 {
            float: left;
            width: 75%;
            /* padding: 10px; */
            height: 40px;
            /* Should be removed. Only for demonstration */
        }

        /* Clear floats after the columns */
        .row:after {
            content: "";
            display: table;
            clear: both;
        }

        .activeLink {
            background-color: rgb(133, 218, 126);
            font-weight: bold;
            font-size: 120%;
        }

        /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 600px) {
            .column {
                width: 100%;
            }
        }

        ul {
            list-style-type: none;
        }

        li {
            padding: 5px 5px 5px 5px;
            margin: 5px 5px 5px 5px;
            border: solid #08000a;
        }
    </style>
</head>

<body onkeydown="bodyKeyDownEventListener(event)">

    <div class="row">
        <div class="column-sm-80">

            <input type="button" value="next" onclick="iterateAnchor(1)">
            <input type="button" value="prev" onclick="iterateAnchor(-1)">
            <span id="clickedItemDisplayId">none</span>
            
        </div>
        <div class="column-sm-20">
            Open in new tab <a id="anchorToOpenInNewTab" href="" target="_blank">click here</a>
        </div>
    </div>
    <div class="row">

        <div class="column-25" style="border: thick solid #CC22FF;                                
                                overflow:auto;
                                -webkit-overflow-scrolling: touch;">

            <!-- <ul>
                <li><a
                        onclick="load(this,0,'examples/01-overview/animated-chart.html')">01-overview/animated-chart.html</a>
                </li>

            </ul> -->
            <%out.println(ulLiText);%>



        </div>
        <div class="column-75" style="border: thick solid #CC22FF;
                overflow:auto;
                -webkit-overflow-scrolling: touch;">
            <iframe id="myiframe" width="100%" height="100%" src="">
            </iframe>
        </div>
    </div>

    <script>
        var currIndex = 0;

        function load(elem, idx, srcc) {
            console.log('src ' + srcc);
            var ifrm = document.getElementById('myiframe');
            var clickedItemDisplay = document.getElementById('clickedItemDisplayId');
            var anchor = document.getElementById('anchorToOpenInNewTab');
            //htmlFileLinkClass
            var liList = document.getElementsByClassName('htmlFileLinkClass');
            for (var i = 0; i < liList.length; i++) {
                
                liList[i].classList.remove('activeLink');
            }
            currIndex = idx;
            elem.classList.add('activeLink');
            clickedItemDisplay.textContent = '';
            clickedItemDisplay.textContent = srcc;
            ifrm.src = srcc;
            anchor.href=srcc;
        }


        function iterateAnchor(increment) {

            var liList = document.getElementsByClassName('htmlFileLinkClass');
            currIndex = ((currIndex + increment + liList.length) % (liList.length));
            console.log('increment : ' + increment + '  |  currIndex : ' + currIndex);

            // liList[currIndex].scrollTo({
            //         top: 100,
            //         left: 100,
            //         behavior: 'smooth'
            // });
            liList[currIndex].click();
            liList[currIndex].scrollIntoView();
        }

        function bodyKeyDownEventListener(event) {
            var x = event.key;
            console.log(' key : ' + x);
            switch (x) {
                case 'p':
                case 'P':
                case 'ArrowUp':
                    iterateAnchor(-1); break;
                case 'n':
                case 'N':
                case 'ArrowDown':
                    iterateAnchor(1); break;
                default:
                    //console.log(' key : '+x); 
                    break;
            }
        }

        var myInitFunc = function onInit() {
            iterateAnchor(0);
        }

        myInitFunc();

    </script>

</body>

</html>
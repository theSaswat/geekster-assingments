function starpattern(){
        var columns=7;
	var rows=5;
								
	for(var i=1;i<=rows;i++)
	{
         for(var j=1;j<=columns;j++)
         {
          document.write("*");
         }
	  document.write("<br>");
	 }
   }
starpattern()

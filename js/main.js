var numTabs = 7;
var tabs = new Array(numTabs);
var navBarOffset = 280;

var topBar = document.getElementById("topBar");

for (i=0;i<numTabs;i++)
{	
	tabs[i] = document.getElementById("tab"+i);
}

window.onscroll = function() {navBarOnScroll()};



openTab(0);
function openTab(num)
{	
	for (i=0;i<tabs.length;i++)
	{
		if (i==num)
		{	
			open(tabs[i]);
		} else
		{
			close(tabs[i]);
		}
	}
}

function close(tab)
{
		if (tab.classList.contains("active"))
		{
			tab.classList.remove("active");
		}
}
function open(tab)
{

		if (~tab.classList.contains("active"))
		{
			tab.classList.add("active");
		}
}
function navBarOnScroll()
{
	if (window.pageYOffset >= navBarOffset)
	{
		if (~topBar.classList.contains("sticky"))
		{
    		topBar.classList.add("sticky")
    		topBar.setAttribute("style","top:"+(-1*navBarOffset)+"px;");
    	}
  	}
   else 
   {
    	if (topBar.classList.contains("sticky"))
		{
    		topBar.classList.remove("sticky")
    		topBar.setAttribute("style","top:0;");
    	}
  	}
}
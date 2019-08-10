var numTabs = 5;
var tabs = new Array(numTabs);
var navBarOffset = 280;

var topBar = document.getElementById("topBar");
var videos = document.getElementsByTagName("video");

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
	for (i=0;i<videos.length;i++)
	{
		if(isDescendant(tabs[num],videos[i]))
		{	
			videos[i].load();
			videos[i].play();
		} else
		{
			videos[i].pause();
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
function isDescendant(parent, child) 
{
     var node = child.parentNode;
     while (node != null) 
     {
         if (node == parent) 
         {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}
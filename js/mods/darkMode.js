function modDarkMode(){
	var link=document.createElement('link');
	link.type='text/css';
	link.rel='stylesheet';
	link.href=chrome.runtime.getURL('assets/darkmode.css');
	document.head.appendChild(link);
}
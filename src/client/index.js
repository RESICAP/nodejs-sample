const lightModeHref="lightmode.css"
const darkModeHref="darkmode.css"
const lightModeTitle = 'lightmode'
const darkModeTitle = 'darkmode'

function darkMode(){
	var el = document.getElementById("mode-css")
	el.setAttribute('href', darkModeHref)
	el.setAttribute('title', darkModeTitle)
}

function lightMode(){
	var el = document.getElementById("mode-css")
	el.setAttribute('href', lightModeHref)
	el.setAttribute('title', lightModeTitle)
}

function disableDarkMode(){
	disableStyleSheet(darkModeTitle)
	enableStyleSheet(lightModeTitle)
}

function enableDarkMode(){
	disableStyleSheet(lightModeTitle)
	enableStyleSheet(darkModeTitle)
}

function toggleDarkMode(event, el){
	console.log(event)
	console.log(el)

	var isDarkMode = event.target.checked
	console.log(isDarkMode)


	if(isDarkMode){
		darkMode()
	}
	else{
		lightMode()
	}
}

function addCss(fileName, disabled=false) {

	var head = document.head;
	var link = document.createElement("link");
  
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = fileName;
  
	head.appendChild(link);

	if(disabled)
		disableStyleSheet(fileName)
}

function removeCssFile(title){

}

function disableStyleSheet(title){
	const len = document.styleSheets.length
	for(var i = 0; i<len; i++){
		const cur = document.styleSheets[i]
		if(cur.href && cur.title === title){
			cur.disabled = true
		}
		else cur.disabled = false
	}
}

function enableStyleSheet(title){
	const len = document.styleSheets.length
	for(var i = 0; i<len; i++){
		const cur = document.styleSheets[i]
		if(cur.href && cur.title === title){
			cur.disabled = false
		}
	}
}
  
disableDarkMode()
//so handsome u can read this line of script
if(!localStorage.isInitialized){localStorage.isInitialized=true;localStorage.appcache=false;localStorage.cache=false;localStorage.cookies=true;localStorage.downloads=false;localStorage.fileSystems=false;localStorage.formData=false;localStorage.history=false;localStorage.indexedDB=true;localStorage.localStorage=false;localStorage.pluginData=false;localStorage.passwords=false;localStorage.webSQL=false;localStorage.cleartime=24*30;localStorage.cleartimestr="24*30";localStorage.l=12;localStorage.needConfirm=true}chrome.browserAction.onClicked.addListener(function(tab){var cr=true;if(JSON.parse(localStorage.needConfirm)){cr=confirm("确认清除所选信息吗？")}if(cr){cleardate()}else{notification("什么也没做~")}});var cb=function(){notification("客官，你的数据已经清理完毕")};function cleardate(){var millisecondsPerWeek=localStorage.cleartime*60*60*1000;var oneWeekAgo=(new Date()).getTime()-millisecondsPerWeek;chrome.browsingData.remove({"since":oneWeekAgo},{"appcache":JSON.parse(localStorage.appcache),"cache":JSON.parse(localStorage.cache),"cookies":JSON.parse(localStorage.cookies),"downloads":JSON.parse(localStorage.downloads),"fileSystems":JSON.parse(localStorage.fileSystems),"formData":JSON.parse(localStorage.formData),"history":JSON.parse(localStorage.history),"indexedDB":JSON.parse(localStorage.indexedDB),"localStorage":JSON.parse(localStorage.localStorage),"pluginData":JSON.parse(localStorage.pluginData),"passwords":JSON.parse(localStorage.passwords),"webSQL":JSON.parse(localStorage.webSQL)},cb)}function notification(str){var time=/(..)(:..)/.exec(new Date());var hour=time[1]%12||12;var period=time[1]<12?"a.m.":"p.m.";new Notification(hour+time[2]+" "+period,{icon:"image/clear.png",body:str})};
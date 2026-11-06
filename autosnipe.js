target=    1428000000; // target
start=     -7;         // when you start
projects=  6;          // amount of projects to create

////////////////////////////////////////////////////////////////////////

c=target+start;
m=0;
while(!m){m=(await fetch("https://cors.io/?url=https://api.scratch.mit.edu/projects/"+c).then(r=>r.text())).search("s, O")+1;console.log(`Project ${c} has`+(m?` been created!`:`n't been created yet...`))}
for(;projects--;)d();
async function d(){i=(await (await fetch("https://projects.scratch.mit.edu",{"headers":{"accept":"*/*","accept-language":"en-US,en;q=0.9","content-type":"application/json",},"referrer":"https://scratch.mit.edu/","referrerPolicy":"strict-origin-when-cross-origin","body":'{"targets":[{"isStage":true,"name":"Stage","variables":{},"lists":{},"broadcasts":{},"blocks":{},"comments":{},"currentCostume":0,"costumes":[{"name":"backdrop1","dataFormat":"svg","assetId":"cd21514d0531fdffb22204e0ec5ed84a","md5ext":"cd21514d0531fdffb22204e0ec5ed84a.svg","rotationCenterX":240,"rotationCenterY":180}],"sounds":[{"name":"pop","assetId":"83a9787d4cb6f3b7632b4ddfebf74367","dataFormat":"wav","format":"","rate":48000,"sampleCount":1123,"md5ext":"83a9787d4cb6f3b7632b4ddfebf74367.wav"}],"volume":100,"layerOrder":0,"tempo":60,"videoTransparency":50,"videoState":"on","textToSpeechLanguage":null}],"monitors":[],"extensions":[],"meta":{"semver":"3.0.0","vm":"12.7.0","agent":"h"}}',"method":"POST","mode":"cors","credentials":"include"})).json())["content-name"]-target;i=i>0?"+"+i:i;console.log(i*i>100?i+". tf u doing :sob:":i?i+". too "+(i>0?"late":"early")+" bro":i==0?"nice":"403 :sob:")}

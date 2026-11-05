// experimental scratch project autosniper
// this script is supposed to be run on your browser's console
// you need to be on Scratch's website (scratch.mit.edu, api.scratch.mit.edu, project.scratch.mit.edu, etc.) to make this script work

target   = 1410000000; // target
start    = -891; // when you start
projects = 6; // amount of projects to create

////////////////////////////////////////////////////////////////////////

min=14e8;c=target+start;m=1;a=async n=>{let q=0;~(await fetch("https://cors.io?url=https://api.scratch.mit.edu/projects/"+(q=min+n)).then(r=>r.text())).search("s, O")&&q>min&&console.log(min=q);min>=c&&m&&--m*p(projects);setTimeout(a,0,n)};for(i=0;i++<50;)a(i);for(;i<1e7;)a(i*=2);p=n=>{for(;n--;)d()};async function d(){i=(await (await fetch("https://projects.scratch.mit.edu",{"headers":{"accept":"*/*","accept-language":"en-US,en;q=0.9","content-type":"application/json",},"referrer":"https://scratch.mit.edu/","referrerPolicy":"strict-origin-when-cross-origin","body":'{"targets":[{"isStage":true,"name":"Stage","variables":{},"lists":{},"broadcasts":{},"blocks":{},"comments":{},"currentCostume":0,"costumes":[{"name":"backdrop1","dataFormat":"svg","assetId":"cd21514d0531fdffb22204e0ec5ed84a","md5ext":"cd21514d0531fdffb22204e0ec5ed84a.svg","rotationCenterX":240,"rotationCenterY":180}],"sounds":[{"name":"pop","assetId":"83a9787d4cb6f3b7632b4ddfebf74367","dataFormat":"wav","format":"","rate":48000,"sampleCount":1123,"md5ext":"83a9787d4cb6f3b7632b4ddfebf74367.wav"}],"volume":100,"layerOrder":0,"tempo":60,"videoTransparency":50,"videoState":"on","textToSpeechLanguage":null}],"monitors":[],"extensions":[],"meta":{"semver":"3.0.0","vm":"12.7.0","agent":"h"}}',"method":"POST","mode":"cors","credentials":"include"})).json())["content-name"]-target;i=i>0?"+"+i:i;console.log(i*i>81?i+" :(":i?i+". too "+(i>0?"late":"early")+" bro":i==0?"nice":"403 :sob:")}

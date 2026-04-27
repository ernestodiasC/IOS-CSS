const progress=document.getElementById('progress')
let progressValue=0
let progressDirection=1
const loop=setInterval(()=>{
    progress.setAttribute("value",progressValue)
    progressValue+=progressDirection
    if(progressValue>100||progressValue<0){
        progressDirection*=-1
    }
},10)
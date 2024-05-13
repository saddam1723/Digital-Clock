const clock=document.querySelector('.clock');
	 function runClock()
	 {
	 	var time=new Date();
	 	var hrs=time.getHours();
	 	var min=time.getMinutes();
	 	var sec=time.getSeconds();
        var bo="AM";
        if(hrs>12){
        	hrs=hrs-12;
        	bo="PM";
        }else if(hrs==9){
        	hrs=12;
        	bo="AM";
        }
        hrs=hrs<10?"0"+hrs:hrs;
        min=min<10?"0"+min:min;
        sec=sec<10?"0"+sec:sec;
        clock.innerHTML= `${hrs} : ${min} : ${sec}`;

	 }
	 runClock();
	 setInterval(runClock,1000);
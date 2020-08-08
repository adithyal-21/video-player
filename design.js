var videos=document.querySelector(".video");
var fillbar=document.getElementById("fill");
var handles=document.getElementById("handles");
var volumecontrol=document.getElementById("volume");
var currentTime=document.getElementById("currentTime");
var enl=document.getElementById("enlarge");
var large=document.getElementById("display");
var add=document.getElementById("add");
var backs=document.getElementById("backs");
var list=["video1.mp4","video2.mp4","video3.mp4"];
var currentvideo=0;
window.onload=playsong;
$("#backs").hide();
function playsong()
     {
        videos.src=list[currentvideo];
        console.log(videos.src);
        videos.play();
     }
function playorpause()
      {
          if(videos.paused)
          {
                videos.play();
                $(".pause img").attr("src","logo/signs.png");
          }
          else{
           
              videos.pause();
              $(".pause img").attr("src","logo/arro.png");
          }
        }
function next()
          {
              currentvideo++;
              if(currentvideo>=3)
              {
                currentvideo=0;
              }
          
              playsong();
              $(".pause img").attr("src","logo/signs.png");
          }
function prev()
          {
             --currentvideo;
              if(currentvideo<0)
              {
                  currentvideo=3;
              }
            
              playsong();
              $(".pause img").attr("src","logo/signs.png");
          }    
          
         
         
          videos.addEventListener('timeupdate',function()
          {
            var position=videos.currentTime / videos.duration;
            fill.style.width=position * 100 + '%';
            convertTime(Math.round(videos.currentTime));
            if(videos.ended){
              next();
          }});
         
         
          videos.ontimeupdate=function(e)
      { 
        document.querySelector("#seek").onclick=function(e){
        var forward=e.offsetX/this.offsetWidth;
        videos.currentTime=forward*videos.duration;
      }
      }
      
    function convertTime(seconds)
      {
          var min =Math.floor(seconds / 60);
          var hour=Math.floor(min/60);
          var sec=seconds % 60;
          min =(min<10) ? "0" +min:min;
         sec =(sec<10) ? "0" +sec:sec;
         currentTime.textContent=+hour+":"+min + ":" +sec;
          totalTime(Math.round(videos.duration));
            
    }
    function totalTime(seconds)
        {
          var min =Math.floor(seconds / 60);
          var hour=Math.floor(min/60);
          var sec=seconds % 60;
          hour=(hour<10) ? "0" +hour:hour;
          min =(min<60) ? "0" +min:min;
          sec =(sec<10) ? "0" +sec:sec;
          
          currentTime.textContent +="/" +hour + ":" +min+":"+sec;
        }
    

        
     volumecontrol.oninput = (e) =>{
      console.log(e);
      const vol=e.target.value;
      console.log(vol);
      videos.volume=vol;
      }
     
   
      enlarge.addEventListener("click",()=>{
        var add=document.getElementById("add");
        var speaker=document.getElementById("speaker");
        var minus=document.getElementById("sub");
       

        var plus=document.createElement("img");
        plus.src="logo/signs1.png"
        add.append(plus);

        var spe=document.createElement("img");
        spe.src="logo/communications.png"
        speaker.append(spe);

        var sub=document.createElement("img");
        sub.src="logo/lines.png"
        minus.append(sub);

        videos.style.width="113%";
        videos.style.height="90%";
       videos.style.right="80px";
       fillbar.style.bottom="45px"
       handles.style.bottom="45px"
       $("#prev").hide();
       $("#play").hide();
       $("#for").hide();
       $(".minus").hide();
       $(".plus").hide();
       $("#volume").hide();
       $("#size").hide();
       $("#backs").show();
      $("#currentTime").hide();
      
      document.getElementById("body").onkeydown=function(event)
      {
        if(event.keyCode==32)
        {
          playsong();
          videos.pause();

        }
       else if(event.keyCode==80)
        {
          playsong();
          videos.play();
        }
        else if(event.keyCode==37)
        {
          prev();
        }
        else if(event.keyCode==39)
        {
          next();
        }
      }

     
    
       })

       function increase()
       {
         videos.volume+=0.15;
       }
       function decrease()
       {
         videos.volume-=0.15;
       }

    
        
      
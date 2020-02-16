function upDate(previewPic){
       document.getElementById("image").innerHTML = previewPic.alt;
       document.getElementById("image").style.backgroundImage="url("+previewPic.src+")";
      }
     
     function onmouseover(previewPic){
       document.getElementById("image").innerHTML ="class("+previewPic.src+")";
     }
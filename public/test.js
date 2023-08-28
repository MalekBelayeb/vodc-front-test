
    

function appearP1() { 

    var loader = document.getElementById('loader');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    
    var keypoint1 = document.getElementsByClassName('keypoint-1');
    var keypoint2 = document.getElementsByClassName('keypoint-2');
    var keypoint3 = document.getElementsByClassName('keypoint-3');

    loader.style.left = "0";
    setTimeout(function() { 
        loader.style.left = "150%";
    
        page1.style.display = "none";
        page2.style.display = "block";
        keypoint1[0].style.display= "none";
        keypoint2[0].style.display= "none";
        keypoint3[0].style.display= "none";
     }, 220)
 }

 
function appearP2() { 
    var loader = document.getElementById('loader');
    var page1 = document.getElementById('page1');
    var page3 = document.getElementById('page3');
    var keypoint1 = document.getElementsByClassName('keypoint-1');
    var keypoint2 = document.getElementsByClassName('keypoint-2');
    var keypoint3 = document.getElementsByClassName('keypoint-3');
 
    loader.style.left = "0";
    setTimeout(function() { 
        loader.style.left = "150%";
        page1.style.display = "none";
        page3.style.display = 'block';
        keypoint1[0].style.display= "none";
        keypoint2[0].style.display= "none";
        keypoint3[0].style.display= "none";
     }, 250)
 }

 function appearP3() { 
    var loader = document.getElementById('loader');
    var page1 = document.getElementById('page1');
    var page4 = document.getElementById('page4');
    var keypoint1 = document.getElementsByClassName('keypoint-1');
    var keypoint2 = document.getElementsByClassName('keypoint-2');
    var keypoint3 = document.getElementsByClassName('keypoint-3');

    
    loader.style.left = "0";
    setTimeout(function() { 
        loader.style.left = "150%";
        page1.style.display = "none";
        page4.style.display = 'block';
        keypoint1[0].style.display= "none";
        keypoint2[0].style.display= "none";
        keypoint3[0].style.display= "none";
     }, 250)
 }

 
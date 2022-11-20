var NotificationSong = new Audio("/assets/click.ogg");
var showingNotification = false;
var closingNotification = false;
function closeNotification(){
  if(showingNotification && !closingNotification){
    closingNotification = true;
    var el = document.querySelector('#notificationFrame');
    el.classList.remove('showing');
    setTimeout(function(){
      el.classList.remove('good');
      el.classList.remove('bad');
      el.querySelector('h2').innerHTML = '';
      el.querySelector('p').innerHTML = '';
      closingNotification = false;
      showingNotification = false;
    },550);
  }
}
function notification(label,text,type,timing){
  if(!showingNotification){
    showingNotification = true;
    var el = document.querySelector('#notificationFrame');
    el.querySelector('h2').innerHTML = label;
    el.querySelector('p').innerHTML = text;
    NotificationSong.play();
    if(type !== undefined){
      el.classList.add(type);
    }
    el.classList.add('showing');
    if(timing == undefined){
      timing = 3;
    }
    setTimeout(function(){
      closeNotification();
    }, timing * 1000 );
  }else{
    setTimeout(function(){
      notification(label,text,type,timing);
    },200);
  }
}
function showLoadingBottom(){
  var el = document.getElementById('LoadingBottomElement');
  if(el){
    el.classList.add('show');
  }
}
function hideLoadingBottom(){
  var el = document.getElementById('LoadingBottomElement');
  if(el){
    el.classList.remove('show');
  }
}
var elementCloseNotification = document.querySelector('#notificationFrame .close');
if(elementCloseNotification !== null){
  elementCloseNotification.addEventListener('click',function(){
    closeNotification();
  });
}

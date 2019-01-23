$(function(){
  var hd=function(src){
    clearInterval(imgs_time)
    var n=img_addr.indexOf(src)
    var n_ai=img_addr.indexOf($img_ai.attr('src'))
    if(n==0){
      if(n_ai==2){
        $('#tip').html('输')
      }else if(n_ai==1){
        $('#tip').html('赢')
      }else if(n==n_ai){
        $('#tip').html('平')
      }
    }else if(n==1){
      if(n_ai==2){
        $('#tip').html('赢')
      }else if(n_ai==0){
        $('#tip').html('输')
      }else if(n==n_ai){
        $('#tip').html('平')
      }
    }else if(n==2){
      if(n_ai==0){
        $('#tip').html('赢')
      }else if(n_ai==1){
        $('#tip').html('输')
      }else if(n==n_ai){
        $('#tip').html('平')
      }
    }
  }
  var img_addr=['img/shitou.jpg','img/jiandao.jpg','img/bu.jpg']  
  var $img_ai=$('#ai')
  var imgs_time=setInterval(function(){
    var n=Math.floor(Math.random()*3);
    $img_ai.attr('src',img_addr[n])
  },50)
  $('button').click(function(){
    imgs_time=setInterval(function(){
      var n=Math.floor(Math.random()*3);
      $img_ai.attr('src',img_addr[n])
    },50)
  })
  $('#shitou').click(function(){
    hd($(this).attr('src'))
  })
  $('#jiandao').click(function(){
    hd($(this).attr('src'))
  })
  $('#bu').click(function(){
    hd($(this).attr('src'))
  })
})

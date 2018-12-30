(function(){
  'use strict';
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");
  var btn5 = document.getElementById("btn5");
  var area = document.getElementById("Area");
  var smallBox = document.getElementsByClassName("smallBox");
  var middleBox = document.getElementsByClassName("middleBox");
  var bicBox = document.getElementsByClassName("bicBox");
  var lineBox = document.getElementsByClassName("lineBox");
  var circle = document.getElementsByClassName("circle");
  var message = document.getElementsByClassName("message");
  var body = document.getElementsByTagName("body");
  var Move;
  var move;
  var Stage;
  var stage;
  var dFlag = true;


  btn1.addEventListener('click', function(){
    if(dFlag == true){
      disp(1);
      dFlag = false;
    }else if(dFlag == false){
      disp(0);
      dFlag = true;
    }

    message[0].style.color = "#ff0000";
  });
  btn2.addEventListener('click', function(){
    if(dFlag == true){
      disp(1);
      dFlag = false;
    }else if(dFlag == false){
      disp(0);
      dFlag = true;
    }

    message[0].style.color = "#2a4073";
  });
  btn3.addEventListener('click', function(){
    if(dFlag == true){
      disp(1);
      dFlag = false;
    }else if(dFlag == false){
      disp(0);
      dFlag = true;
    }

    message[0].style.color = "#16160e";
  });
  btn4.addEventListener('click', function(){
    if(dFlag == true){
      disp(1);
      dFlag = false;
    }else if(dFlag == false){
      disp(0);
      dFlag = true;
    }

    message[0].style.color = "#504946";
  });
  btn5.addEventListener('click', function(){
    if(dFlag == true){
      disp(1);
      dFlag = false;
    }else if(dFlag == false){
      disp(0);
      dFlag = true;
    }
    
    message[0].style.color = "#6c848d";
  });

  Move = function(){
    this.x = rand(-10, 10);
    this.y = rand(-10, 10);
    this.opacity = rand(1, 9) / 10;
  };
  Move.prototype.move = function(){
    //smallBoxを動かす
    var temp = rand(-10, 10) * rand(5, 10) + rand(-10, 10) * 5;

    for(var i = 0; i < smallBox.length; i++){
      smallBox[i].style.top = (this.y + temp * rand(-10, 10)) + 'px';
      smallBox[i].style.left = (this.x * (temp / 2.4 * 4.1 * i / 3.5))+ 'px';
    }
    //smallBoxを動かす
    for(var i = 0; i < middleBox.length; i++){
      middleBox[i].style.top = (this.y + temp * rand(-10, 10)) + 'px';
      middleBox[i].style.left = (this.x * (temp / 3.1 * 7.2 * i * 3))+ 'px';
    }
    //smallBoxを動かす
    for(var i = 0; i < bicBox.length; i++){
      bicBox[i].style.top = (this.y + temp * rand(-10, 10)) + 'px';
      bicBox[i].style.left = (this.x * (temp / 9.1 * 2.23 / i * 2.3))+ 'px';
    }
    //smallBoxを動かす
    for(var i = 0; i < lineBox.length; i++){
      lineBox[i].style.top = (this.y + temp * rand(-10, 10)) + 'px';
      lineBox[i].style.left = (this.x * (temp / 14.1 * 8.76 / i * 0.64))+ 'px';
    }
    //smallBoxを動かす
    for(var i = 0; i < circle.length; i++){
      circle[i].style.top = (this.y + temp * rand(-10, 10)) + 'px';
      circle[i].style.left = (this.x * (temp / 2.6 * 4.25 / i * 4.32))+ 'px';
    }

    this.y = rand(-10, 10);
    this.x = rand(-10, 10);
  };
  Move.prototype.resize = function(){
    for(var i = 0; i < smallBox.length; i++){
      smallBox[i].style.height = rand(10, 20) + 'px';
      smallBox[i].style.width = rand(10, 20) + 'px';
    }
    //smallBoxを動かす
    for(var i = 0; i < middleBox.length; i++){
      middleBox[i].style.height = rand(25, 50) + 'px';
      middleBox[i].style.width = rand(25, 50) + 'px';
    }
    //smallBoxを動かす
    for(var i = 0; i < bicBox.length; i++){
      bicBox[i].style.height = rand(70, 120) + 'px';
      bicBox[i].style.width = rand(70, 120) + 'px';
    }
    //smallBoxを動かす
    for(var i = 0; i < lineBox.length; i++){
      lineBox[i].style.height = rand(2, 7) + 'px';
      lineBox[i].style.width = rand(60, 80) + 'px';
    }
    //smallBoxを動かす
    for(var i = 0; i < circle.length; i++){
      circle[i].style.height = rand(25, 60) + 'px';
      circle[i].style.width = rand(25, 60) + 'px';
    }
  };

  Stage = function(){
    this.update = function(){
      move.move();
      move.resize();
      setTimeout(function(){
        this.update();
      }.bind(this), 1000);
    };
  };
  function disp(sw){
    if(sw == 0){
      //アート表示
      area.classList.add('hidden');
    }else if (sw == 1) {
      //アート非表示
      area.classList.remove('hidden');
    }
  }

  function rand(min, max){
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  move = new Move();
  stage = new Stage();
  stage.update();
})();

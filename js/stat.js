'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_X = 150;
var FONT_Y = 270;
var FONT_GAP = 90;
var BAR_X = 150;
var BAR_Y = 250;
var BAR_Y_GAP = 245;
var BAR_GAP = 90;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var FINAL_TXT_Y = 40;
var FINAL_TXT_Y_GAP = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (arr.length === 0) {
    return 0;
  }
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, time) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(time);

  var fill = function () {

    for (var index = 0; index < players.length; index++) {
      var rnd = Math.random();
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0,255, ' + rnd + ')';
      }
    }
  };

  for (var i = 0; i < players.length; i++) {
    var barTime = Math.round(BAR_HEIGHT * time[i]) / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], FONT_X + (FONT_GAP * i), FONT_Y);
    ctx.fillText(Math.round(time[i]), FONT_X + (FONT_GAP * i), BAR_Y_GAP + barTime);
    fill();
    ctx.fillRect(BAR_X + (BAR_GAP * i), BAR_Y, BAR_WIDTH, barTime);
  }

  ctx.font = '16px PT Mono';
  var finaltxt = ['Ура, ви виграли!', 'Список результатів:'];

  for (var k = 0; k < finaltxt.length; k++) {
    ctx.fillStyle = '#000';
    ctx.fillText(finaltxt[k], FONT_X, FINAL_TXT_Y + (FINAL_TXT_Y_GAP * k));
  }
};
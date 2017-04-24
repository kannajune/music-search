'use strict';

//vvvimp .. for client browser. 
window.console = window.console || {};
window.console.log = window.console.log || function(){};

var musicApp =  angular.module('musicApp', [ 'ngCookies'])


musicApp.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() 
{        scope.show = false;
      }
;    },
    templateUrl: "my-customer.html"
  };
});

musicApp.filter('formatDuration', function () {
    return function (input) {

        var totalHours, totalMinutes, totalSeconds, hours, minutes, seconds, result='';

        totalSeconds = input / 1000;
        totalMinutes = totalSeconds / 60;
        totalHours = totalMinutes / 60;

        seconds = Math.floor(totalSeconds) % 60;
        minutes = Math.floor(totalMinutes) % 60;
        hours = Math.floor(totalHours) % 60;

        if (hours !== 0) {
            result += hours+':';

            if (minutes.toString().length == 1) {
                minutes = '0'+minutes;
            }
        }

        result += minutes+':';

        if (seconds.toString().length == 1) {
            seconds = '0'+seconds;
        }

        result += seconds;

        return result;
    };
});



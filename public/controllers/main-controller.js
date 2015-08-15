/**
 * Created by gthardy on 8/15/15.
 */
app.controller('mainController', function($scope, $http){
    $scope.title = "Snap Conf Rooms";
    $scope.rooms;
    $scope.type;

    $http.get('/data/rooms.json')
        .success(function(data, status, headers, config) {
            $scope.rooms = data;
        });

    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $scope.type = ".dmg"
    } else {
        $scope.type = ".exe"
    }
});
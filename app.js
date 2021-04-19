let app = angular.module("LeaderFilterApp", []);
app.controller("LeaderController",function($scope){

    $scope.collection = [];
    $scope.addThisOne = function(z){
        $scope.collection.push(z);
    }

    $scope.Leaders = [
        {"name":"cleopatra","pic":"assets/1.png"},
        {"name":"dido", "pic":"assets/2.png"},
        {"name":"gandhi", "pic":"assets/3.png"},
        {"name":"gilgamesh", "pic":"assets/4.png"},
        {"name":"gorgo", "pic":"assets/5.png"},
        {"name":"hardrada", "pic":"assets/6.png"},
        {"name":"hojo", "pic":"assets/7.png"},
        {"name":"krestina", "pic":"assets/8.png"},
        {"name":"alexanda", "pic":"assets/9.png"},
        {"name":"amanitore", "pic":"assets/10.png"},
        {"name":"ca Trieu", "pic":"assets/11.png"},
        {"name":"casil", "pic":"assets/12.png"},
        {"name":"cyrus", "pic":"assets/15.png"},
        {"name":"elearnor", "pic":"assets/16.png"},
        {"name":"genghis Khan", "pic":"assets/18.png"},
        {"name":"gitarja", "pic":"assets/19.png"},
        {"name":"jadwiga", "pic":"assets/22.png"},
        {"name":"joao", "pic":"assets/24.png"},
        {"name":"mathias", "pic":"assets/29.png"},
        {"name":"Mmenelik", "pic":"assets/30.png"},
        {"name":"Mmontezuma", "pic":"assets/31.png"},
        {"name":"mvemba", "pic":"assets/32.png"},
        {"name":"pachacuti", "pic":"assets/33.png"},
        {"name":"pedro", "pic":"assets/34.png"},
        {"name":"pericles", "pic":"assets/35.png"},
        {"name":"poundmaker", "pic":"assets/37.png"},
        {"name":"seondeok", "pic":"assets/41.png"},
        {"name":"simon", "pic":"assets/42.png"},
        {"name":"teddy", "pic":"assets/43.png"},
        {"name":"tomyris", "pic":"assets/44.png"},
        {"name":"wrajan", "pic":"assets/45.png"},
        {"name":"wihelmina", "pic":"assets/47.png"},
        {"name":"ba Trieu", "pic":"assets/48.png"},
        {"name":"hojo Tokimune", "pic":"assets/49.png"},
        {"name":"lautaro", "pic":"assets/50.png"},
    ];  
}); 
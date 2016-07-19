(function(){
    describe('我要测试userCtrl',function(){
        var $scope;
        beforeEach(module('jhMod'));
        beforeEach(inject(function($rootScope,$controller){
            $scope = $rootScope.$new();
            $controller("userCtrl",{$scope:$scope});
        }));
        it('看看title对不对',function(){
            expect($scope.title=='jhpx').toBeTruthy();
        });
    })
})()
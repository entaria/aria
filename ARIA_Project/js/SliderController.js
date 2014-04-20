angular.module('website', ['ngAnimate'])
    .controller('SliderController', function ($scope) {
        $scope.slides = [
            {image: 'img/coffee_shop_1.jpg', title: "Get Rewards", description: 'You can use your Leap Card in all your favorite shops.'},
			{image: 'img/coffee_shop_2.jpg', title: "Convenience", description: 'After you walk through the turnstiles, it only a short walk to discounted purchases!'},
            {image: 'img/coffee_shop_3.jpg', title: "One card for all", description: 'Make more room in your wallet and discard all those paper loyalty cards'}
        ];
		
		$scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prev = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.next = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    })
	
	.animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    TweenMax.set(element, { left: element.parent().width() });
                    TweenMax.to(element, 0.5, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
		});
angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
	var routeRoleChecks = {
		admin: {auth: function(ucAuth) {
			return ucAuth.authorizeCurrentUserForRoute('admin')
		}},
		user: {auth: function(ucAuth) {
			return ucAuth.authorizeAuthenticatedUserForRoute()
		}}
	};


	$locationProvider.html5Mode(true);
	$routeProvider
        .when('/', {templateUrl: '/partials/main/main',
            controller: 'ucMainCtrl'
        })
		.when('/admin/users', {templateUrl: '/partials/admin/user-list', 
			controller: 'ucUserListCtrl', resolve: routeRoleChecks.admin
		})
		.when('/signup', {templateUrl: '/partials/account/signup', 
			controller: 'ucSignupCtrl'
		})
		.when('/profile', {templateUrl: '/partials/account/profile', 
			controller: 'ucProfileCtrl', resolve: routeRoleChecks.user
		})
        .when('/featured', {templateUrl: '/partials/main/featured-tvshows',
            controller: 'ucMainCtrl'
        })
		.when('/tvguide/tvchannels', {templateUrl: '/partials/tvguide/tvchannels',
			controller: 'ucTvChannelsCtrl'
		})
		.when('/tvguide/tvchannel/tvshows/:id', {templateUrl: '/partials/tvguide/tvshows',
			controller: 'ucTvshowsCtrl'
		})
        .when('/tvguide/tvchannel/tvshow/event/:id', {templateUrl: '/partials/tvguide/tvshow-details',
            controller: 'ucTvshowDetailCtrl'
        })
        .when('/tvguide/tvchannel/tvshow/:id/tvshow-community', {templateUrl: '/partials/tvguide/tvshow-community',
            controller: 'ucTvshowDetailCtrl'
        })
        .when('/tvguide/tvchannel/tvshow/tvshow-community', {templateUrl: '/partials/tvguide/tvshow-community',
            controller: 'ucTvshowCommunityCtrl'
        })
        .when('/tvguide/tvchannel/tvshow/tvchat', {templateUrl: '/partials/tvguide/tvchat',
            controller: 'ucTvChatCtrl'
        })

    });

angular.module('app').run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(evt, current, previews, rejection) {
		if(rejection === 'not authorized') {
			$location.path('/');
		}
	})
})
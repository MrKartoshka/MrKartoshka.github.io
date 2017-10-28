var titanium = angular.module('titanium', []);

titanium.controller('myCtrl', function ($scope, domainService, localStorageService) {
    // Main and only controller
    $scope.domainService = domainService.domainProtocols;
    $scope.localStorageService = localStorageService;
    // declarations of services

    if (!$scope.localStorageService.getObject('TLD_list')) {
    $scope.domainService.getDomainList().then(function (resp) {
        $scope.localStorageService.setObject('TLD_list', resp);
        $scope.TDL_list = $scope.localStorageService.getObject('TLD_list');
    })} else {
        $scope.TDL_list = $scope.localStorageService.getObject('TLD_list');
    }
    //saving TLD (top level domain) list to avoid unnecessary requests (saved to local storage)

    $scope.checkInput = function (string) {
        $scope.domain_variations = []; //clear result array on every input change
        string = string.toLowerCase(); //lowering input string to lowercase its allow us to compare tld with input string
        $scope.TDL_list.forEach(function (gtld) {
            // go through list of domain types list
            gtld.topLevelDomain.forEach(function (domain) {
                // go through list of domain list
                if (string.indexOf(domain) !== -1 && string.indexOf(domain) > 0) {
                    // checking if string contain domain and if domain position is not in the begging of string
                    var st1 = string.slice(0, string.indexOf(domain));
                    var st2 = string.slice(string.indexOf(domain), (string.indexOf(domain) + domain.length));
                    var st3 = string.slice((string.indexOf(domain) + domain.length));
                    // creating 3 parts for out put
                    var resultObj = {
                        host: st1,
                        dom: st2,
                        path: st3,
                        desc: gtld.name
                    };
                    // creating result object with host, domain, path and description parts
                    $scope.domain_variations.push(resultObj);
                    // filling result array
                }
            })
        })
    }
    //checking, parsing and returning result to array
});

titanium.factory('domainService', function ($q, $http ) {
    service = {};

    function Domain() {
        this.domainList = [];
        this.generic_TLD = [
            {
                name: 'Commercial',
                topLevelDomain: ['com']
            },
            {
                name: 'Organization',
                topLevelDomain: ['org']
            },
            {
                name: 'Network',
                topLevelDomain: ['net']
            },
            {
                name: 'International organizations',
                topLevelDomain: ['edu']
            },
            {
                name: 'Education',
                topLevelDomain: ['gov']
            },
            {
                name: 'Governmental entities and agencies',
                topLevelDomain: ['mil']
            },
            {
                name: 'United States military',
                topLevelDomain: ['int']
            }
        ];
        // Hardcoding general TLD and their descriptions

        Domain.prototype.getDomainList = function () {
            var q = $q.defer();
            var self = this;
            var url;
            url = 'https://restcountries.eu/rest/v2/all?fields=name;topLevelDomain';
            $http.get(url).then(function (resp) {
                resp.data.forEach(function(country){
                    country.topLevelDomain.forEach(function(domain,index) {
                        country.topLevelDomain[index] = domain.substring(1);
                    });
                });
                self.generic_TLD.forEach(function (t) {
                    resp.data.unshift(t);
                });
                self.domainList = resp.data;
                q.resolve(self.domainList);
            }, function (resp) {
                q.reject(resp);
            });

            return q.promise;
        }
        // request to take TLD list by countries and adding general TLD list to it
        // TLD list by countries was provided by restcountries.eu
    }
    service.domainProtocols = new Domain();

    return service;
});
// creating service for working with TLD list

titanium.factory('localStorageService', function ($window) {
    var service = {};

    var NAMESPACE = 'titanium_';

    service.set = function (key, value) {
        $window.localStorage[NAMESPACE + key] = value;
    };

    service.get = function (key, defaultValue) {
        return $window.localStorage[NAMESPACE + key] || defaultValue;
    };

    service.setObject = function (key, value) {
        $window.localStorage[NAMESPACE + key] = angular.toJson(value);
    };

    service.getObject = function (key) {
        return JSON.parse($window.localStorage[NAMESPACE + key] || null);
    };

    service.remove = function (key) {
        $window.localStorage.removeItem(NAMESPACE + key);
    };

    return service;
});
// reusing of mine localStorageService
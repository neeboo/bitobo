myMain.controller('ChartCtrl',['$scope',function($scope) {
    setChartHeight();
    appendJs();
    window.onresize=function(){
        setChartHeight();
    };
    function setChartHeight(){
        var target=document.getElementById('chartArea');
        var top=document.getElementById('pageTopMenu');
        var th=top.clientHeight;
        var wh=window.innerHeight;
        target.style.height=wh-th+'px';
    }
    function appendJs(){
        var oHead = document.getElementById('chartArea');
        var oScript= document.createElement("script");
        oScript.type = "text/javascript";
        oScript.src="../public/javascripts/controllers/main/tv.js";
        oHead.appendChild(oScript);
    }
}]);

myMain.controller('sidebarCtrl',['$scope',function($scope){
    $scope.showSideBar=true;
    $scope.toggleSideBar=function(){
        $scope.showSideBar=!$scope.showSideBar;
    }
}]);

myMain.controller('decrid',['$scope','Reddit',function($scope,Reddit) {
    'use strict';
    $scope.contentBlock = [
        {id: 'photo-1121321313132123123132123123132', name: 'Awesome photo', src: 'http://lorempixel.com/400/300/abstract'},
        {id: 'photo-2', name: 'Great photo', src: 'http://lorempixel.com/450/400/city'},
        {id: 'photo-3', name: 'Strange photo', src: 'http://lorempixel.com/400/300/people'},
        {id: 'photo-4', name: 'A photo?', src: 'http://lorempixel.com/400/300/transport'},
        {id: 'photo-5', name: 'What a photo', src: 'http://lorempixel.com/450/300/fashion'},
        {id: 'photo-6', name: 'Silly photo', src: 'http://lorempixel.com/400/300/technics'},
        {id: 'photo-7', name: 'Weird photo', src: 'http://lorempixel.com/410/350/sports'},
        {id: 'photo-8', name: 'Modern photo', src: 'http://lorempixel.com/400/300/nightlife'},
        {id: 'photo-9', name: 'Classical photo', src: 'http://lorempixel.com/400/300/nature'},
        {id: 'photo-10', name: 'Dynamic photo', src: 'http://lorempixel.com/420/300/abstract'},
        {id: 'photo-11', name: 'Neat photo', src: 'http://lorempixel.com/400/300/sports'},
        {id: 'photo-12', name: 'Bumpy photo', src: 'http://lorempixel.com/400/300/nightlife'},
        {id: 'photo-13', name: 'Brilliant photo', src: 'http://lorempixel.com/400/380/nature'},
        {id: 'photo-14', name: 'Excellent photo', src: 'http://lorempixel.com/480/300/technics'},
        {id: 'photo-15', name: 'Gorgeous photo', src: 'http://lorempixel.com/400/300/sports'},
        {id: 'photo-16', name: 'Lovely photo', src: 'http://lorempixel.com/400/300/nightlife'},
        {id: 'photo-17', name: 'A "wow" photo', src: 'http://lorempixel.com/400/300/nature'},
        {id: 'photo-18', name: 'Bodacious photo', src: 'http://lorempixel.com/400/300/abstract'}
    ];

}]);

myMain.controller('expandable',['$scope',function($scope) {
    $scope.hideMore=true;
    $scope.expandMe=function(){
        $scope.hideMore=!$scope.hideMore;
    }
}]);

myMain.factory('Reddit', function($http) {
    var Reddit = function() {
        this.items = [];
        this.busy = false;
        this.after = '';
    };

    Reddit.prototype.nextPage = function() {
        if (this.busy) return;
        this.busy = true;

        var url = "http://api.reddit.com/hot?after=" + this.after + "&jsonp=JSON_CALLBACK";
        $http.jsonp(url).success(function(data) {
            var items = data.data.children;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i].data);
            }
            this.after = "t3_" + this.items[this.items.length - 1].id;
            this.busy = false;
        }.bind(this));

    };
    return Reddit;
});

myMain.directive('imageloaded', [

    function () {

        'use strict';

        return {
            restrict: 'A',

            link: function(scope, element, attrs) {
                var cssClass = attrs.loadedclass;

                element.bind('load', function (e) {
                    angular.element(element).addClass(cssClass);
                });
            }
        }
    }
]);

myMain.controller('GroupCtrl', ['$scope', '$http', function($scope,$http) {
    var initGroups = [
        {
            title: '常用',
            groupType:1,
            openStatus:true
        },
        {
            title: '外汇',
            groupType:2,
            openStatus:false
        },
        {
            title: '贵金属',
            groupType:3,
            openStatus:false
        },
        {
            title: '大宗商品',
            groupType:4,
            openStatus:false
        }
    ];

    var symbolsGroup=[
        {
            Symbol:'EURUSD',
            value:'EUR_USD',
            groupType:2,
            fav:true,
            price_bid:'',
            price_ask:''
        },
        {
            Symbol:'GBPUSD',
            value:'GBP_USD',
            groupType:2,
            fav:true,
            price_bid:'',
            price_ask:'',
            old_bid:null,
            old_ask:null
        },
        {
            Symbol:'USDCAD',
            value:'USD_CAD',
            groupType:2,
            fav:true,
            price_bid:'',
            price_ask:'',
            old_bid:null,
            old_ask:null
        },
        {
            Symbol:'EURGBP',
            value:'EUR_GBP',
            groupType:2,
            fav:false,
            price_bid:'',
            price_ask:'',
            old_bid:null,
            old_ask:null
        },
        {
            Symbol:'USDCHF',
            value:'USD_CHF',
            groupType:2,
            fav:false,
            price_bid:'',
            price_ask:'',
            old_bid:null,
            old_ask:null
        }
/*        {
            Symbol:'石油',
            groupType:3,
            fav:false,
            price_bid:'',
            price_ask:'',
            old_bid:null,
            old_ask:null
        },
        {
            Symbol:'玉米',
            groupType:4,
            fav:false,
            price_bid:'',
            price_ask:'',
            old_bid:null,
            old_ask:null
        },
        {
            Symbol:'大豆',
            groupType:4,
            fav:false,
            price_bid:'',
            price_ask:'',
            old_bid:null,
            old_ask:null
        },
        {
            Symbol:'干粮',
            groupType:4,
            fav:false,
            price_bid:'',
            price_ask:'',
            old_bid:null,
            old_ask:null
        },
        {
            Symbol:'土豆',
            groupType:4,
            fav:false,
            price_bid:'',
            price_ask:'',
            old_bid:null,
            old_ask:null
        }*/
    ];

    $scope.groups= initGroups;
    $scope.symbolGroup = symbolsGroup;
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    /**
     * Created by DELL on 2014-10-28.
     */
    var OANDA = OANDA || {};

    OANDA.baseURL = OANDA.baseURL || "http://api-sandbox.oanda.com";
    OANDA.auth = OANDA.auth || {};
    OANDA.auth.enabled = OANDA.auth.enabled || false;
    OANDA.auth.token = OANDA.auth.token || "";

    var setAuthHeader = function(xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + OANDA.auth.token);
    };

    var sendAjaxRequest = function(endpoint, method, parameters, requiresAuth, onComplete) {
        var contentType = "";
        if(method === 'POST' || method === 'PUT' || method === 'PATCH') {
            contentType = "application/x-www-form-urlencoded";
        }
        var beforeSend = function() {};
        if(OANDA.auth.enabled && requiresAuth) {
            beforeSend = setAuthHeader;
        }
        /*var req = $http({
            url: OANDA.baseURL + endpoint,
            method: method,
            dataType: 'json',
            data : parameters,
            contentType: contentType,
            beforeSend: beforeSend
        });*/

        var req=$http({
            method: method,
            url: OANDA.baseURL + endpoint,
            params:parameters
        }).success(onComplete)
            .error(onComplete);
    };

    /* Send a raw api request on an endpoint.
     */
    OANDA.api = function(endpoint, method, parameters, callback) {

        sendAjaxRequest(endpoint, method, parameters, true, function(jqXHR, textResponse) {
            var response = {};
            if(textResponse != '200') {
                response.error = { 'HTTPCode' : jqXHR.status };
                try {
                    var errorJSON = JSON.parse(jqXHR.responseText);
                    $.extend(response.error, errorJSON);
                } catch(e) {
                }
            } else {
                response = jqXHR;
            }
            if(callback) {
                callback(response);
            }
        });
    };

    OANDA.transaction = OANDA.transaction || {};

    /*
     * Lists all transactions for a specified account.
     * Accepts optional parameters:
     * maxId      => Number
     * mindId     => Number
     * count      => Number
     * Instrument => String
     *
     */
    OANDA.transaction.list = function(accountId, optParameters, callback) {
        //Disallow passing ids parameter (use listSpecific instead).
        if(optParameters.ids) { delete optParameters.ids; }
        OANDA.api("/v1/accounts/" + accountId + "/transactions", 'GET', optParameters, callback);
    };

    /* List specific transactions by transaction id.
     * Accepts no optional parameters
     */
    OANDA.transaction.listSpecific = function(accountId, transId, callback) {
        OANDA.api("/v1/accounts/" + accountId + "/transactions/" + transId, 'GET', {}, callback);
    };

    OANDA.trade = OANDA.trade || {};

    /* List all trade in account.
     * Accepts optional parameters:
     * maxId      => Number
     * count      => Number
     * instrument => Number
     */
    OANDA.trade.list = function(accountId, optParameters, callback) {
        if(optParameters.ids) { delete optParameters.ids; }
        OANDA.api("/v1/accounts/" + accountId + "/trades", 'GET', optParameters, callback);
    };

    /* List specific trades by id.
     * Accepts no optional parameters
     */
    OANDA.trade.listSpecific = function(accountId, tradeIds, callback) {
        var tradesStr = tradeIds.join(',');
        OANDA.api("/v1/accounts/" + accountId + "/trades", 'GET', {ids : tradesStr}, callback);
    };

    /* Close an existing trade
     * Accepts no optional parameters.
     */
    OANDA.trade.close = function(accountId, tradeId, callback) {
        OANDA.api("/v1/accounts/" + accountId + "/trades/" + tradeId, 'DELETE', {}, callback);
    };

    /* Modfify and existing trade
     * Accepts optional parameters:
     *  stopLoss     => number
     *  takeProfit   => number
     *  trailingStop => number
     */
    OANDA.trade.change = function(accountId, tradeId, optParameters, callback) {
        OANDA.api("/v1/accounts/" + accountId + "/trades/" + tradeId, 'PATCH', optParameters, callback);
    };

    OANDA.order = OANDA.order || {};
    /* List all orders in account.
     * Accepts optional parameters:
     * maxId      => Number
     * count      => Number
     * Instrument => String
     */
    OANDA.order.list = function(accountId, optParameters, callback) {
        if(optParameters.ids) { delete optParameters.ids; }
        OANDA.api("/v1/accounts/" + accountId + "/orders", 'GET', optParameters, callback);
    };

    /* List specific orders by id.
     * Accepts no optional parameters
     */
    OANDA.order.listSpecific = function(accountId, orderIds, callback) {
        var ordersStr = orderIds.join(',');
        OANDA.api("/v1/accounts/" + accountId + "/orders", 'GET', {ids: ordersStr}, callback);
    };
    /* Create a new order.
     * expiry and price are only required if order type is 'marketIfTouched', 'stop' or 'limit'
     * Accepts optional parameters
     * expiry       => string RFC 3339 format
     * price        => number
     * stopLoss     => number
     * takeProfit   => number
     * trailingStop => number
     * upperBound   => number
     * lowerBound   => number
     */
    OANDA.order.open = function(accountId, instrument, units, side, type, optParameters, callback){
        OANDA.api("/v1/accounts/" + accountId + "/orders", 'POST',
            $.extend({instrument: instrument, units: units, side:side, type:type}, optParameters),
            callback);
    };

    /* Close an existing order.
     * Accepts no optional parameters
     */
    OANDA.order.close = function(accountId, orderId, callback) {
        OANDA.api("/v1/accounts/" + accountId + "/orders/" + orderId, 'DELETE', {}, callback);
    };

    /* Modify an existing order
     * Accepts optional parameters:
     * units        => number
     * price        => number
     * expiry       => string
     * lowerBound   => number
     * upperBound   => number
     * stopLoss     => number
     * takeProfit   => number
     * trailingStop => number
     */
    OANDA.order.change = function(accountId, orderId, optParameters, callback) {
        OANDA.api("/v1/accounts/" + accountId + "/orders/" + orderId, 'PATCH', optParameters, callback);
    };

    OANDA.position = OANDA.position || {};

    /* List all positions
     * Accepts no optional parameters
     */
    OANDA.position.list = function(accountId, callback) {
        OANDA.api("/v1/accounts/" + accountId + "/positions", 'GET', {}, callback);
    };

    /* List only position for specific instrument
     * Accepts no optional parameters
     */
    OANDA.position.listSpecific = function(accountId, instrument, callback) {
        OANDA.api("/v1/accounts/" + accountId + "/positions/" + instrument, 'GET' ,{}, callback);
    };

    /* Close all trades in a positions
     * Accepts no optional parameters
     */
    OANDA.position.close = function(accountId, instrument, callback) {
        OANDA.api("/v1/accounts/" + accountId + "/positions/" + instrument, 'DELETE', {}, callback);
    };

    OANDA.account = OANDA.account || {};

    /* Register an account
     * Accepts no optional parameters
     */
    OANDA.account.register = function(currency, callback) {
        OANDA.api("/v1/accounts", 'POST', {currency:currency}, callback);
    };

    /* Get accounts
     * Accepts no optional parameters
     */
    OANDA.account.get = function(callback) {
        OANDA.api("/v1/accounts", 'GET', {}, callback);
    };

    /* List all accounts associated with user
     * Accepts no optional parameters
     */
    OANDA.account.list = function(username, callback) {
        OANDA.api("/v1/accounts", 'GET', {username:username}, callback);
    };

    /* List specific account details
     * Accepts no optional parameters
     */
    OANDA.account.listSpecific = function(accountId, callback) {
        OANDA.api("/v1/accounts/" + accountId, 'GET', {}, callback);
    };

    OANDA.rate = OANDA.rate || {};

    /* List all instruments available.
     * Accepts optional parameters:
     * fields => array of strings
     */
    OANDA.rate.instruments = function(accountId, fields, callback) {
        var fieldStr = fields.join(',');
        var data = fieldStr ? { "fields" : fieldStr , "accountId" : accountId} : {};
        OANDA.api("/v1/instruments", 'GET', data, callback);
    };
    /* Return candlesticks for a specific instrument
     * Accepts optional parameters:
     * granularity  => string
     * count        => number
     * start        => string
     * end          => string
     * candleFormat => string
     * includeFirst => boolean
     */
    OANDA.rate.history = function(symbol, optParameters, callback) {
        OANDA.api("/v1/candles", 'GET', $.extend({instrument:symbol}, optParameters), callback);
    };
    /* Lists the current price for a list of instruments
     * Accepts no optional parameters
     */
    OANDA.rate.quote = function(symbols, callback) {
        OANDA.api("/v1/prices", 'GET', {instruments: symbols.join(',')}, callback);
    };

    setInterval(setCurrentRates, 1000);

    function setCurrentRates() {
        for (var i = 0; i <= $scope.symbolGroup.length - 1; i++) {
            getQuotes(i);

        }
    }

    function getQuotes(x) {
        OANDA.rate.quote([$scope.symbolGroup[x].value], function (rateQuoteResponse) {
            var priceInfo = rateQuoteResponse.prices[0];
            $scope.symbolGroup[x].oldBid = compareOld(priceInfo.bid, $scope.symbolGroup[x].price_bid);
            $scope.symbolGroup[x].oldAsk = compareOld(priceInfo.ask, $scope.symbolGroup[x].price_ask);

            $scope.symbolGroup[x].price_bid = priceInfo.bid;
            $scope.symbolGroup[x].price_ask = priceInfo.ask;
        });
    }

    function compareOld(x1,x2){
        if(x1>x2){
            return 'gt';
        }else if (x1<x2){
            return 'lt';
        }else return 'eq';
    }

}]);
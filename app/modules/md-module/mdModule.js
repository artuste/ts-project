var mdModule;
(function (mdModule) {
    var score = 34;
    //Arrow functions
    var data = {
        id: 10,
        token: 'zxcqe12ed()SDA'
    };
    var getData;
    getData = function (collectionData) {
        return collectionData.id + ' - ' + (collectionData.token || 'unknown');
    };
    console.log('ex1', getData(data));
})(mdModule || (mdModule = {}));
//# sourceMappingURL=mdModule.js.map
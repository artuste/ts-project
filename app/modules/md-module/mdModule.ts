module mdModule {
    var score:number = 34;


//Interfaces
    interface DataFunction {
        (n:number): number;
    }



//Arrow functions

    var data = {
        id: 10,
        token: 'zxcqe12ed()SDA'
    };

    var getData:(collectionData:{id: number; token?: string}) => string;

    getData = function (collectionData) {
        return collectionData.id + ' - ' + (collectionData.token || 'unknown');
    };

    console.log('ex1', getData(data));

}
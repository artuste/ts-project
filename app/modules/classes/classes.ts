interface ICarOptions {
    engine: Engine;
    price: number;
    color: string;
    year?: number
}

interface IEngine {

}

class Engine {
    constructor(public horsePower: number, 
                public engineType: string) {
    }
}

class Car {
    engine: IEngine;
    color: string;

    constructor(data: ICarOptions) {
        this.engine = data.engine;
    }
}


///////////////////

class Dashboard {
    content:string;

    constructor(content:string) {
        this.content = content;
    }

    get() {
        return this.content;
    }

    set(value) {
        this.content = value;
    }
}
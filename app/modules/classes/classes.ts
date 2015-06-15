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

var dashboard = new Dashboard();

dashboard.set('Some text');

console.log('content', dashboard.get());
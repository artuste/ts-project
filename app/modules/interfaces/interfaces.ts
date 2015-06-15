module interfaces {

    // person interface
    interface Person {
        name: string;
        age?: number;
        calc: (value: number) => number
    }

    var person : Person;

    person = {
        name: 'Conrad',
        age: 29,
        calc: function(v : number) {
            return this.name;
        }
    }

}
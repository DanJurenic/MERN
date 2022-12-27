class Ninja {
    constructor(name){
        this.name = name;
        this.health = 20;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log('Hello, my name is ' + this.name + '.');
        return;
    }
    showStats(){
        console.log(
            'Name: ' + this.name + '\n' +
            'Strength: ' + this.strength + '\n' +
            'Speed: ' + this.speed + '\n' +
            'Health: ' + this.health
        );
        return this;
    }
    drinkSake(){
        console.log("Let's have some Sake!");
        this.health += 10;
        return this;
    }
}


const ninja1 = new Ninja("Hawk");

ninja1.sayName();
ninja1.showStats();

ninja1.drinkSake();
ninja1.showStats();
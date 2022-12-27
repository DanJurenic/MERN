class Ninja {
    constructor(name){
        this.name = name;
        this.health = 20;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log('Hello, my name is ' + this.name + '.');
        return this;
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

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Wise men say: forgiveness is divine but never pay full price for late pizza.");
        return this;
    }
}

const sensei1 = new Sensei("MasterSplinter");

sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();
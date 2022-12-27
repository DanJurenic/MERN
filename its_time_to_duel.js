class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack( target ){
        target.res -= this.power;
        console.log(this.name + " is attacking " + target.name);
    }
    stats(){
        console.log(
            "Name: " + this.name + "\n" +
            "Cost: " + this.cost + "\n" +
            "Power: " + this.power + "\n" +
            "Res: " + this.res
            );
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play( target ){
        if( target instanceof Unit ){
            if ( this.stat == "power"){
                target.power += this.mag;
                console.log("Targeting: " + target.name);
            } else if (this.stat == "res"){
                target.res += this.mag;
                console.log("Targeting: " + target.name);
            }
        } else {
            throw new Error( "Target must be a unit!");
        }
    }
    textOf(){
        console.log("Text of " + this.name + " is: " + this.text);
    }
}

console.log("Turn 1:")
const unitRed = new Unit("Red Belt Ninja", 3, 3, 4);
unitRed.stats();
const effectHardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "res", +3);
effectHardAlgo.textOf();
effectHardAlgo.play(unitRed);
unitRed.stats();

console.log("Turn 2:");
const unitBlack = new Unit("Black Belt Ninja", 4, 5, 4);
unitBlack.stats();
const effectUnPromRej = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
effectUnPromRej.textOf();
effectUnPromRej.play(unitRed);
unitRed.stats();

console.log("Turn 3:");
const effectPairProg = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", +2);
effectPairProg.textOf();
effectPairProg.play(unitRed);
unitRed.stats();
unitRed.attack(unitBlack);
unitBlack.stats();
function declareWinner(fighter1, fighter2, firstAttacker) {
  if (firstAttacker.toString() === fighter1.toString()) {
    while (fighter1.health >= 0 && fighter2.health >= 0) {
      attack(fighter1, fighter2);
      attack(fighter2, fighter1);
      if (fighter2.health <= 0) return fighter1.toString();
      if (fighter1.health <= 0) return fighter2.toString();
      console.log('1: ', fighter2.health)
      console.log('2: ', fighter1.health)
    }
  } else {
    while (fighter1.health >= 0 && fighter2.health >= 0) {
      attack(fighter2, fighter1);
      attack(fighter1, fighter2);
      console.log('2: ', fighter1.health)
      console.log('1: ', fighter2.health)
      if (fighter1.health <= 0) return fighter2.toString();
      if (fighter2.health <= 0) return fighter1.toString();
    }
  }
}

function attack(a,d) {
  d.health -= a.damagePerAttack;
}

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

var f1 = new Fighter("Lew", 10, 2);
var f2 = new Fighter("Harry", 5, 4);
// declareWinner(f1,f2,"Lew");
declareWinner(f2,f1,"Lew");

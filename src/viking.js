// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(newViking) {
    this.vikingArmy.push(newViking);
  }
  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }

  vikingAttack() {
    let damagedSaxon =
      this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];

    let attackingViking =
      this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

    let result = damagedSaxon.receiveDamage(attackingViking.strength);

    if (damagedSaxon.health <= 0) {
      for (let index = 0; index < this.saxonArmy.length; index++) {
        if (this.saxonArmy[index].health <= 0) {
          this.saxonArmy.splice(index, 1);
        }
      }
    }
    return result;
  }

  saxonAttack() {
    let damagedViking =
      this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

    let attackingSaxon =
      this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];

    let result = damagedViking.receiveDamage(attackingSaxon.strength);

    if (damagedViking.health <= 0) {
      for (let index = 0; index < this.vikingArmy.length; index++) {
        if (this.vikingArmy[index].health <= 0) {
          this.vikingArmy.splice(index, 1);
        }
      }
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

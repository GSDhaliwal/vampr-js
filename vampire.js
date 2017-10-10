class Vampire {
  constructor(name) {
    this.name = name;
    this.offspring = [];
    this.creator = null;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // returns the more senior vampire out of two vampires. (Who is closer to the original vampire)
  moreSeniorVampire(vampire) {

  } 

  // Returns the closest common ancestor of two vampires.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;
class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

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
    let numberOfVampiresTillLord = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampiresTillLord++;
    }

    return numberOfVampiresTillLord;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let numberOfVampiresTillLordOpponent = 0;
    let otherVampire = vampire;

    while (otherVampire.creator) {
      otherVampire = otherVampire.creator;
      numberOfVampiresTillLordOpponent++;
    }
    
    if (this.numberOfVampiresFromOriginal < numberOfVampiresTillLordOpponent) {
      return true;
    } else {
      return false;
    }
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name){
      return name;
    }
    for (const descendant of this.offspring) {
      const foundName = descendant.vampireWithName(name);
      if (foundName !== null) {
        return foundName;
      }
    }
    return null;
  };

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalDescendents = 0; // 1
    if (this) {
      totalDescendents += 1;
    }
    for (const descendant of this.offspring) {
      const totalOffsprings = descendant.totalDescendents;
      totalDescendents += totalOffsprings; 
    }
    return totalDescendents;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let vampires = [];

    if (this.yearConverted > 1980) {
      vampires.push(this);
    }

    for (const descendant of this.offspring) {
      const vampiresBornAfter1980 = descendant.allMillennialVampires;
      vampires = vampires.concat(vampiresBornAfter1980);
    }

    return vampires;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;
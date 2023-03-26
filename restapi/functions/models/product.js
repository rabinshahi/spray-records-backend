/**
 * Product
 */
class Product {
/**
 * Create value
 * @param {String} name
 * @param {String} manufacturer
 * @param {String} epa
 * @param {String} level
 * @param {String} activeIngredients
 * @param {String} concentrations
 * @param {Bool} isBookMarked
 */
  constructor(
      name,
      manufacturer,
      epa,
      level,
      activeIngredients,
      concentrations,
      isBookMarked) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.epa = epa;
    this.level = level;
    this.activeIngredients = activeIngredients;
    this.concentrations = concentrations;
    this.isBookMarked = isBookMarked;
  }
}

module.exports = Product;

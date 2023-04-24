class Currency {
  constructor(code, name) {
    this.currencyCode = code;
    this.currencyName = name;
  }

  set code(newCode) {
    this.currencyCode = newCode;
  }

  get code() {
    return this.currencyCode;
  }

  set name(newName) {
    this.currencyName = newName;
  }

  get name() {
    return this.currencyName;
  }

  displayFullCurrency() {
    return `${this.currencyName} (${this.currencyCode})`;
  }
}

export default Currency;

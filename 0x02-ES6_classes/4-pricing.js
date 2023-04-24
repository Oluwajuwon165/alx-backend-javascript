export default class Pricing {
  constructor(amount, currency) {
    this.amountValue = amount;
    this.currencyValue = currency;
  }

  get amount() {
    return this.amountValue;
  }

  set amount(value) {
    this.amountValue = value;
  }

  get currency() {
    return this.currencyValue;
  }

  set currency(value) {
    this.currencyValue = value;
  }

  displayFullPrice() {
    return `${this.amountValue} ${this.currencyValue.name} (${this.currencyValue.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

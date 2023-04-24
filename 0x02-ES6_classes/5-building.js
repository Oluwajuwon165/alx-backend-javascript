class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._sqft} sqft`;
  }
}

export default Building;

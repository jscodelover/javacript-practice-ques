class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduction() {
    console.log(`Hey I'm ${this.name} and I'm ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Hey, I'm ${this.type} type`);
  }
}

const wizard1 = new Wizard("Shelly", "healer");
const wizard2 = new Wizard("Shawn", "dark margic");

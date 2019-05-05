function Player(name, type) {
  this.name = name;
  this.type = type;
}

Player.prototype.introduction = function() {
  console.log(`Hey I'm ${this.name} and I'm ${this.type}`);
};

const wizard1 = new Player("Shelly", "healer");
const wizard2 = new Player("Shawn", "dark margic");

wizard1.play = function() {
  console.log(`Hey, I'm ${this.type} type`);
};

wizard2.play = function() {
  console.log(`Hey, I'm ${this.type} type`);
};

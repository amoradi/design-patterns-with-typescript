interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer {
  update(qualifiedHouses: House[])
}

class House {
  address: string;
  price: number;
  size: number;
  lot: number;

  constructor(address: string, price: number, size: number, lot: number) {
    this.address = address;
    this.price = price;
    this.size = size;
    this.lot = lot;
  }
}

class Zillow implements Subject {
  private observers: Observer[] = [];
  private qualifiedHouses: House[] = [];
  private houses: House[] = [];
  private price: number = 0;
  private size: number = 0;
  private lot: number = 0;

  constructor(houses: House[], price: number, size: number, lot: number) {
    this.houses = houses;
    this.price = price;
    this.size = size;
    this.lot = lot;
  }

  registerObserver(o: Observer) {
     this.observers.push(o);
  }

  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.qualifiedHouses);
    }
  }

  isHouseQualified(house: House) {
    const { price, size, lot } = house;

    return (price <= this.price && size >= this.size && lot >= this.lot);
  }

  getQualifiedHouses() {
    this.houses.forEach(house => {
      if (this.isHouseQualified(house)) {
        this.qualifiedHouses.push(house);
      }
    });
    this.notifyObservers();
  }

  addHouse(house: House) {
    this.houses.push(house);
    
    if (this.isHouseQualified(house)) {
      this.qualifiedHouses.push(house);
      this.notifyObservers();
    }
  }

  removeHouse(house: House) {
    let index = this.houses.indexOf(house);
    this.houses.splice(index, 1);

    let q_index = this.qualifiedHouses.indexOf(house);

    if (q_index > -1) {
      this.qualifiedHouses.splice(q_index, 1);
      this.notifyObservers();
    }
  }
}

class MoradiFamily implements Observer {
  private subject: Subject;

  constructor(zillow: Subject) {
    this.subject = zillow;
    zillow.registerObserver(this);
  }

  update(qualifiedHouses: House[]) {
    console.log("------");
    console.log(qualifiedHouses);
    console.log("------");
  }
}

let miMikeHouse = new House("123 Covert Rd", 200000, 2300, 2);
let tnErnieHouse = new House("777 Hills Rd", 300000, 3100, 5);
let upperJoe = new House("123 Up", 80000, 2500, 10);

let zillowInstance = new Zillow([miMikeHouse, tnErnieHouse], 225000, 2299, 2);
let familyValues = new MoradiFamily(zillowInstance);

zillowInstance.getQualifiedHouses();
zillowInstance.addHouse(upperJoe);
zillowInstance.removeHouse(miMikeHouse);

interface Subject{
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer{
   update(temperature: number);
}

// ------- abstract classes -------
// - [ base class ]
// -- overridden methods are prefaced with "abstract"
// - [ options base class ]
// -- decoratedBase attribute
// -- overridden methods are prefaced with "abstract"

abstract class Bass {
  public fretboard: string;

  public getFretboard(): string {
    return this.fretboard;
  }

  public abstract cost(): number;
}

abstract class BassOptions extends Bass {
  decoratedBass: Bass;
  public abstract getFretboard(): string;
  public abstract cost(): number;
}

// ------- Options classes -------
// - require Bass param
// -- thus require constuctor method

class RosewoodFretBoard extends BassOptions {
  decoratedBass: Bass;

  constructor(bass: Bass) {
    super();
    this.decoratedBass = bass;
  }

  public getFretboard(): string {
    return this.decoratedBass.getFretboard() + ', with Rosewood fretboard';
  }

  public cost(): number {
    return this.decoratedBass.cost() + 50;
  }
}

class IvoryInlays extends BassOptions {
  decoratedBass: Bass;

  constructor(bass: Bass) {
    super();
    this.decoratedBass = bass;
  }

  public getFretboard(): string {
    return this.decoratedBass.getFretboard() + ', with Ivory Inlays';
  }

  public cost(): number {
    return this.decoratedBass.cost() + 299;
  }
}

// ------- Type classes -------
// - implement those methods prefaced with 'abstract' from base abstract class
class FenderPrecision extends Bass {
  public fretboard = "maple, 24 fret";

  public cost(): number {
    return 1200;
  }
}

class FenderJazz extends Bass {
  public fretboard = "rosewood, 24 fret";

  public cost(): number {
    return 900;
  }
}

// ------- Implementation -------
let aaronsFavBass = new FenderPrecision();
let aaronsMostFavBass = new IvoryInlays(aaronsFavBass);


class Cat{
    constructor(_name, _weight, _speed) {

        this._name = _name;
        this._weight = _weight;
        this._speed = _speed;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }
    scream(){
        return this._name + "meo meo";
    }
    catchRat(rat){
        if (this.speed > rat.speed){
            return this.name + "da bat duoc chuot" + rat.name;
        }
    }
    eatRat(rat){
        if (rat.status){
            rat.status = false;
            this.weight += rat.weight;
        }
    }
}
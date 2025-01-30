class Cart{
    item: Item;
    quantity: Number;
}

class Item{
    private name: string;
    private active: boolean;

    public constructor(name: string, active: boolean){
        this.name = name;
        this.active = active
    }

    public getName(){
        return this.name
    }

    public getActive(){
        return this.active
    }

}



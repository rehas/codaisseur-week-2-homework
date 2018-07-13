class ShoppingCart{
    constructor(){
        this.items = []
    }
    
    getItems() {
        return this.items
    }
    
    addItem(itemName, quantity, price){
        const newItem = {
            name : itemName,
            quantity : quantity,
            pricePerUnit : price
        }
        this.items.push(newItem)
    }
    
    clear(){
        this.items = []
    }
    
    clone(){
        const newCart = new ShoppingCart()
        this.items.map(x=>{
            newCart.addItem(x.name, x.quantity, x.pricePerUnit)
            return x
        })
        return newCart
    }
}

module.exports =ShoppingCart
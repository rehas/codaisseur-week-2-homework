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
            
            // console.log(x)
            newCart.addItem(x.name, x.quantity, x.pricePerUnit)
            return x
        })
        // console.log(newCart.items)
        // console.log(this.items)

        // const newCart = JSON.parse(JSON.stringify(this));
        return newCart
    }
}
module.exports =ShoppingCart
class Food{
    constructor(){
        var foodStock;
        var lastFed;
        this.image = loadImage("Milk.png");
    }

    getFoodStock(){
        var foodStockRef = database.ref('foodS');
        foodStockRef.on("value", function(data){
            foodStockCount = data.val();
        });
    }

    updateFoodStock(foodS){
        database.ref('/').update({
            foodStock : foodS
        });
    }

    bedroom(){
        background(this.bedroom, 550, 500);
    }

    garden(){
        background(this.garden, 550, 500);
    }

    washroom(){
        background(this.washroom, 550, 500);
    }

    display(){
        var x=80,y=100;

        imageMode(CENTER);


        if(this.foodStock!= 0){
            for(var i = 0; i<20; i++){
                if(i%10==0){
                    x =80;
                    y=y+50;
                }
                image(this.image, x, y, 50, 50);
                x=x+30;
            }
        }
    }

}
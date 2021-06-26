console.log("script.js is ONLINE🟢");

let obj1 = {
    firstName : "Wingardium",
    lastName : "Leviosa",
    user : "Ron",
    fullNameArrow1 : () => {  
        console.log(this);
        console.log(this.firstName + " " + this.lastName)
    },
    fullNameFunction1 : function() {  
        console.log(this);
        console.log(this.firstName + " " + this.lastName)
    }, 
    getThis: () => { console.log(this)}
};

let obj2 = {
    firstName : "Avada",
    lastName : "Kedavra",
    generalUser : "Voldemort",
    fullNameArrow2 : () => {
        console.log(this.firstName + " " + this.lastName)
    },
    fullNameFunction2 : function() { 
        console.log(this);
        return (this.firstName + " " + this.lastName)
    }, 
};

var bindedFunction = () => {
    console.log(object2.fullNameFunction2());
}
//1st and Pike
var pike = {
    customerPerHours: [],
    minCustomers: 23,
    maxCustomers: 65,
    cookieAverage: 6.3,
    randomCustomerPerHour: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
   dailyCustomerCount: function(){
        for (var i=0; i<15; i++){
            this.customerPerHours.push(this.randomCustomerPerHour());
        }

   },
}

//SeaTac Aiport
var seaTac = {
    customerPerHours: [],
    minCustomers: 3,
    maxCustomers: 24,
    cookieAverage: 1.2,
    randomCustomerPerHour: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
   dailyCustomerCount: function(){
        for (var i=0; i<15; i++){
            this.customerPerHours.push(this.randomCustomerPerHour());
        }

   },
}

//Seattle Center
var seattleCen = {
    customerPerHours: [],
    minCustomers: 11,
    maxCustomers: 38,
    cookieAverage: 3.7,
    randomCustomerPerHour: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
   dailyCustomerCount: function(){
        for (var i=0; i<15; i++){
            this.customerPerHours.push(this.randomCustomerPerHour());
        }

   },
}

//Capitol Hill
var capitolHill = {
    customerPerHours: [],
    minCustomers: 20,
    maxCustomers: 38,
    cookieAverage: 2.3,
    randomCustomerPerHour: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
   dailyCustomerCount: function(){
        for (var i=0; i<15; i++){
            this.customerPerHours.push(this.randomCustomerPerHour());
        }
    
   },
}

//Alki
var alki = {
    minCustomers: 2,
    maxCustomers: 16,
    cookieAverage: 4.6,
    randomCustomerPerHour: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
   dailyCustomerCount: function(){
        for (var i=0; i<15; i++){
            this.customerPerHours.push(this.randomCustomerPerHour());
        }

   },
}



capitolHill.dailyCustomerCount();
console.log(capitolHill.customerPerHours.toString());
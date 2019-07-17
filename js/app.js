
/* 
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

/*Alki
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




/*
dailyCustomerCount= dailyCustomerCount + alki.randomCustomerPerHour[i];
    var gunElement = document.createElement('li');
    gunElement.textContent =storeHours[i] + ': ' + numGuns + ' cookies';
    alki.appendChild(gunElement); 
    eastVinewoodElem.appendChild(gunElement); */

    var storeHours =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

    function CookieShop(name, min, max, avg){

        this.id= name;
        this.minCustomerCount= min;
        this.maxCustomerCount=max;
        this.cookieAverage=avg;
        this.customersPerHour= [];
        //being displayed in html
        this.cookiesPerHour= [];
    }
    //
    CookieShop.prototype.randomCustomerPerHour= function(){
        return Math.floor(Math.random() * (this.maxCustomerCount - this.minCustomerCount + 1)) + this.minCustomerCount;
    };

    CookieShop.prototype.dailyCustomerCount= function(){
        for (var i=0; i<storeHours.length; i++){
            this.customersPerHour.push(this.randomCustomerPerHour());
        }
    }
    CookieShop.prototype.dailyCookieCount= function(){
        this.dailyCustomerCount();
        for (var i=0; i<storeHours.length; i++){
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.cookieAverage));
        }
    }
    CookieShop.prototype.displayData= function(){
        var totalCookieCount=0;
        this.dailyCookieCount();
        var ul=document.getElementById(this.id);
        for (var i=0; i<storeHours.length; i++){
            totalCookieCount+= this.cookiesPerHour[i]
            var li=document.createElement('td');
            li.textContent=storeHours[i]+ ": " + this.cookiesPerHour[i] + " cookies";
            ul.appendChild(li);
        }
        
        var li=document.createElement('td');
        li.textContent= totalCookieCount + " cookies total";
        ul.appendChild(li);



    }
           
    

    var pikeShop= new CookieShop('pike', 23, 65, 6.3);
    var seaTacShop= new CookieShop('seaTac', 3, 24, 1.2);
    var seattleCenShop= new CookieShop('seattleCen', 11, 38, 3.7);
    var capitolHillShop= new CookieShop('capitolHill', 20, 38, 2.3);
    var alkiShop= new CookieShop('alki', 2, 16, 4.6);
    
    pikeShop.displayData();
    seaTacShop.displayData();
    seattleCenShop.displayData();
    capitolHillShop.displayData();
    alkiShop.displayData();

    
   




    //I want how many cookies are sold at each hour, at each location, put into  an array, and then a table, rendered on my html page
    //var salesData= ?    CookieShop()=[]?
    
    







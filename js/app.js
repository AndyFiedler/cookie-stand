
    var storeHours =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
    var hourlyTotals =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
        var tbody = document.getElementsByTagName('tbody')[0];
        console.log(tbody);
        var newTr= document.createElement('tr');
        tbody.appendChild(newTr);
        var newTd= document.createElement('td');
        newTd.textContent = this.id;
        newTr.appendChild(newTd);
       
        for (var i=0; i<storeHours.length; i++){
            totalCookieCount+= this.cookiesPerHour[i];
            hourlyTotals[i]+= this.cookiesPerHour[i];
            var td=document.createElement('td');
            td.textContent=  this.cookiesPerHour[i];
            newTr.appendChild(td);
        }
        
        var td=document.createElement('td');
        td.textContent= totalCookieCount;
        newTr.appendChild(td);




    }
           
    

    var pikeShop= new CookieShop('Pike', 23, 65, 6.3);
    var seaTacShop= new CookieShop('SeaTac', 3, 24, 1.2);
    var seattleCenShop= new CookieShop('Seattle Center', 11, 38, 3.7);
    var capitolHillShop= new CookieShop('Capitol Hill', 20, 38, 2.3);
    var alkiShop= new CookieShop('Alki', 2, 16, 4.6);
    


    function createBody(){
        pikeShop.displayData();
        seaTacShop.displayData();
        seattleCenShop.displayData();
        capitolHillShop.displayData();
        alkiShop.displayData();

    }
  


    function createHeader(){
       var thead = document.getElementsByTagName('thead')[0];
      var newTr= document.createElement('tr');
      thead.appendChild(newTr);
      var newTh= document.createElement('th');
      newTr.appendChild(newTh);
      for (var i=0; i<storeHours.length; i++){
            var newTh= document.createElement('th');
            newTh.textContent = storeHours[i];
            newTr.appendChild(newTh);
        }
        var th=document.createElement('th');
        th.textContent= "Total Cookies";
        newTr.appendChild(th);

    }
    

    

    function createFooter(){
        var totalCookieCount=0;
        var tfoot = document.getElementsByTagName('tfoot')[0];
        var newTr= document.createElement('tr');
        tfoot.appendChild(newTr);
        var newTd= document.createElement('td');
        newTd.textContent = "Hourly Totals";
        newTr.appendChild(newTd);
        for (var i=0; i<storeHours.length; i++){
              var newTd= document.createElement('td');
              newTd.textContent = hourlyTotals[i];
              newTr.appendChild(newTd);
              totalCookieCount+= hourlyTotals[i];
        }
        var td=document.createElement('td');
        td.textContent= totalCookieCount;
        newTr.appendChild(td);
    }

    function createTable(){
        createHeader();
        createBody();
        createFooter();
    }
   
createTable();

var form = document.getElementById('newshop');

preventDefault();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    /*
    <label>Shop Name:</label>
                <input type="text" name="id" size="20"><br>
                <label>Minimum Customers</label>
                <input type="text" name="minCustomers" size="20"><br>
                <label>Maximum Customers</label>
                <input type="text" name="maxCustomers" size="20"><br>
                <label>Average Cookies Per Customer</label>
                <input type="text" name="cookieAverage" size="20"><br>
                <input type="submit" value="Add a Shop"><br>
    */
   var name = document.getElementById('name').value;
   var minCustomers = document.getElementById('minCustomers').value;
   var maxCustomers = document.getElementById('maxCustomers').value;
   var avgCustomers = document.getElementById('cookieAverage').value;

   var newShop = new CookieShop(name, minCustomers, maxCustomers, avgCustomers);
   newShop.displayData();

   var table = document.getElementById('sales-data');
   var footer = document.querySelector('table#sales-data tfoot');
   footer.innerHTML = '';
   createFooter();


});



    







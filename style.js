    let textArea = document.querySelector('.contText');
    let win = document.querySelector('.win');
    let loss = document.querySelector('.loss');
    let tie = document.querySelector('.tie');
    win.innerHTML = 0;
    loss.innerHTML = 0;
    tie.innerHTML = 0;
    textArea.innerHTML = 'Start Your Match';
    let resturltOfMatch = {
        win : 0,
        loss : 0,
        tie : 0,
    }

    // bat &   bat  = tie || bat  &   ball = batwin || bat  & Wicket = wicket Win 
    // wicket & bat = Wicket win || wicket & ball = ballwin  || wicket  & wicket = Tie
    // ball & ball = tie || ball & wicket  = ballwin || ball & bat = bat win
    function userChoice(val) {
        let a = Math.round(Math.random() * 2);
        let computer;
        if( a == 1) {
            computer = 'bat';
        } else if (a == 2) {
            computer = 'ball';
        }else {
            computer = 'wicket';
        }
        
        if(val === 'bat') {
                if(computer === 'bat') {
                    textArea.innerHTML = `Computer Choice is ${computer} and yous is ${val} so its tie`;
                    resturltOfMatch.tie += 1;
                    tie.innerHTML = resturltOfMatch.tie;
                    console.log(resturltOfMatch);
                } else if (computer == 'wicket') {
                    textArea.innerHTML = `Computer Choice is ${computer} and yous is ${val} so computer win`;
                    resturltOfMatch.loss += 1;
                    loss.innerHTML = resturltOfMatch.loss;
                    console.log(resturltOfMatch);
                } else {
                    textArea.innerHTML = `Computer Choice is ${computer} and yous is ${val} so user win`;
                    resturltOfMatch.win += 1;
                    win.innerHTML = resturltOfMatch.win;
                    console.log(resturltOfMatch);
                }
                
        }else if(val = 'ball' ) {
            if(computer === 'ball') {
                textArea.innerHTML = `Computer Choice is ${computer} and yous is ${val} so its tie`;
                resturltOfMatch.tie += 1;
                tie.innerHTML = resturltOfMatch.tie;
            } else if (computer == 'wicket') {
                textArea.innerHTML = `Computer Choice is ${computer} and yous is ${val} so user win`;
                resturltOfMatch.win += 1;
                win.innerHTML = resturltOfMatch.win;
            } else {
                textArea.innerHTML = `Computer Choice is ${computer} and yous is ${val} so computer win`;
                resturltOfMatch.loss += 1;
                loss.innerHTML = resturltOfMatch.loss;
            }
        }else {
            if(computer === 'wicket') {
                textArea.innerHTML = `Computer Choice is ${computer} and yous is ${val} so its tie`;
                resturltOfMatch.tie += 1;
                tie.innerHTML = resturltOfMatch.tie;
            } else if (computer == 'bat') {
                textArea.innerHTML = `Computer Choice is ${computer} and yous is ${val} so user win`;
                resturltOfMatch.win += 1;
                win.innerHTML = resturltOfMatch.win;
            } else {
                textArea.innerHTML = `Computer Choice is ${computer} and yous is ${val} so computer win`;
                resturltOfMatch.loss += 1;
                loss.innerHTML = resturltOfMatch.loss;
            }
        }
    }

function reset() {
    textArea.innerHTML = 'Start Your Match';
    resturltOfMatch.tie = 0;
    resturltOfMatch.win = 0;
    resturltOfMatch.loss = 0;
    win.innerHTML = 0;
    loss.innerHTML = 0;
    tie.innerHTML = 0;
} 

let a = {
    "cartId": "CART12345",
    "userId": "USER67890",
    "items": [
        {
            "productId": "P001",
            "productName": "Wireless Mouse",
            "quantity": 2,
            "price": 499,
            "total": 998
        },
        {
            "productId": "P002",
            "productName": "Laptop Stand",
            "quantity": 1,
            "price": 1299,
            "total": 1299
        }
    ],
    "cartTotal": 2297,
    "currency": "INR"
    }
    
    console.log("dssadadasdasdasdsad");
    let b = {
        cart : "area",
        val : 2000,
    }
        console.log(typeof(a));
        let c = JSON.stringify(a);
        console.log(c)
        console.log(JSON.parse(c));
        let k = JSON.parse(c);
        console.log(typeof(k));
    
        
    console.log("dssadadasdasdasdsad");
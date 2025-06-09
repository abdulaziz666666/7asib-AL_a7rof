var lCButton = document.getElementById("LCButton");
var pMButton = document.getElementById("pmb");
var storage = document.getElementById("passwords");
var clearStorage = document.getElementById("clearPasswords");
lCButton.addEventListener("click", lettersCounter);
pMButton.addEventListener("click", makePassword);
storage.addEventListener("click", () => {
    
    if(localStorage.getItem("passWord") === null)
       alert("المخزن فارغ");
    else                    
        alert(localStorage.getItem("passWord"));
});
clearStorage.addEventListener("click", () => {
    localStorage.clear();
});



class Password{
    constructor(passwordName, password){
        this.setPassword(password);
        this.setPasswordName(passwordName);
    }
    setPassword(password){
        this.password = password;
    }
    setPasswordName(passwordName){
        this.passwordName = passwordName;
    }
    getPassword(){
        return this.password;
    }
    getPasswordName(){
        return this.passwordName;
    }
}



// thats varibles for makes a password generator.

var rN;
var randomForMarks;
var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var marks = ['_','*','&','^','%','$','#','@','!','`','~','<','>','?','.','/','[',']',';',':',',','(',')','-','=','+'];
var rNPass;
var passwordName;
var password;
var passN;
var randForMakesCapital;
var randomChoice;
var organizer;

var passWord;

function makePassword(){
    
    
    passN = window.prompt("ادخل عدد الأحرف المراد في كلمة المرور");
    // this for loop is working to make the password generator,
    // it's literly makes all the job.
    
    for(var i = 0; i < passN; i++){
        
            rNPass = Math.round(Math.random() * 10);
            rN = Math.round(Math.random() * 10);        
            randomForMarks = Math.round(Math.random() * 10);

            randForMakesCapital = Math.random();

        // this if statement make a randomize in capital letters and small,
        // it's make a letters upperCase if a "randForMakesCapital" varible equals 0.5 or greater.
        
        

            if(randForMakesCapital >= 0.5){
                    if(i == 1){ randomChoice = 1}
                if(randomChoice <= 1 && randomChoice < 2){
                    password += chars[rNPass].toUpperCase();
                }
                else if(randomChoice >= 2 && randomChoice < 3){
                    
                    password += chars[rNPass].toUpperCase();
                    password += marks[randomForMarks];
                    password += rN;

                }       
                else{
                    password += chars[rNPass].toUpperCase();
                    password += marks[randomForMarks];
                    password += rN;
                }
            }
            else{

                if(randomChoice <= 1){
                password += chars[rNPass].toLowerCase();
                password += rN;
                password += marks[randomForMarks];
                }
                else if(randomChoice >= 2 && randomChoice < 3){
                
                    password += chars[rNPass].toLowerCase();
                    password += marks[randomForMarks];
                    password += rN;

                }       
                else{
                    password += chars[rNPass].toLowerCase();
                    password += marks[randomForMarks];
                    password += rN;
                }
            }
            
    }       
            
            
    
    passwordName = window.prompt("أدخل إسم كلمة المرور");
    password = password.substr(9, passN);
    organizer = password[0];

    
    
        if(organizer != marks[0] && organizer != marks[1] && organizer != marks[2] && organizer != marks[3] && organizer != marks[4] && organizer != marks[5] && organizer != marks[6] && organizer != marks[7] && organizer != marks[8] && organizer != marks[9] && organizer != marks[10] && organizer != marks[11] && organizer != marks[12] && organizer != marks[13] && organizer != marks[14] && organizer != marks[0] && organizer != marks[16] && organizer != marks[17] && organizer != marks[18] && organizer != marks[19] && organizer != marks[20] && organizer != marks[21] && organizer != marks[22] && organizer != marks[23] && organizer != marks[24] && organizer != marks[25] && organizer != marks[26] && organizer != 1 && organizer != 2 && organizer != 3 && organizer != 4 && organizer != 5 && organizer != 6 && organizer != 7 && organizer != 8 && organizer != 9) { console.log("the password is compeleted successfully!"); }
        else { organizer = chars[rN]; }    

    
        passWord = new Password(passwordName, password);
        alert("اسم كلمة المرور المصنوعة حاليا هو : " + passWord.getPasswordName());
        alert("كلمة المرور المصنوعة هي : " + passWord.getPassword());
        localStorage.setItem('passWord', JSON.stringify(passWord));
}



function lettersCounter (){
    textA = window.prompt("فضلا ادخل النص ليتم حساب عدد الأحرف به.");
    counterV = 0;
    for(i = 0; i < textA.length; i++, counterV++){
        if(textA[i] == false)
            counterV--;
    }
    alert(counterV + " حرف");
}


function openAccount(){
    window.open("https://twitter.com/abduluziz666666");   
}
function openUPDATES(){
    window.open("update.html");
}

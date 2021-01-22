//------------>>>> Problem 1

function kilometerToMeter(value){
    if(value <= -1)
        return `Negative value is not accepted please enter again`;
    else
        return value * 1000;
}

console.log(kilometerToMeter(50));



//------------>>>> Problem 2

function budgetCalculator (watch=0, phone=0, laptop=0){
    if(watch <= -1 || phone <= -1 || laptop <= -1)
        return `Negative value is not accepted please enter again`;
    else
        return (watch * 50) + (phone * 100) + (laptop * 500);
}
console.log(budgetCalculator(10,10,10));

//------------>>>> Problem 3

function hotelCost(days){
    if(days <= -1)
        return `Negative value is not accepted please enter again`;
    else if (days <= 10)
        return days * 100;
    else if (days <= 20)
        return ((days-10)*80) + 1000; // or you can (days * 10) = 1000 ultimately.
    else if (days >20)
        return ((days - 20)*50) + 1800;  // (10 * 100) + (10 * 80)) =1800 ultimately
}
console.log(hotelCost(12));



//------------>>>> Problem 4

function megaFriend(friendName){
    let megaName = friendName[0];
    for(let i=0; i<friendName.length; i++){
        if(friendName == " " || friendName == "")
            return "Your given array is empty please try again"
        else if(friendName[i].length > megaName.length)
            megaName = friendName[i];
    }
    return megaName;
}

let friendsName = ["Golam Rabby", "Rony khan", "Akash ali", "Sujon khan"];
console.log(megaFriend(friendsName));
const fruitType = "Banana";

switch(fruitType){
   case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
    case "Apple":
        console.log("Apple are $0.32 a pound.");
        break;
    case "Banana":
        console.log("Bananas are $0.48 a pound.");
        break;
    case "Cherries":
        console.log("Cherries are $3.00 a pound");
        break;
    case "Mangoes":
        console.log("Mangoes are $0.56 a pound ");
        break;
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound");
        break;
    default:
        console.log (`Sorry we are out of ${fruitType}.`)
}
console.log("is there anything else you would like?")
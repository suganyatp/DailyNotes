/* Switch - 
if no break is defined, then it prints everything.
*/

function browser(browserVersion) {  // parameter
//let browserVersion=160
switch (browserVersion) {
    case 160:
        console.log("edge browser");
        break;
    
    case 160:
        console.log("chrome browser");
        break;
    
    case 120:
        console.log("firefox browser");
        break;
    
    default:
        console.log("invalid browser");
        break;
}
}
browser(100) //argument
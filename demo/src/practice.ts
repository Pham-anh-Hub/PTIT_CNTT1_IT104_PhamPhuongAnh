// Khai báo kiểu dữ liệu enum
enum SystemMode {
    AUTO = "AUTO", // Chế độ tự đông
    MANUAL = "MANUAL", // Chế độ thủ công
}

// Khai báo kiểu literal type
type Direction = "left" | "right" | "forward" | "backward";


// hàm logMovement
const logMovement = (direction : Direction) : void => {
    console.log("🔁 Moving: ", direction);   
}

const logMode = (systemMode : SystemMode) : void => {
    console.log(" 🔗System set to ", systemMode ,"mode");
} 

const processInput = (value : any) : void => {
    console.log("Receive input: ", value);
}

const validateInput = (target : unknown) : void => {
    if(typeof(target) == "number"){
        console.log("✅ Input: ", target);
    }else{
        console.log(`❌ Invalid input type`);
    }
}

const crash = (massage : string) : never => {
    throw new Error(massage);
}

logMovement("forward");
logMovement("left");
logMode(SystemMode.AUTO);
logMode(SystemMode.MANUAL);
processInput("Hello robot!");
validateInput(12);
processInput(876002);
validateInput("string");

try {
    crash("💥 SYSTEM CRASHED: Overheat detected!")
} catch (error) {
    console.log(error);
    
}
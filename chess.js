let queen = {
    direction: "S",
    position: {
        x1: 0,
        y1: 4
    }
}

function updatePosition(x, y) {
    queen.position.x1 = x;
    queen.position.y1 = y;
}

function jumpMoveForward(direction, Steps) {
    var temp = 0;
    var temp1 = 0;
    Steps=parseInt(Steps)
    switch (direction) {
        case "N":
            temp = queen.position.y1 - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.y1 = queen.position.y1 - Steps;
            } else {
                console.log("This move not allowed : N");
            }
            break;

        case "S":
            temp = queen.position.y1 + Steps;
            
            if (temp < 8 && temp >= 0) {
                queen.position.y1 = queen.position.y1 + Steps;
            } else {
                console.log("This move not allowed: S");
            }
            break;

        case "E":
            temp = queen.position.x1 + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x1 = queen.position.x1 + Steps;
            } else {
                console.log("This move not allowed: E");
            }
            break;

        case "W":
            temp = queen.position.x1 - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x1 = queen.position.x1 - Steps;
            } else {
                console.log("This move not allowed: W");
            }
            break;

        case "NE":
            temp = queen.position.x1 + Steps;
            temp1 = queen.position.y1 - Steps;
            
            if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                queen.position.x1 = queen.position.x1 + Steps;
                    queen.position.y1 = queen.position.y1 - Steps;
                    
                
            }
            else {
                console.log("This move not allowed: NE");
            }
            break;


            case "NW":
                temp = queen.position.x1 - Steps;
                temp1 = queen.position.y1 - Steps;
                if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                    queen.position.x1 = queen.position.x1 - Steps;
                        queen.position.y1 = queen.position.y1 - Steps;
                        
                    
                }
                else {
                    console.log("This move not allowed: NW");
                }
                break;
            
            case "SE":
                temp= queen.position.x1 + Steps;
                 temp1 = queen.position.y1 + Steps;
            if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                   queen.position.x1 = queen.position.x1 + Steps;
                    queen.position.y1 = queen.position.y1 + Steps;
                   
                
            }
            else {
                console.log("This move not allowed: SE");
            }
            break;

            case "SW":
                
                temp = queen.position.x1 - Steps;
                temp1 = queen.position.y1 + Steps;
                if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                         queen.position.x1 = queen.position.x1 - Steps;
                        queen.position.y1 = queen.position.y1 + Steps;
                       
                    
                }
                else {
                    console.log("This move not allowed");
                }
                break;
                

        
    }
}
while(true)
{
let direction=prompt("Enter the direction");
if(direction=="exit")

    break;

let Steps=prompt("Enter the steps");
jumpMoveForward(direction,Steps);
console.log("New position of queen: "+queen.position.x1,queen.position.y1);
}

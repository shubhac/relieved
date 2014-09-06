/**
 *
 * Created by sbkloaner-sbktech on 8/10/14.
 */

var vehicle3 = {
    type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
    ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
    ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
    ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
    ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
    numRangers: 4
};

function relieveDuty (vehicle, day){
    var offDuty = [];
    var onDuty = [];
    var x = vehicle["numRangers"];
    for (var i=0; i< x; i++){
        if(vehicle["ranger"+(i+1)]["dayOff"] == day){
            offDuty.push(vehicle["ranger"+(i+1)]);
        } else {
            onDuty.push(vehicle["ranger"+(i+1)]);
        }
        delete vehicle["ranger"+(i+1)];
        vehicle["numRangers"]--;
    }
    for(i=0; i<onDuty.length; i++){
        vehicle["ranger"+(i+1)] = onDuty[i];
        vehicle["numRangers"]++;
    }
    return offDuty;
};

var offToday = relieveDuty(vehicle3, "Friday");

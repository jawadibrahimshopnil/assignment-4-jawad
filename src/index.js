let seats = document.getElementsByClassName("seat");
var selectedSeatCount = 0;
let totalPrice = document.getElementById("totalPrice");
let grandTotal = document.getElementById("grandTotal");

for (const seat of seats) {
    seat.addEventListener("click", function (event) {
        let selectedSeat = event.target;
        let isSelected = selectedSeat.classList.contains("bg-PGreen");
        let seatLeft = document.getElementById("seatLeft");
        let formSeatCount = document.getElementById("formSeatCount");
        

        let appendTag = document.getElementById("appedSeatTag");
        let seatTagHtml = `
        <div id="selectedSeat${selectedSeatCount+1}" class="text-[#03071299]/[0.6] flex justify-between my-2">
        <p>${selectedSeat.innerText}</p>
        <p>economy </p>
        <p>550</p>
        </div>`;

        if (!isSelected && selectedSeatCount >= 4) {
            alert("You can not select more then 4 seats.");
            return;
        }
        if (isSelected) {
            console.log(document.getElementById(`selectedSeat${selectedSeatCount}`))
            if(document.getElementById(`selectedSeat${selectedSeatCount}`) !== null){
                document.getElementById(`selectedSeat${selectedSeatCount}`).remove();
            }
            price = parseInt(totalPrice.innerText) - 550
            totalPrice.innerText = price;
            grandTotal.innerText = price;
            
            seatLeft.innerText = parseInt(seatLeft.innerText) + 1;
            formSeatCount.innerText = parseInt(formSeatCount.innerText) - 1;
            selectedSeatCount -= 1;

            selectedSeat.classList.remove("bg-PGreen");
            selectedSeat.classList.add("bg-[#F7F8F8]");
            selectedSeat.classList.remove("text-white");
        } else {
            price = parseInt(totalPrice.innerText) + 550;
            totalPrice.innerText = price;
            grandTotal.innerText = price;

            appendTag.insertAdjacentHTML('beforeend', seatTagHtml);
            seatLeft.innerText = parseInt(seatLeft.innerText) - 1;
            formSeatCount.innerText = parseInt(formSeatCount.innerText) + 1;
            selectedSeatCount += 1;

            selectedSeat.classList.add("bg-PGreen");
            selectedSeat.classList.remove("bg-[#F7F8F8]");
            selectedSeat.classList.add("text-white");
        }

    });
}

let nextBTN = document.getElementById("nextBTN");
let modal = document.getElementById("modal");
let mainPage = document.getElementById("mainPage");

document.getElementById("nextBTN").addEventListener('click', function(){
    let number = document.getElementById("number").value != "";
    if(number && selectedSeatCount > 0){
        nextBTN.classList.remove("bg-gray-200");
        nextBTN.classList.add("bg-PGreen");

        mainPage.classList.add("hidden");
        modal.classList.remove("hidden");

    }else{
        console.log("ok");
        return;
    }
});


let couppnBtn = document.getElementById("cpnBtn");

couppnBtn.addEventListener('click', function(){
    let couppn = document.getElementById("cpn").value;
    let totalPrice = parseInt(document.getElementById("totalPrice").innerText);
    
    if(selectedSeatCount == 4){
        console.log(couppn);
        if(couppn == "NEW15"){
            grandTotal.innerText = totalPrice - ( totalPrice * 0.15);

        }else if(couppn == "Couple 20"){
            grandTotal.innerText = totalPrice - ( totalPrice * 0.20);
        }
    }
    
})
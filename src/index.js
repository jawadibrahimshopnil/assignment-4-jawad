let seats = document.getElementsByClassName("seat");
var selectedSeatCount = 0;
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
            seatLeft.innerText = parseInt(seatLeft.innerText) + 1;
            formSeatCount.innerText = parseInt(formSeatCount.innerText) - 1;
            selectedSeatCount -= 1;

            selectedSeat.classList.remove("bg-PGreen");
            selectedSeat.classList.add("bg-[#F7F8F8]");
            selectedSeat.classList.remove("text-white");
        } else {
            appendTag.insertAdjacentHTML('beforeend', seatTagHtml);
            seatLeft.innerText = parseInt(seatLeft.innerText) - 1;
            formSeatCount.innerText = parseInt(formSeatCount.innerText) + 1;
            selectedSeatCount += 1;

            selectedSeat.classList.add("bg-PGreen");
            selectedSeat.classList.remove("bg-[#F7F8F8]");
            selectedSeat.classList.add("text-white");
        }

        console.log(selectedSeat, seatTagHtml);
    });
}

let nextBTN = document.getElementById("nextBTN");
let modal = document.getElementById("modal");
let mainPage = document.getElementById("mainPage");

document.getElementById("nextBTN").addEventListener('click', function(event){
    
    if(selectedSeatCount > 0){
        nextBTN.classList.remove("bg-gray-200");
        nextBTN.classList.add("bg-PGreen");

        mainPage.setAttribute("hidden", "")
        modal.classList("hidden")

    }else{
        return;
    }
});
        
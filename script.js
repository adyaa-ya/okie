function showOutfit(){
    const shape = document.getElementById("bodyshape").value;
    const result = document.getElementById("result");

    let suggestion = "";

    switch(shape){
        case "Hourglass":
            suggestion = "Fitted dresses, belted tops, and wrap-style outfits highlight your balanced shape beautifully! \u2728";
            break;
        case "Pear":
            suggestion = "Try A - line skirts , bright tops , and structuted jackets to balance proportions.";
            break;
        case "Rectangle":
            suggestion = "Choose peplum tops , layered outfits , and flared jeans to add curves and definition.";
            break;
        case "Apple":
            suggestion ="Empire-waist dresses, flowy tops, and V-necks will be super flattering and comfy!";
            break;
        case "invertedTriangle":
            suggestion = "Go for V-necklines , A-line skirts, and wide-leg pants to balance your look.";
            break;
        default:
            suggestion = "Please select your body shape above \uD83D\uDC95";

        

        

    }
    result.innerHTML = <p>${suggestion}</p>;

}
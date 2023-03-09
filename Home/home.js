var indexValue = 1;
showImg(indexValue);

function slider(e){
    showImg(indexValue += e);
}

function showImg(e){
    var i;
    const img = document.getElementsByClassName("imgItem");
    const text = document.getElementsByClassName("descItem");
    if(e > img.length){
        indexValue = 1;
    } else if(e < 1){
        indexValue = img.length;
    }
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
        text[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
    text[indexValue - 1].style.display = "block";
}
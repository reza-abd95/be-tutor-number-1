function like(){
    const like=event.target.id;
    const number = like.slice(-1);;
    console.log(like)
    console.log(number);

    if (like === `like${number}`|| like === `num${number}`) {
        document.getElementById(`like${number}`).classList.toggle('fa-solid')
        document.getElementById(`num${number}`).classList.toggle('cur-number')
        document.getElementById(`num${number}`).classList.toggle('added-number')
    }
    else{
    }
}

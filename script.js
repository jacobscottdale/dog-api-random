let dogPicNum;

function resetPage() {
    //console.log('resetting page')
    $('.results-container').html('');
}

function renderDogImages(dogURL) {
    //console.log('inserting images into DOM');
    $('.results-container').append(
        `<img src='${dogURL}' alt='dog'>`
    );
}

function displayDogImages(dogList) {
    console.log(dogList);
    // Set the h2 to tell user how many pictures are being displayed
    //console.log(`User input: ${dogPicNum}`);
    $('.number-of-pics').html(dogPicNum);
    // For each url
    dogList.forEach(renderDogImages);
    $('.results').removeClass('hidden');
}

function getDogImages() {
    //console.log('getDogImages ran');
    fetch(`https://dog.ceo/api/breeds/image/random/${dogPicNum}`)
    .then(dogList => dogList.json())
    .then(dogListJson => displayDogImages(dogListJson.message))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function storeDogPicNum() {
    dogPicNum = $('#dog-pic-number').val();
    //console.log(`User input: ${dogPicNum}`);
}

function handleSubmit(){
    //console.log('waiting for submit')
    $('form').submit(event => {
        event.preventDefault();
        storeDogPicNum();
        resetPage();
        getDogImages();
    })
}

$(handleSubmit());
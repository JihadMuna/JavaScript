  // Get the checkbox
    const checkbox = document.querySelector("#checkbox");

    // Get the output image
    const image = document.querySelector('#image');

    checkbox.addEventListener('click', (e) => {
  //if the checkbox is checked, display the output image
  if ( checkbox.checked == true){
    image.style.display = "block";
} else {
    image.style.display = "none";
}
    });
  
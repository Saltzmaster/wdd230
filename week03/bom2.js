const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Declare chaptersArray and assign it to the result of getChapterList or an empty array if not available
let chaptersArray = getChapterList() || [];

// Populate displayed list of chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Button click event listener
button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value); // Call displayList with the input value
    chaptersArray.push(input.value); // Add chapter to the array
    setChapterList(); // Update localStorage
    input.value = ''; // Clear input
    input.focus(); // Set focus back to input
  }
});

// Function to display list item
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  li.append(deletebutton);
  list.append(li);

  // Event listener for delete button
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // Remove chapter from array and localStorage
    input.focus(); // Set focus back to input
  });
}

// Function to set localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to get localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete chapter
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // Remove ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList(); // Update localStorage
}

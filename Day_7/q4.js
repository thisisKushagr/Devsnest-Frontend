var library = [
    { 
        author: 'Bill Gates', 
        title: 'The Road Ahead', 
        readingStatus: true },
    { 
        author: 'Steve Jobs', 
        title: 'Walter Isaacson', 
        readingStatus: true },
    { 
        author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false }]; 

console.log("Author -- Title -- Reading Status");

for(item in library){
    console.log(library[item].author,'--',library[item].title,'--',library[item].readingStatus);
}
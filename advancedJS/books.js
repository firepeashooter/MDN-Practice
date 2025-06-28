function Book(title, author, pages, read){
    if (!new.target){
        throw Error("You must use the 'new' keyword to create a book.")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return title + " by " + author + " has " + pages + " pages";
    }
}


king = new Book("The Dark Tower", "Steven King", 579, "yes")

console.log(king.info())
// Övning - Bibblan

// 1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är title, author, numPages.
let book = {
  title: "Bröderna Lejonhjärta",
  author: "Astrid Lindgren",
  numPages: 248,
};

console.log("Object --- book", book);

// 2. Skapa en array av objekt med flera stycken böcker

// Skapar först en tom array
const books = [];

// Lägger till min första bok
books.push(book);

// Lägger till fler böcker
books.push(
  { title: "Ronja Rövardotter", author: "Astrid Lindgren", numPages: 235 },
  { title: "Mio min Mio", author: "Astrid Lindgren", numPages: 137 }
);

//Se om böckerna lagts till
console.log("Array ---  books", books);

// 3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars null. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.

function findBookByTitle(books, searchTitle) {
  // Använd find för att se om boktiteln finns med i listan
  const foundBook = books.find(
    (book) => book.title.toLowerCase() === searchTitle.toLowerCase()
  );
  console.log(foundBook);
  // Returnera boken (hela objektet) om den hittas, annars null
  return foundBook ? foundBook : null;
}

// Kalla på funktionen med den titeln man söker efter
findBookByTitle(books, "Mio min mio");

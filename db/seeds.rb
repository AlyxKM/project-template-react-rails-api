Book.destroy_all
User.destroy_all
Bookshelf.destory_all



Book.create(title: "Hitchiker's Guide to the Galaxy", genre: "Science Fiction", author_name: "Douglas Adams")
Book.create(title: "The Restaurant at the End of the Universe", genre: "Science Fiction", author_name: "Douglas Adams")
Book.create(title: "Life, the Universe, and Everything", genre: "Science Fiction", author_name: "Douglas Adams")
Book.create(title: "So Long, and Thanks for All the Fish", genre: "Science Fiction", author_name: "Douglas Adams")
Book.create(title: "Mostly Harmless", genre: "Science Fiction", author_name: "Douglas Adams")
Book.create(title: "Eragon", genre: "YA/High Fantasy", author_name: "Christopher Paolini")
Book.create(title: "Eldest", genre: "YA/High Fantasy", author_name: "Christopher Paolini")
Book.create(title: "Brisingr", genre: "YA/High Fantasy", author_name: "Christopher Paolini")
Book.create(title: "Inheritance", genre: "YA/High Fantasy", author_name: "Christopher Paolini")
Book.create(title: "The Alchemyst", genre: "YA/Fantasy", author_name: "Michael Scott")
Book.create(title: "The Magician", genre: "YA/Fantasy", author_name: "Michael Scott")
Book.create(title: "The Sorceress", genre: "YA/Fantasy", author_name: "Michael Scott")
Book.create(title: "The Necromancer", genre: "YA/Fantasy", author_name: "Michael Scott")
Book.create(title: "The Warlock", genre: "YA/Fantasy", author_name: "Michael Scott")
Book.create(title: "The Enchantress", genre: "YA/Fantasy", author_name: "Michael Scott")
Book.create(title: "The River Has Teeth", genre: "YA/Fantasy/LGBT", author_name: "Erica Waters")
Book.create(title: "Moon Cakes", genre: "YA/Fantasy/LGBT", author_name: "Suzanne Walker")
Book.create(title: "Beyond the Black Door", genre: "YA/Fantasy/LGBT", author_name: "A M Strickland")
Book.create(title: "The Scapegracers", genre: "YA/Fantasy/LGBT", author_name: "Hannah Abigail Clarke")
Book.create(title: "Cinderella is Dead", genre: "YA/Fantasy/LGBT", author_name: "Kaylnn Bayran")
Book.create(title: "Nottingham: The True Story of Robin Hood", genre: "Fantasy/LGBT", author_name: "Anna Burke")
Book.create(title: "Queen of Coin and Whispers", genre: "YA/Fantasy/LGBT", author_name: "Helen Corcoran")
Book.create(title: "The Dark Tide", genre: "YA/Fantasy/LGBT", author_name: "Alicia Jasinksa")
Book.create(title: "Seven Devils", genre: "YA/Science Fiction/LGBT", author_name: "Laura Lam/Elizabeth May")
Book.create(title: "The Unspoken Name", genre: "Fantasy/LGBT", author_name: "A K Larkwood")
Book.create(title: "The Gilded Ones", genre: "YA/Fantasy", author_name: "Namina Forma")
Book.create(title: "The Silmarillion", genre: "Fantasy", author_name: "J R R Tolkien")
Book.create(title: "The Hobbit or There and Back Again", genre: "Fantasy", author_name: "J R R Tolkien")
Book.create(title: "The Fellowship of the Ring", genre: "Fantasy", author_name: "J R R Tolkien")
Book.create(title: "The Two Towers", genre: "Fantasy", author_name: "J R R Tolkien")
Book.create(title: "The Return of the King", genre: "Fantasy", author_name: "J R R Tolkien")
Book.create(title: "Lovecraft Country", genre: "Fantasy/Horror", author_name: "Matt Ruff")
Book.create(title: "Fangirl", genre: "YA", author_name: "Rainbow Rowell")
Book.create(title: "Ocean at the End of the Lane", genre: "Fantasy/Horror", author_name: "Neil Gaimon")
Book.create(title: "Good Omens", genre: "Fantasy", author_name: "Neil Gaimon")
Book.create(title: "American Gods", genre: "Fantasy", author_name: "Neil Gaimon")
Book.create(title: "Raybearer", genre: "YA/Fantasy/LGBT", author_name: "Jordan Ifueko")
Book.create(title: "Last Night at the Telegraph Club", genre: "YA/LGBT/Historical", author_name: "Malinda Lo")
Book.create(title: "Raybearer", genre: "YA/Fantasy/LGBT", author_name: "Jordan Ifueko")
Book.create(title: "She Who Became the Sun", genre: "Historical/Fantasy/LGBT", author_name: "Shelley Parker-Chan")
Book.create(title: "Legendborn", genre: "YA/Fantasy/LGBT", author_name: "Tracy Deonn")
Book.create(title: "Not Your Sidekick", genre: "YA/Science Fiction/LGBT", author_name: "C B Lee")
Book.create(title: "Not Your Villian", genre: "YA/Science Fiction/LGBT", author_name: "C B Lee")
Book.create(title: "Not Your Backup", genre: "YA/Science Fiction/LGBT", author_name: "C B Lee")
Book.create(title: "Not Your Hero", genre: "YA/Science Fiction/LGBT", author_name: "C B Lee")
Book.create(title: "Ace of Spades", genre: "YA/Mystery/LGBT", author_name: "Faridah Àbíké-Íyímídé")
Book.create(title: "Crier's War", genre: "YA/Fantasy/LGBT", author_name: "Nina Varela")
Book.create(title: "The Rise of Kyoshi", genre: "YA/Fantasy/LGBT", author_name: "F C Lee")
Book.create(title: "Girls of Storm and Shadow", genre: "YA/Fantasy/LGBT", author_name: "Natasha Ngan")
Book.create(title: "The Space Between Worlds", genre: "YA/Science Fiction/LGBT", author_name: "Micaiah Johnson")
Book.create(title: "Girl, Serpent, Thorn", genre: "YA/Fantasy/LGBT", author_name: "Melissa Bashardoust")
Book.create(title: "Raybearer", genre: "YA/Fantasy/LGBT", author_name: "Jordan Ifueko")
Book.create(title: "The Water Dancer", genre: "Historical/Fantasy/African American", author_name: "Ta-Nehisi Coates")




User.create(user_name: "rayyy_lmao")
User.create(user_name: "AshleyRoboto")
User.create(user_name: "negaoryx")
User.create(user_name: "poiised")
User.create(user_name: "egoRaptor")
User.create(user_name: "briandavidgilbert")
User.create(user_name: "Fiona_Nova")
User.create(user_name: "kimmicles")
User.create(user_name: "jar_oh_me")
User.create(user_name: "blmiller")


100.times do
    Bookshelf.create(user_id: User.all.sample.id, book_id: Book.all.sample.id, read: false)
end
# Seed your database here

puts "✅ Done seeding!"

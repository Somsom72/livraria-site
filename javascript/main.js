var app = new Vue({
    el: "#app",

    created() {
        this.filterBooks("Todos");
    },

    methods: {
        /* Função booleana que auxilia o filtro filterBooks. */
        applyFilter(book) {
            return book.categories.includes(this.currentCategory);
        },

        /* Atualiza o vetor currentBooks dada uma categoria de livros. */
        filterBooks(category) {
            this.currentCategory = category;
            if (this.currentCategory == "Todos") {
                this.currentBooks = this.books;
            } else {
                this.currentBooks = this.books.filter(this.applyFilter);
            }
        }
    },

    data: {
        /* Vetor com todos os livros conhecidos. */
        books: [
            {
                title: "O Hobbit",
                imageUrl: "img/covers/the_hobbit.jpg",
                description: "Praesent euismod semper lectus in tristique. Fusce at nisl ac massa ultrices porttitor id sed ipsum. Sed sit amet libero tempus, tempus nibh at elementum dolor.",
                price: 4.20,
                categories: ["Ficção", "Aventura"],
            },
            {
                title: "O Hobbit",
                imageUrl: "img/covers/the_hobbit.jpg",
                description: "Praesent euismod semper lectus in tristique. Fusce at nisl ac massa ultrices porttitor id sed ipsum. Sed sit amet libero tempus, tempus nibh at elementum dolor.",
                price: 4.20,
                categories: ["Ficção", "Aventura"],
            },
        ],

        currentCategory: "",

        /* Vetor com apenas o subconjunto de books, os livros filtrados. */
        currentBooks: []
    },
});
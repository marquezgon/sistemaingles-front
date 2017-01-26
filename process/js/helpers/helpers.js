module.exports = {
    getBookSectionsName(books, quiz) {
        const book = books.find((item) => {
            return item.book.id === quiz.book;
        });
        const sections = quiz.questions.reduce((previous, question) => {
            const sectionName = book.sections.find((section) => {
                return section._id === question.idSection;
            }).name;
            if(!previous.find((item) => {

                return item === sectionName
            })) { previous.push(sectionName) }

            return previous;

        }, []);

        return { sections, book: book.book.name };

    },
}

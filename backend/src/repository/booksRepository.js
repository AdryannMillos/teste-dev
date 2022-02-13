const Book = require('../app/models/Book');

const getAll = async () => await Book.findAll();

const getSpecificWithId = async (id) => await Book.findByPk(id);

const getSpecific = async (where) => await Book.findOne(where);


const save = async (data) => {
    const { name, author, category, uniqueCode, type, size, weight } = data;

    const book = await Book.create({
        name: name,
        author: author,
        category: category,
        uniqueCode: uniqueCode,
        type: type,
        size: size,
        weight: weight,
    });
    return book;
}
const put = async (data, id) => {

    const { name, author, category, uniqueCode, type, size, weight} = data;

    await Book.update({ name: name,
        author: author,
        category: category,
        uniqueCode: uniqueCode,
        type: type,
        size: size,
        weight: weight},{where: {id: id}});
}
const remove = async where => await Book.destroy(where);

module.exports = {
    getAll,
    save,
    getSpecific,
    remove,
    getSpecificWithId,
    put
}
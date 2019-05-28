module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  })

  Book.associate = (models) => {
    Book.belongsToMany(models.Author, {
      through: 'authors_books',
      as: 'authors',
      foreignKey: 'book_id'
    })
  }

  return Book
}
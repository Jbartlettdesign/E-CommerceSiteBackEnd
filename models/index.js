// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
//const { FOREIGNKEYS } = require('sequelize/types/lib/query-types');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',
  onDelete: 'cascade'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey:'category_id',
  onDelete: 'cascade'
});
// Products belongToMany Tags (through ProductTag)
//used in product routes

Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'product_id',
  onDelete: 'cascade'
});
// Tags belongToMany Products (through ProductTag)
//used in tag routes
Tag.belongsToMany(Product,{
  through: ProductTag,
  as: 'products',
  foreignKey: 'tag_id',
  onDelete: 'cascade'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

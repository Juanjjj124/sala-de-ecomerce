// En el archivo donde defines el modelo (por ejemplo, Categoria.js)
const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: { type: String },
  fechaCreacion: { type: Date, default: Date.now },
});

// Se registra el modelo con el nombre 'categorias'
module.exports = mongoose.model('categoria', CategoriaSchema);

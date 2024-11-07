import app from './app';
import sequelize from './utils/sequelize';

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    app.listen(3000, () => {
      console.log(`Servidor escuchando en el puerto 3000`);
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    process.exit(1);
  }
}

main();

import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handlebars = async (app) => {
  app.engine(
    'handlebars',
    exphbs.engine({
      extname: '.handlebars',
      defaultLayout: 'main',
      layoutsDir: path.join(__dirname, '..', 'templates', 'layouts'),
    }),
  );
  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, '..', 'templates', 'emails'));
};

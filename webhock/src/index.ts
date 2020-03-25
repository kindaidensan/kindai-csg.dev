import express from 'express';
import { Git } from './infrastructure/Git'
import { MdConverter } from './infrastructure/MdConverter'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body)
  res.send(`
    <h1>TypeScript Express</h1>
`);
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000...`);
});

const git = new Git()
try {
  git.pull().then((result) => {
    console.log(result);
  });
} catch(e) {
  console.log(e)
}

const converter = new MdConverter() 
console.log(converter.convert('## test'))
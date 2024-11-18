import express, {Express, Request, Response} from 'express';

const app : Express = express();
const port : number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Node.js + Express y algo más!');
});

app.get('/hello', (req: Request, res: Response) => {
    const name = req.query.name ? req.query.name : '';
    const greeting = {
        message: `Hello ${name} , I am learning Node.js and Express`,
        date: new Date()
    }
    res.json(greeting);
});

app.get('/add', (req: Request, res: Response) => {
    const num1 = req.query.num1 ? parseInt(req.query.num1 as string) : 0;
    const num2 = req.query.num2 ? parseInt(req.query.num2 as string) : 0;
    const sum = num1 + num2;
    const result = {
        num1: num1,
        num2: num2,
        sum: sum
    }
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

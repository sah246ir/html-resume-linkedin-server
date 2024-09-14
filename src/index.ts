
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import { corsHeaders } from "./Middlewares/cors-headers";
import { config } from "dotenv";
import multer from "multer";
import OpenAI from "openai";
import PDFParser from "pdf-parse"
import { generateResumePrompt } from "./utils/prompt";
import { generateResumeHTML } from "./utils/CreateHtml";
config()
const app = express()
const upload = multer();
// initialize services

app.use(cors({
    origin: ['http://localhost:3000','https://assignment.stellartech.space'],
    credentials: true
}))

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))

// custom headers
app.use(corsHeaders);

app.post("/process-resume", upload.single("resume"), async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            throw Error()
        }
        const apikey = req.body.apikey  
        const openai = new OpenAI({
            apiKey: apikey,
        }); 
        const pdfdata = req.file?.buffer
        const PdfData = await PDFParser(pdfdata)  
        const chat = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: generateResumePrompt(PdfData.text) }]
        });
        const response = chat.choices.pop()?.message
        const json =JSON.parse(response?.content as string) 
        res.setHeader('Content-Type', 'text/html');
        return res.send(generateResumeHTML(json)); 
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            message: "Unknown Error Occured"
        })
    }
})


// server listen
const server = app.listen(process.env.PORT, () => {
    console.log("server listening on http://localhost:" + process.env.PORT)
})






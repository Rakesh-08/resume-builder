let express = require("express");
let expressApp = express();
let cors = require("cors");
let PORT = 8080
const multer = require("multer");
const path = require("path");
const { Configuration, OpenAIApi } = require("openai");
const { v4: generateID } = require("uuid");
let secretConfig = require("./secretkeys")

expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.json());
expressApp.use(cors());
expressApp.use("/uploads", express.static("uploads"));

require("dotenv").config();

let database = [];


const config = new Configuration({
    apiKey: secretConfig.openAiKey
})
const openai = new OpenAIApi(config);

const GPTFunction = async (text) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        temperature: 0.6,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1
    })
    return response.data.choices[0].text;
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    },
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }
})

expressApp.get("/Home", (req, res) => {
    res.json({
        message: "home page loaded sucessfully"
    })
})


expressApp.post("/resume/create", upload.single("headshotImage"), async (req, res) => {

    const { fullName,
        currentPosition,
        currentLength,
        currentTechnologies,
        workHistory,
    } = req.body;

    const workArray = JSON.parse(workHistory);


    const newEntry = {
        id: generateID(),
        fullName,
        image_url: `http://localhost:8080/uploads/${req.file.filename}`,
        currentPosition,
        currentLength,
        currentTechnologies,
        workHistory: workArray
    }


    const remainderText = () => {
        let stringText = "";
        for (let i = 0; i < workArray.length; i++) {
            stringText += `\n ${workArray[i].companyName
                } as a ${workArray[i].position} `
        }
        return stringText;
    }


    const prompt1 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years).\n I write in the technologies: ${currentTechnologies} . can you write a 50 words description for the top of the resume(first person writing) ? `;

    const prompt2 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years).\n I write in the technologies: ${currentTechnologies} . can you write a 10 words  for a resume on what I am good at ? `;

    const prompt3 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years).\n During my years I worked at ${workArray.length} companies.${remainderText()} \n Can you write me 30 words for each company separated in numbers of my succession in the  company(in first person) ? `;

    const objective = await GPTFunction(prompt1);
    const keypoints = await GPTFunction(prompt2);
    const jobResponsibilities = await GPTFunction(prompt3);


    const chatgptData = { objective, keypoints, jobResponsibilities };



    const data = { ...newEntry, ...chatgptData };
    database.push(data);


    res.json({
        message: "Request successfull!",
        data,
    }).status(200)

})




expressApp.listen(process.env.PORT || PORT, () => {
    console.log("your server is listening at port : " + process.env.PORT || PORT)
})
















import preTrainedMsg from "@/configs/preTrainedMsg";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if(req.method == 'GET'){
    res.send('Working');
  }
  if(req.method == 'POST'){
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        ...preTrainedMsg,
        { role: "user", content:  req.body },
      ],
    });
    const result = completion.data.choices[0].message.content
    res.json(result)
  }
}

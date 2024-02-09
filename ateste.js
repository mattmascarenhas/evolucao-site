const puppeteer = require("puppeteer-core");
const chrome = require("chrome-aws-lambda");
const { Storage } = require("@google-cloud/storage");
const axios = require("axios");
exports.convertToPDF = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Método não permitido!");
    return;
  }
  const url = req.body.pdf;
  const chatID = req.body.chatID;
  if (!url || !chatID) {
    res
      .status(400)
      .send("URL do PDF e/ou chatID não fornecidos no corpo da requisição!");
    return;
  }
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();
  // Salvando o PDF no Google Cloud Storage
  const storage = new Storage();
  const bucketName = "pdf-tiny-vezaro"; // Substitua pelo nome do seu bucket
  const fileName = `pdf_${Date.now()}.pdf`;
  const bucket = storage.bucket(bucketName);
  const file = bucket.file(fileName);
  await file.save(pdfBuffer, {
    contentType: "application/pdf",
  });
  // Configurando permissões para serem públicas
  await file.makePublic();
  // Criando a URL pública para o PDF armazenado
  const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
  // Enviando o PDF para a API da Huggy
  const huggyApiEndpoint = `https://api.huggy.app/v3/companies/344824/chats/${chatID}/messages`;
  const huggyAuthorizationHeader =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc3ODljNzUzNDBhYWRiMGRlODcxZjA1Mzk2ZGY5OTMwMjYxNjdkMTFmOWE3M2ZmNTFiYzg0NzI4OTk4ZmEwNTFlYjdhYjRkMDNjNTY3YjgzIn0.eyJhdWQiOiJBUFAtZjQ0YmVkNGQtYWI2YS00YjVmLThhNzEtZWM0NGI3ZTE2OWE0IiwianRpIjoiNzc4OWM3NTM0MGFhZGIwZGU4NzFmMDUzOTZkZjk5MzAyNjE2N2QxMWY5YTczZmY1MWJjODQ3Mjg5OThmYTA1MWViN2FiNGQwM2M1NjdiODMiLCJpYXQiOjE2OTczODc3NzQsIm5iZiI6MTY5NzM4Nzc3NCwiZXhwIjoxNzI5MDEwMTc0LCJzdWIiOiIzNDQzNSIsInNjb3BlcyI6WyJwYW5lbF9hcHAiLCJpbnN0YWxsX2FwcCJdfQ.f2yKxuctJa2ULlVSv9wvflLnJpNz50p_NxBlxTXY_xCy8R2e_d0dNTF980LpMKtrYQtUeOwT_pNcTo8mUcOyUecCPO7ggSeX0azLB_hpvQyY9RMNuz6hJqPSCqMhTwOjPwpKpoxpA0FP4-dIGsxSBOsW3LU9yZadsokC68icgT8"; // Substitua pelo seu token da Huggy
  const huggyRequestBody = {
    text: "Segue seu boleto!",
    file: publicUrl,
    isInternal: false,
  };
  const huggyResponse = await axios.post(huggyApiEndpoint, huggyRequestBody, {
    headers: {
      Authorization: huggyAuthorizationHeader,
    },
  });
  res.status(200).json({ pdf: publicUrl, huggyResponse: huggyResponse.data });
};

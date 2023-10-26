import nodemailer from "nodemailer"
import fs from "fs"
import path from "path"
import {  fileURLToPath } from "url"
const __filenameNew = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filenameNew)
// // 配置您的邮箱信息
const transporter = nodemailer.createTransport({
  host: 'smtp.163.com',//process.env.SMTP_SERVER,//代表邮箱的主机：163邮箱是'smtp.163.com' qq是'smtp.qq.com'
  port: 465,
  pool: true,
  secure: true, // 使用 SSL
  auth: {
    user: "18224593146@163.com", // 发送邮件的邮箱地址
    pass: "JBHLJBRWMPJKTROL", // 发送邮件的邮箱密码--授权密码
  },
});
// console.log(process.env.SMTP_PASSWORD)
// 邮件内容
const mailOptions = {
  from: "18224593146@163.com", // 发件人邮箱
  to: "18224593146@163.com",// 收件人邮箱
  subject: "定时邮件测试标题", // 邮件主题
  // text: "这是一封定时发送的测试邮件。", // 邮件内容
  html: fs.createReadStream(path.resolve(__dirname, "email.html")),
  attachments: []//附件
};

// 定时任务
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});

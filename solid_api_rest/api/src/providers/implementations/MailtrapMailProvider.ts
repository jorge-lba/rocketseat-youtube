
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import {config} from 'dotenv'
import { IMailProvider, IMessage } from "../IMailProvider";

config()

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail
    
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        })
    }
    
    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
           to: {
               name: message.to.name,
               address: message.to.email
           },
           from:{
               name: message.from.name,
               address: message.from.email
           },
           subject: message.subject,
           html: message.body
        })
    }
}
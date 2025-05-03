import { sendEmail } from "../utils/senEmails.js";
import authModel from "../models/auth.models.js";

export const sendNewsletter = async (req, res) => {
    const {subject, htmlContent} = req.body;
    try{
        const volunteers = await authModel.find({}, 'email');
        const emails = volunteers.map(volunteer => sendEmail(volunteer.email, subject, htmlContent));
        await Promise.all(emails);
        res.status(200).json({message: "Newsletter sent successfully"});
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Error sending newsletter"});
    }
}
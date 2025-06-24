import Contact from "../model/contactModel.js";
import httpStatus from "http-status";

const getContacts=async(req,res)=>{
    const {firstName,lastName,email,phone,message}=req.body;
    if (!firstName || !lastName || !email || !phone || !message) return res.json({ success:false, message: "Please provide all details" });
    try {
        const newContact=new Contact({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message
        })
        await newContact.save();

        res.json({ success: true, message: "Saved" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export {getContacts};
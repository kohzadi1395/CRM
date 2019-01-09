import mongoose from 'mongoose';
import {ContactSchema} from "../Models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    save((err,contact)=>
    {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
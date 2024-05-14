import ChatMessages from "../models/chatMessageModal.js";

const saveNewMessage = async (reqBody) => {
    const { message, sender, receiver } = reqBody;
    const newMessage = new ChatMessages({
        message: message,
        sender: sender,
        receiver: receiver,
    });
    try {
        await newMessage.save();
        return newMessage;
    } catch (error) {
        return "FAILURE";
    }
}


export { saveNewMessage };
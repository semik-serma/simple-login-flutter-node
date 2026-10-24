import { Note } from "../model/noteModel.js";
import { errorResponse, successResponse } from "../utils/response.js";

export const createNote = async(req,res)=>{
    try {
        const {title,description} = req.body
        if(!title){
            return errorResponse(res,'title is required')
        }
        if(!description){
            return errorResponse(res,'discription is required')
        }
        await Note.create({
            title: title,
            description: description
        })
        return successResponse(res,'Note Created successfully')
    } catch (error) {
        console.log('error while creaing note')
        errorResponse(res,'error while creating note',error)
    }
}

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find()

        return successResponse(res, 'Notes fetched successfully', notes);
    } catch (error) {
        console.error('Error while fetching notes:', error);
        return errorResponse(res, 'Error while fetching notes', error);
    }
};

export const getNoteById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return errorResponse(res, 'Invalid note ID');
        }

        const note = await Note.findById(id);

        if (!note) {
            return errorResponse(res, 'Note not found');
        }

        return successResponse(res, 'Note fetched successfully', note);
    } catch (error) {
        console.error('Error while fetching note:', error);
        return errorResponse(res, 'Error while fetching note', error);
    }
};


export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return errorResponse(res, 'Invalid note ID');
        }

        const note = await Note.findByIdAndDelete(id);

        if (!note) {
            return errorResponse(res, 'Note not found');
        }

        return successResponse(res, 'Note deleted successfully', note);
    } catch (error) {
        console.error('Error while deleting note:', error);
        return errorResponse(res, 'Error while deleting note', error);
    }
};
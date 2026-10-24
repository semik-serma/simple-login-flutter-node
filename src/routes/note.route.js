import express from 'express'
import { createNote, deleteNote, getAllNotes, getNoteById } from '../controller/note.controller.js'

const noteRoute = express.Router()
noteRoute.post('/create-note',createNote)
noteRoute.get('/get-notes',getAllNotes)
noteRoute.get('/get-note',getNoteById)
noteRoute.delete('/delete-note',deleteNote)

export default noteRoute
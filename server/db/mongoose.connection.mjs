import mongoose from 'mongoose'
import log from '@ajar/marker'

export const connect_db = async (DB_URI) => {
    await mongoose.connect(DB_URI);
    log.magenta(' ✨  Connected to Mongo DB ✨ ')
}

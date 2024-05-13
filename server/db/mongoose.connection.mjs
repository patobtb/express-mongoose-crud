import mongoose from 'mongoose'
import log from '@ajar/marker'

export const connect_db = async () => {
    await mongoose.connect("mongodb+srv://patoBrugmann:Mongo666@cluster0.v26fupu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    log.magenta(' ✨  Connected to Mongo DB ✨ ')
}

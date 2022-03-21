// Imports
import Mongoose from 'mongoose'


// Connected to Mongo if a URI is provided
if (process.env.MONGOURI) {
    Mongoose.connect(process.env.MONGOURI, e => {
        e ? console.log(e) : console.log('Connected to Mongo.')
    })
}


// Exports
export { Mongoose }
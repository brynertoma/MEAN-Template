// Imports
import { Express, Request, Response } from '../config/config'

// Create a router to pass to Express to use.
let Api = Express.Router()


//---------------------------------------------------------
// GETS
//---------------------------------------------------------
Api.get('/', (req: Request, res: Response) => {
    res.send({ Api: 1.0 })
})


//---------------------------------------------------------
// POSTS
//---------------------------------------------------------
Api.post('/', (req: Request, res: Response) => {
    res.send({ Api: 1.0 })
})


// Exports
export { Api }
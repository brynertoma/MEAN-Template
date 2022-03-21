// Imports
import DotEnv                                      from 'dotenv'
import Express, { Application, Request, Response } from 'express'
import Routes                                      from './routes'


// Configure environment variables if not in production.
if (process.env.NODE_ENV !== 'production') {
    DotEnv.config({path: __dirname + '/env'})
    console.log('Development configuration complete.')
}


// Setup an express app.
const APP: Application = Express()


// Setup express app to serve front end build files.
APP.use(Express.static('client/dist'))


// Setup routes.
APP.use('/api', Routes.Api)


// Get the environment port.
const PORT = process.env.PORT || 3000


// Start listening for incoming requests.
APP.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
})


// Exports
export { APP, Express, Request, Response }

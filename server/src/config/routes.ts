// Imports
import { Api } from '../routes/api'


// Attach additional routes to the Routes object.
let Routes = { 
    Api
}


// Exports
export default Routes



/* 
    The purpose of this file is to keep our config file from being flooded with route imports.

    By importing api objects from the routes folder, we can attach them to the Routes object
    and then export Routes so that the config file can simply import 1 object and setup Express
    to use each attached route.

    To add another item to the routes object, simply do another import of another routes file
    (see routes/api.ts for example) and then we simply attach it to the Routes object above.

    An example of multiple route files attached to the Routes would look something like this:

    let Routes = {
        Api,
        Users
        Login,
        Register,
        Character,
    }

    In config.ts, you would then set your App to use each Routes object. Example:

    APP.use('/api',       Routes.Api      )
    APP.use('/users',     Routes.Users    )
    APP.use('/login',     Routes.Login    )
    APP.use('/register',  Routes.Register )
    APP.use('/character', Routes.Character)

    So in our API, we don't have to set our GETS/PUTS etc. to use /users/endpoint because our App
    implies that if we manage to hit the Routes.Users object, we must have visited /users.

    Which takes our endpoint from looking something like this: 
    
        Api.get('/users/getuser', (req: Request, res: Response) => {
            // ...
        })

    To someting like this:

        Api.get('getuser', (req: Request, res: Response) => {
            // ...
        })

    Which implies that the current url is "www.domain.com/users/getuser" and at the same time keeping
    our backend managemable, clean and DRY (not having to repeat "/users/x" for every endpoint).
*/
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
        Shop,
        Users,
        Login,
        Register,
    }

    In config.ts the Routes object is iterated through and the name of the imported routes file is
    used as the endpoint. 
    
    For example: 
        • api.ts will give us an endpoint of www.domain.com/api/*
        • shop.ts will give us an endpoint of www.domain.com/shop/*

    In each of our API files, this means we don't have to set our GETS/PUTS etc. to use /shop because our App
    implies that if we manage to hit the Routes.Shops object, we must have visited /shop page.

    Which takes our endpoint from looking something like this: 
    
        Api.get('/shop/shirts', (req: Request, res: Response) => {
            // ...
        })

    To someting like this:

        Api.get('shirts', (req: Request, res: Response) => {
            // ...
        })

    Which implies that the current url is "www.domain.com/shop/shirts" and at the same time keeping
    our backend manageable, clean and DRY (not having to repeat "/shop/*" for every endpoint).
*/
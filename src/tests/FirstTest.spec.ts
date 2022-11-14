import { User } from '../models/User';

test('it you test be ok', () => {
   const user = new User();

   user.name = 'Rodolfo'

   expect(user.name).toEqual('Rodolfo')
   
})
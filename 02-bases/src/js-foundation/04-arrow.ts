
interface IUser{   
    id: number;
    name: string;
}


const users: IUser[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

export const getUserById = (id:number, callback: (err?:string, user?:IUser)=> void) => {
    const user = users.find(user => user.id ===id);
    
    //using tern to avoid else
    user ? callback(undefined, user) : callback(`USER WITH id ${id} not found`);
    
    // if(!user){
    //     return callback(`USER WITH id ${id} not found`);
    // }
    // return callback(null, user);
}




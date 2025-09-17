

interface IUser{
    id: number;
    name: string;
}
const users: IUser[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

export function getUserById(id:number, callback: (err?:string, user?:IUser)=> void) {
    const user = users.find(function(user){
        return user.id === id;
    });
    
    if(!user){
        return callback(`USER WITH id ${id} not found`);
    }
    return callback(undefined, user);
}


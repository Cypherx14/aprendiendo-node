

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const getUserById = (id, callback) => {
    const user = users.find(user => user.id ===id);
    
    //using tern to avoid else
    user ? callback(null, user) : callback(`USER WITH id ${id} not found`);
    
    // if(!user){
    //     return callback(`USER WITH id ${id} not found`);
    // }
    // return callback(null, user);
}



module.exports = { 
    getUserById 
};
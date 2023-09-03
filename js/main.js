const users=[
    {
        first_name:"milk",
        last_name:"sheridam",
        age:30
    },
    {
        first_name:"tim",
        last_name:"lee",
        age:45
    },
    {
        first_name:"john",
        last_name:"carte",
        age:25
    }
];
var ans=users.map(function(e){
    var a=e.last_name;
    return a
})
console.log(ans);
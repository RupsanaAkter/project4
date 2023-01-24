let data=[
    {
        name:'Annan',
        age:'24'
    },
    {
        name:'Jafor',
        age:'36'
    },
    {
        name:'Tatla',
        age:'34'
    },
    {
        name:'Rikki',
        age:'45'
    },
    {
        name:'Bina',
        age:'64'
    },
    {
        name:'Qulq',
        age:'32'
    }
];
const inFo=document.getElementById('info');
let details=data.map(function(item){
    return '<div>'+item.name+' '+'is '+item.age + ' years old'+'</div>';
    
});
inFo.innerHTML=details.join(' ');

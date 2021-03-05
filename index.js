let member=[
    {name: 'hoa',money:10},
    {name: 'h',money:4},
    {name: 'a',money:30},
    {name: 'o',money:20}
]

let newf={name:'', money:0}

for (let i of member) {
    if (i.money>newf.money) {
        newf=i
    }
}

console.log(newf.name)
let change={name:'', money:0};

for (let i=0; i<member.length-1;i++) {
    for (let j=i+1;j<member.length;j++) {
        if (member[i].money>member[j].money) {
            change=member[i];
            member[i]=member[j];
            member[j]=change;
        }
    }
}
console.log(member);
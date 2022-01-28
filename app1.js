const EC = require('./eventClass');
const ec = new EC.EL();

console.log(EC.url);

ec.on('Event1',(arg)=>{
    console.log(`Button with id '${arg.id}' clicked on '${arg.page}' page`);
});

ec.on('Event2',(arg)=>{
    console.log(`Link with id '${arg.id}' clicked, href is '${arg.href}'`);  
});

ec.on('Event3',()=>{
    console.log(`Image clicked`);  
});

ec.log('Event1',{id:'login', page:'Login'});
ec.log('Event1',{id:'validate', page:'Login'});
ec.log('Event2',{id:'contactus', href:'/contactus.html'});
ec.logWOArg('Event3');
const args=process.argv.slice(2);
console.log(process.argv);
//console.log(args);
if (args.includes('-l')) {
    console.log('listing');
    console.log(args[1]);
    //file beolv
    //json parsolas--rawtodolist
    //rawtodolist---todolist=[Todo{},Todo{}]
}
else{
console.log(`Parancssori Todo applikáció
=============================
Parancssori argumentumok:
    -l   Kilistázza a feladatokat
    -a   Új feladatot ad hozzá
    -r   Eltávolít egy feladatot
    -c   Teljesít egy feladatot`);

}
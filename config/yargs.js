const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
}

const completado = {
    alias: 'c',
    default: true,
    desc: "Marca como completado o pendiente la tarea"
}

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado de completado de una tarea', {
        descripcion,
        completado
    })
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })

.command('borrar', 'Borrar un elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
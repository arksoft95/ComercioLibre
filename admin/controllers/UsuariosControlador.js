$(() => {
    
    document.getElementById("insertUsuario").addEventListener('submit', (e) => {

        e.preventDefault()

        let loginForm = document.getElementById("insertUsuario")
        let data = new FormData(loginForm)

        fetch('models/usuarios.php', {
            method: 'POST',
            body: data
        })
        .then( response => response.json() )
        .then( data => {
            if (data.resp == "OK") {
                swal('Operación exitosa!', data.message, 'success')
                setTimeout(() => {
                    window.location.href = data.url;
                }, 2000)
            } else {
                swal('¡Ocurrio un Error!', data.message, 'error')
            }
        })

    })

});
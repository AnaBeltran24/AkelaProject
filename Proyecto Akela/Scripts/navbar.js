//navbar
document.write(`
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom"> 
        <a href="Home.html">
            <img src="imgs/Logo.png" width="157" height="70" style="margin-left: 80px;" 
                class="d-inline-block align-top" alt="Logo Akela">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
            aria-label="Toggle navigation"> 
            <span class="navbar-toggler-icon"></span> 
        </button> 

        <div class="collapse navbar-collapse justify-content-center" id="navbarNav"> 
            <ul class="navbar-nav"> 
                <li class="nav-item active"> 
                    <a class="nav-link" href="Home.html">Home</a> 
                </li> 
                <li class="nav-item active"> 
                    <a class="nav-link" href="Productos.html">Productos</a> 
                </li> 
                <li class="nav-item"> 
                    <a class="nav-link" href="Racion.html">Calcula tu ración</a> 
                </li> 
                <li class="nav-item"> 
                    <a class="nav-link" href="Contacto.html">Contáctanos</a> 
                </li> 
                <li class="nav-item"> 
                    <button style="background-color: #ffffff; color:#003F7D" 
                        type="button" class="btn btn-secondary">Iniciar Sesión</button>
                </li>
            </ul> 
        </div> 
    </nav>
`)
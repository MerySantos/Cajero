// Datos Iniciales
	var nro_cliente;
	var pass_cliente="";
	var proceso=1;


	var clientes=[
		{nombre:"Luis", nrocuenta:"040-235648",pass:"1234", saldo:1000},
		{nombre:"Shelby", nrocuenta:"040-885624",pass:"5678", saldo:1800},
		{nombre:"Andrea", nrocuenta:"040-323410",pass:"3495", saldo:10000},
		{nombre:"Misha", nrocuenta:"040-323410",pass:"4321", saldo:100},
	];

// Inicializar app
	function initApp(){
  		updateSelectClientes();
  		
	}


// Retiro
	function retiro(monto){
	// Solo si presiona en un numero fijado
		var nuevo_saldo = verificarSaldo(monto);
		alert("Su saldo es : "+ nuevo_saldo);
	}

	function retiroEspecifico(){
		// var monto =$('montoEsp');
		var monto=document.getElementById('montoEsp').value;
		var nuevo_saldo = verificarSaldo(monto);
		alert("Su saldo es : "+ nuevo_saldo);
	}

// Transferencia
// Deposito

// Operaciones
	// Cancelar las operaciones
	function cancelarTodo(){
		window.location.reload();
	}	
		
	// Escoger Operaciones
	function opcionesAceptar(){
		switch(proceso){
			case 1:
				verificarUser();
				break;
			case 2:
				break;
			case 3:
				if(document.getElementById('montoEsp').value== ""){
					alert("Seleccione un monto correcto");
				}
				else{
					retiroEspecifico();
				}
				break;	
			case 4:
				break;	
			case 5:
				break;	
		}
	}
	function elegirOperacion(operacion,monto){
		if(proceso==2){
			switch (operacion) {
				case 'retiro':
					document.getElementById('proceso2').style.display='none';
					document.getElementById('proceso3').style.display='block';
					proceso=3
			    	break;
				case 'transferencia':
					document.getElementById('proceso2').style.display='none';
					document.getElementById('proceso4').style.display='block';
					proceso=4
					break;
				case 'deposito':
					document.getElementById('proceso2').style.display='none';
					document.getElementById('proceso5').style.display='block';
					proceso=5
					break;
			}
		}
		if (proceso==3){
			if(monto=='otro monto'){
				document.getElementById('nuevo_monto').style.display='block';
			}
			else{
				retiro(monto);

			}
		}
	}
	// Añadir datos de contraseña
	function adicionarPass(numero){
		if (document.getElementById("pass").value.length < 4) {
			pass_cliente = pass_cliente + numero;
			document.getElementById("pass").value= pass_cliente;
		}
	}
	// Verificar si el usuario concuerda con la contraseña
	function verificarUser(){
		nro_cliente = document.getElementById("listado_clientes").selectedIndex;

		if (clientes[nro_cliente].pass==pass_cliente) {
			proceso=2;
			alert("BIENVENIDO AL BANCO BCP");
			document.getElementById('proceso1').style.display='none';
			document.getElementById('proceso2').style.display='block';
		}

		else{
			alert("La contraseña es erronea");
			document.getElementById("pass").value='';
			pass_cliente = "";
		}
	}
	// Verificar Saldo disponible
	function verificarSaldo(monto_retiro){
		var nuevo_saldo;
		if (parseFloat(monto_retiro) <= parseFloat(clientes.saldo)) {
			nuevo_saldo = parseFloat(clientes.saldo) - parseFloat(monto_retiro);
			alert("Recoja su dinero");
		}
		else{
			nuevo_saldo = clientes.saldo;
			alert("Saldo Insuficiente");
		}
		return nuevo_saldo;
	}

// Operaciones Estaticas
	function updateSelectClientes(){
	  var select=document.getElementById("listado_clientes");
	  for (var i=0;i<clientes.length;i++){
	    select.innerHTML+='<option value="'+ i +'">'+clientes[i].nombre+"  "+ clientes[i].nrocuenta+' </option>';
	  }
	}
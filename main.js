// Datos Iniciales
	var nro_cliente;
	var pass_cliente="";
	var proceso=1;


	var clientes=[
		{nombre:"Luis", nrocuenta:"040-235648",pass:"1234", saldo:1000},
		{nombre:"Shelby", nrocuenta:"040-885624",pass:"9998", saldo:1800},
		{nombre:"Andrea", nrocuenta:"040-323410",pass:"5354", saldo:10000},
		{nombre:"Misha", nrocuenta:"040-323410",pass:"5678", saldo:100},
	];

// Inicializar app
	function initApp(){
  		updateSelectClientes();
  		// updateReport();
	}


// Retiro
	function retiro(monto){
	// Solo si presiona en un numero fijado
		var nuevo_saldo = verificarSaldo(monto);
		alert("Su saldo es : "+ nuevo_saldo);
	}

	function retiroEspecifico(){
		var monto =$('');
		var nuevo_saldo = verificarSaldo(monto);
		alert("Su saldo es : "+ nuevo_saldo);
	}

// Transferencia
// Deposito

// Operaciones
	// Añadir datos de contraseña
	function adicionarPass(numero){
		if (document.getElementById("pass").value.length < 4) {
			pass_cliente = pass_cliente + numero;
			document.getElementById("pass").value= pass_cliente;
		}
	}

	function verificarUser(){
		nro_cliente = document.getElementById("listado_clientes").selectedIndex;

		if (clientes[nro_cliente].pass==pass_cliente) {
			proceso=2;
			alert("ok");
			//mostrar la nueva pantalla y ocultar la actual
		}
		else{
			alert("La contraseña es erronea");
			document.getElementById("pass").innerHTML='';
			pass_cliente = "";
		}
	}

	function verificarSaldo(monto_retiro){
		var nuevo_saldo;
		if (monto_retiro <= clientes.saldo) {
			nuevo_saldo = clientes.saldo - monto_retiro;
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
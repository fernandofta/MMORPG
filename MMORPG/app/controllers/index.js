module.exports.index = function(application, req, res) {
	res.render('index',{validacao: {}});
}

module.exports.autenticar = function(application, req, res) {
	
	var dadosForm = req.body;
	req.assert('usuario','Usuário não pode ser vazio po!!!').notEmpty();
	req.assert('senha','Senha não pode ser vazio po!!!!!').notEmpty();
	
	var erros = req.validationErrors();
	if(erros){
		res.render('index',{validacao: erros, dadosForm: dadosForm});
		return;
	}
	
	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.autenticar(dadosForm,req,res);
	

	
	
/*	var autentica = function (dadosForm) {
		UsuariosDAO.autenticar(dadosForm)
	        .then(function (fulfilled) {

	            console.log(fulfilled);

	        })
	        .catch(function (error) {

	            console.log(error.message);

	        });
	};

	autentica();*/
	

}
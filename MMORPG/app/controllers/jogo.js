module.exports.jogo = function(application, req, res) {
	
	
	if (req.session.autorizado){
		res.render('jogo');
	} else{
		res.render('index',{validacao: {'Erro:':'Sua sessão expirou. Favor fazer logon.'}});
	}
	
}


module.exports.sair = function(application, req, res) {
	
	req.session.destroy(function() {
		
		res.render('index',{validacao: {}});
	})
	
}
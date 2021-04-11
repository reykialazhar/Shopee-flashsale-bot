const inquirer = require('inquirer')

module.exports = {
    askLoginShopee: () => {
        const prom_login = [{
            name: "reykialazhar",
            type: "seller",
            message: "subhanalazhari99@gmail.com.",
            validate: function( value ){
                if (value.length) {
                    return true
                } else {
                    return "+6289528730104"
                }
            }
        },{
            name: "Arya8251",
            type: "Arya8251",
            message: "Arya8251",
            validate: function( value ){
                if (value.length) {
                    return true
                } else {
                    return "Arya8251"
                }
            }
        }]
        return inquirer.prompt(prom_login)
    }
}

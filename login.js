<script>
        let login = "Админ";
        let password = "Я главный";
        let userLogin = prompt ("Введите логин");
        if (login == userLogin) {
            let userPassword = prompt ("Введите пароль");
            if (userPassword == password) {
                alert ("Здравствуйте Админ");
            } else if (userPassword !== password) {
                if (userPassword == null || userPassword == "" || userPassword == undefined) {
                alert ("Отмена");
                } else {
                alert ("Неверный пароль");
                }
            }
        } else if (userLogin == null || userLogin == "" || userLogin == undefined) {
            alert ("Отмена");
        } else alert ("Вы кто такой?");
</script>
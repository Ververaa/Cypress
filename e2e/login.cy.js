describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль 

         cy.get('#mail').type('german@dolnikov.ru'); //ввели правильный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
         cy.get('#loginButton').click(); //нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
     })

     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль 

        cy.get('#forgotEmailButton').click(); //нажимаю на кнопку забыли пароль
        cy.get('#mailForgot').type('iLoveqastudio7'); //ввели неверный email
        cy.get('#restoreEmailButton').click(); //нажал отправить код

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю, что после нажатия кнопки вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя

    })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль 

        cy.get('#mail').type('german@dolnikov.ru'); //ввели правильный логин
        cy.get('#pass').type('iLoveqastudio7'); //ввели неверный пароль
        cy.get('#loginButton').click(); //нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя

    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль 

        cy.get('#mail').type('grman@dolnikov.ru'); //ввели неправильный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя

    })

    it('Проверка невалидного логина', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль 

        cy.get('#mail').type('grmandolnikov.ru'); //ввели невалидный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажала войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя

    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль 

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажала войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя

    })

 })
 
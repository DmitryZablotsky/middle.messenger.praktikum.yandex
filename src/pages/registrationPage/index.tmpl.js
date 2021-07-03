export const registrationPageTmpl =`
    <div class="{{classes.layout}}">
        <main class="{{classes.mainSection}}">
            <h1 class="{{classes.header}}">
                Регистрация
            </h1>
            <form class="{{classes.formContainer}}">
                <div class="{{classes.formField}}">
                    <label for="email" class="{{classes.fieldLabel}}">Почта</label>
                    <input type="email" name="email" id="email" class="{{classes.input}}">
                    <span class="{{classes.validationMessage}}">укажите валидную почту</span>
                </div>
                <div class="{{classes.formField}}">
                    <label for="login" class="{{classes.fieldLabel}}">Логин</label>
                    <input type="text" name="login" id="login" class="{{classes.input}}">
                    <span class="{{classes.validationMessage}}">логин не может быть пустым</span>
                </div>
                <div class="{{classes.formField}}">
                    <label for="firstName" class="{{classes.fieldLabel}}">Имя</label>
                    <input type="text" name="firstName" id="firstName" class="{{classes.input}}">
                    <span class="{{classes.validationMessage}}">имя не может быть пустым</span>
                </div>
                <div class="{{classes.formField}}">
                    <label for="lastName" class="{{classes.fieldLabel}}">Фамилия</label>
                    <input type="text" name="lastName" id="lastName" class="{{classes.input}}">
                    <span class="{{classes.validationMessage}}">фамилия не может быть пустой</span>
                </div>
                <div class="{{classes.formField}}">
                    <label for="tel" class="{{classes.fieldLabel}}">Телефон</label>
                    <input type="tel" name="tel" id="tel" class="{{classes.input}}">
                    <span class="{{classes.validationMessage}}">укажите 11-ти значный номер в произвольном формате</span>
                </div>
                <div class="{{classes.formField}}">
                    <label for="password" class="{{classes.fieldLabel}}">Пароль</label>
                    <input type="password" name="password" id="password" class="{{classes.input}}">
                    <span class="{{classes.validationMessage}}">в пароле должны быть буквы в двух регистрах и цифры</span>
                </div>
                <div class="{{classes.formField}}">
                    <label for="confirmPassword" class="{{classes.fieldLabel}}">Подтвердите пароль</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" class="{{classes.input}}">
                    <span class="{{classes.validationMessage}}">пароли не совпадают</span>
                </div>
                <button class="{{classes.submitBtn}}">Зарегистрироваться</button>
            </form>
            <a class="{{classes.poorBtn}}" href="/authorisation">
                Войти
            </a>
        </main>
    </div>
`;
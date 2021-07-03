export const authorizationPageTmpl =`
    <div class="{{classes.layout}}">
        <main class="{{classes.mainSection}}">
            <h1 class="{{classes.header}}">
                Авторизация
            </h1>
            <form class="{{classes.formContainer}}">
                <div class="{{classes.formField}}">
                    <label for="login" class="{{classes.fieldLabel}}">Логин</label>
                    <input type="text" name="login" id="login" class="{{classes.input}}">
                    <span class="{{classes.validationMessage}}">пользователь с таким логином не существует</span>
                </div>
                <div class="{{classes.formField}}">
                    <label for="password" class="{{classes.fieldLabel}}">Пароль</label>
                    <input type="password" name="password" id="password" class="{{classes.input}}">
                    <span class="{{classes.validationMessage}}">введен неправильный пароль</span>
                </div>
                <button class="{{classes.submitBtn}}">Войти</button>
            </form>
            <a class="{{classes.poorBtn}}" href="/registration">
                <span>Нет аккаунта?</span>
                <span>Зарегистирироваться!</span>
            </a>
        </main>
    </div>
`;
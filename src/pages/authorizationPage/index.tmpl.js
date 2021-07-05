export const authorizationPageTmpl =`
    <div class="layout layout_error">
        <main class="main-section">
            <h1 class="form-header">
                Авторизация
            </h1>
            <form class="form-container">
                <div class="form-field">
                    <label for="login" class="form-field__label">Логин</label>
                    <input type="text" name="login" id="login" class="form-field__input">
                    <span class="form-field__validation-message">пользователь с таким логином не существует</span>
                </div>
                <div class="form-field">
                    <label for="password" class="form-field__label">Пароль</label>
                    <input type="password" name="password" id="password" class="form-field__input">
                    <span class="form-field__validation-message">введен неправильный пароль</span>
                </div>
                <button class="form-field__submitBtn richBtn">Войти</button>
            </form>
            <a class="poorBtn" href="/registration">
                <span>Нет аккаунта?</span>
                <span>Зарегистирироваться!</span>
            </a>
        </main>
    </div>
`;
export const registrationPageTmpl =`
    <div class="layout">
        <main class="main-section">
            <h1 class="form-header">
                Регистрация
            </h1>
            <form class="form-container">
                <div class="form-field">
                    <label for="email" class="form-field__label">Почта</label>
                    <input type="email" name="email" id="email" class="form-field__input">
                    <span class="form-field__validation-message">укажите валидную почту</span>
                </div>
                <div class="form-field">
                    <label for="login" class="form-field__label">Логин</label>
                    <input type="text" name="login" id="login" class="form-field__input">
                    <span class="form-field__validation-message">логин не может быть пустым</span>
                </div>
                <div class="form-field">
                    <label for="firstName" class="form-field__label">Имя</label>
                    <input type="text" name="firstName" id="firstName" class="form-field__input">
                    <span class="form-field__validation-message">имя не может быть пустым</span>
                </div>
                <div class="form-field">
                    <label for="lastName" class="form-field__label">Фамилия</label>
                    <input type="text" name="lastName" id="lastName" class="form-field__input">
                    <span class="form-field__validation-message">фамилия не может быть пустой</span>
                </div>
                <div class="form-field">
                    <label for="tel" class="form-field__label">Телефон</label>
                    <input type="tel" name="tel" id="tel" class="form-field__input">
                    <span class="form-field__validation-message">укажите 11-ти значный номер в произвольном формате</span>
                </div>
                <div class="form-field">
                    <label for="password" class="form-field__label">Пароль</label>
                    <input type="password" name="password" id="password" class="form-field__input">
                    <span class="form-field__validation-message">в пароле должны быть буквы в двух регистрах и цифры</span>
                </div>
                <div class="form-field">
                    <label for="confirmPassword" class="form-field__label">Подтвердите пароль</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" class="form-field__input">
                    <span class="form-field__validation-message">пароли не совпадают</span>
                </div>
                <button class="form-field__submitBtn richBtn">Зарегистрироваться</button>
            </form>
            <a class="poorBtn" href="/authorisation">
                Войти
            </a>
        </main>
    </div>
`;
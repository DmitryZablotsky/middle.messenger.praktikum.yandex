export const profilePageTmpl =`
    <div class="layout layout_lightBG">
        <div class="profile-photo"></div>
        <form class="profile-form-container">
            <div class="profile-form-readable-field">
                <span class="profile-form-readable-field__label">Почта</span>
                <span class="profile-form-readable-field__value">example@test.com</span>
            </div>
            <div class="profile-form-readable-field">
                <span class="profile-form-readable-field__label">Логин</span>
                <span class="profile-form-readable-field__value">example</span>
            </div>
            <div class="profile-form-readable-field">
                <span class="profile-form-readable-field__label">Имя</span>
                <span class="profile-form-readable-field__value">example</span>
            </div>
            <div class="profile-form-editable-field">
                <div class="profile-form-editable-field__input-container">
                    <label for="lastName" class="profile-form-editable-field__label">Фамилия</label>
                    <input type="text" name="lastName" id="lastName" class="profile-form-editable-field__input">
                    <span class="profile-form-editable-field__controls">&#10003;</span>           
                    <span class="profile-form-editable-field__controls">&#10008;</span>           
                </div>
                <span class="profile-form-editable-field__validation-message">укажите фамилию</span>
            </div>
            <div class="profile-form-readable-field">
                <span class="profile-form-readable-field__label">Телефон</span>
                <span class="profile-form-readable-field__label">+7 (912) 345-67-89</span>
            </div>
        </form>
        <a class="poorBtn">
            сменить пароль
        </a>
        <button class="attentionBtn">
            Выйти
        </button>
    </div>
`;
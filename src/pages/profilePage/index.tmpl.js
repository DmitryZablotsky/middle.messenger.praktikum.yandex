export const profilePageTmpl =`
    <div class="{{classes.layout}}">
        <div class="{{classes.profilePhoto}}"></div>
        <form class="{{classes.formContainer}}">
            <div class="{{classes.readableField}}">
                <span class="{{classes.readableFieldLabel}}">Почта</span>
                <span class="{{classes.readableFieldValue}}">example@test.com</span>
            </div>
            <div class="{{classes.readableField}}">
                <span class="{{classes.readableFieldLabel}}">Логин</span>
                <span class="{{classes.readableFieldValue}}">example</span>
            </div>
            <div class="{{classes.readableField}}">
                <span class="{{classes.readableFieldLabel}}">Имя</span>
                <span class="{{classes.readableFieldValue}}">example</span>
            </div>
            <div class="{{classes.editableField}}">
                <div class="{{classes.inputContainer}}">
                    <label for="lastName" class="{{classes.editableFieldLabel}}">Фамилия</label>
                    <input type="text" name="lastName" id="lastName" class="{{classes.editableFieldInput}}">
                    <span class="{{classes.editableFieldControls}}">&#10003;</span>           
                    <span class="{{classes.editableFieldControls}}">&#10008;</span>           
                </div>
                <span class="{{classes.editableFieldMessage}}">укажите фамилию</span>
            </div>
            <div class="{{classes.readableField}}">
                <span class="{{classes.readableFieldLabel}}">Телефон</span>
                <span class="{{classes.readableFieldValue}}">+7 (912) 345-67-89</span>
            </div>
        </form>
        <a class="{{classes.poorBtn}}">
            сменить пароль
        </a>
        <button class="{{classes.attentionButton}}">
            Выйти
        </button>
    </div>
`;
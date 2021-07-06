export const errorPageTmpl =`
    <div class="layout layout_lightBG">
        <main class="error">
               <h1 class="error__status">{{error.status}}</h1>
               <span class="error__text">{{error.text}}</span>
           <br/>
           <a class="poorBtn" href="/">
               на главную
           </a>
        </main>
    </div>
`;
export const errorPageTmpl =`
    <div class="{{classes.layout}}">
       <h1 class="{{classes.header}}">{{error.status}}</h1>
       <span>{{error.text}}</span>
       <br/>
       <a class="{{classes.poorBtn}}" href="/">
           на главную
       </a>
    </div>
`;
import{_ as t}from"./tslib.es6-91ef4223.js";import{L as e,h as i,p as r,a as s}from"./lit-element-6721defd.js";import{getPostsUrl as o,getPosts as a}from"./misc.js";import"./article.js";import p,{loading as l,getErrorMessageArticle as c}from"./articles.js";import n from"./x-postpress.js";let h=class extends e{constructor(){super(...arguments),this.apiHost="",this.apiPath="/wp-json/wp/v2",this.removeArticleHeaderLinkSubDomain=!1,this.articleHeaderLinkSubDomain="",this.categories="",this.include="",this.page="",this.per_page="",this.tags="",this.search="",this.slug="",this.urlAttributes=["apiHost","apiPath"],this.builtQueryStringAttributes=["categories","include","page","per_page","search","slug","tags"],this.articles=l,this.articlePayload=[]}requestPosts(){const t=o({apiHost:this.apiHost,apiPath:this.apiPath,categories:this.categories,include:(e=this.include,e&&"undefined"!==e?e:""),page:this.page,per_page:this.per_page,search:this.search,slug:this.slug,tags:this.tags},this.builtQueryStringAttributes);var e;this.articlePayload.length>0?this.articles=p(this.articlePayload,this.removeArticleHeaderLinkSubDomain,this.articleHeaderLinkSubDomain):a(t).then(t=>p(t,this.removeArticleHeaderLinkSubDomain,this.articleHeaderLinkSubDomain)).catch(t=>c(t)).then(t=>{this.articles=t})}updated(t){if(this.apiHost){const e=[...this.urlAttributes,...this.builtQueryStringAttributes],i=t.keys();let r=i.next();for(;!r.done;){if(-1!==e.indexOf(r.value)){this.requestPosts();break}r=i.next()}}}render(){return i`
      <slot name="articles"></slot>
      ${this.apiHost&&this.articles}
    `}};h.styles=n,t([r({type:String,reflect:!0})],h.prototype,"apiHost",void 0),t([r({type:String,reflect:!0})],h.prototype,"apiPath",void 0),t([r({type:Boolean,reflect:!0})],h.prototype,"removeArticleHeaderLinkSubDomain",void 0),t([r({type:String,reflect:!0})],h.prototype,"articleHeaderLinkSubDomain",void 0),t([r({type:String,reflect:!0})],h.prototype,"categories",void 0),t([r({type:String,reflect:!0})],h.prototype,"include",void 0),t([r({type:String,reflect:!0})],h.prototype,"page",void 0),t([r({type:String,reflect:!0})],h.prototype,"per_page",void 0),t([r({type:String,reflect:!0})],h.prototype,"tags",void 0),t([r({type:String,reflect:!0})],h.prototype,"search",void 0),t([r({type:String,reflect:!0})],h.prototype,"slug",void 0),t([r({type:Array})],h.prototype,"urlAttributes",void 0),t([r({type:Array})],h.prototype,"builtQueryStringAttributes",void 0),t([r({type:Object,noAccessor:!1})],h.prototype,"articles",void 0),t([r({type:Object,noAccessor:!1})],h.prototype,"articlePayload",void 0),h=t([s("x-postpress")],h);var u=h;export default u;export{h as XPostpress};

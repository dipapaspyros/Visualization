export default Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("span");
      dom.setAttribute(el1,"class","configurationOption");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("  ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
      content(env, morph0, context, "view.label");
      inline(env, morph1, context, "view", [get(env, context, "Ember.Select")], {"viewName": "selectField", "content": get(env, context, "view.values"), "optionLabelPath": "content.label", "selection": get(env, context, "view.content")});
      return fragment;
    }
  };
}()));
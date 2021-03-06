# disallow mustaches in `<textarea>` (weex/vue/no-textarea-mustache)

- :gear: This rule is included in all of `"plugin:weex/vue/essential"`, `"plugin:weex/vue/strongly-recommended"` and `"plugin:weex/vue/recommended"`.

> Interpolation on textareas (`<textarea>{{text}}</textarea>`) won't work. Use `v-model` instead.
>
> https://vuejs.org/v2/guide/forms.html#Multiline-text

## :book: Rule Details

This rule reports mustaches in `<textarea>`.

:-1: Examples of **incorrect** code for this rule:

```html
<textarea>{{ message }}</textarea>
```

:+1: Examples of **correct** code for this rule:

```html
<textarea v-model="message"/>
```

## :wrench: Options

Nothing.

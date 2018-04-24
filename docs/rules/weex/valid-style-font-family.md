# weex does not support multiple fonts in font-family (vue/weex/valid-style-font-family)

- :gear: This rule is included in all of `"plugin:vue/essential"`, `"plugin:vue/strongly-recommended"` and `"plugin:vue/recommended"`.

Weex does not fully support `font-family` property, it will never be effect if you use it wrong.

## :book: Rule Details

- supports

```
font-family: Serif;
```

- unsupport

```
font-family: Georgia, Serif;
```

This rule reports components in the following cases:

- The component has that style attribute. E.g `<div style="font-family: Georgia, Serif;"></div>`.
- The component has that class attribute. E.g `<cell class="fontClass"></cell> <style>.fontClass{ font-family: Georgia, Serif; }</style>`.
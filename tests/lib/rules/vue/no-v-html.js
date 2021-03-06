/**
 * @author Erha19
 * @copyright 2018 Erha19. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const rule = require('../../../../lib/rules/vue/no-v-html')

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
  parser: 'vue-eslint-parser',
  parserOptions: { ecmaVersion: 2015 }
})

tester.run('no-v-html', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: ''
    },
    {
      filename: 'test.vue',
      code: '<template><div></div></template>'
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: '<template><div v-html:aaa="foo"></div></template>',
      errors: ["'v-html' directives is disallow in weex."]
    },
    {
      filename: 'test.vue',
      code: '<template><div v-html.aaa="foo"></div></template>',
      errors: ["'v-html' directives is disallow in weex."]
    },
    {
      filename: 'test.vue',
      code: '<template><div v-html></div></template>',
      errors: ["'v-html' directives is disallow in weex."]
    }
  ]
})

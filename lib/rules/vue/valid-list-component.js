/**
 * @author Erha19
 * @copyright 2018 Erha19. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const utils = require('../../utils')

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

function detectScroller (node) {
  let scrollers = []
  if (node.children) {
    node.children.forEach(child => {
      if (child.name === 'scroller') {
        scrollers.push(child)
      } else {
        if (child.children && child.children.length > 0) {
          scrollers = scrollers.concat(detectScroller(child))
        }
      }
    })
  }
  return scrollers
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'enforce valid `<list>` component',
      category: 'essential',
      url: 'https://github.com/weexteam/eslint-plugin-weex/blob/v1.1.9/docs/rules/valid-list-component.md'
    },
    fixable: null,
    schema: []
  },

  create (context) {
    return utils.defineTemplateBodyVisitor(context, {
      "VElement[name='list']" (node) {
        const detect = detectScroller(node)
        if (detect.length > 0) {
          detect.forEach(d => {
            context.report({
              d,
              loc: d.loc,
              message: `Cannot use <scroller> component in <list> component.`
            })
          })
        }
      }
    })
  }
}

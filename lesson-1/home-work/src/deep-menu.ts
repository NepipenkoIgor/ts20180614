import { menuData } from './menu-data'
import { menuList } from './type-defs'

function getMenuHtmlRec (menu: menuList): string {
  if (!menu.length) {
    return ''
  }

  const listItems = menu.reduce((html, menuItem) => {
    return `
            ${html}
            <li>
                ${menuItem.title}
                ${getMenuHtmlRec(menuItem.items || [])}
            </li>
        `
  }, '')

  return `<ul>${listItems}</ul>`
}

export function drawDeepMenu (): void {
  const ctnr = document.querySelector('.menu')
  const menuHtml = getMenuHtmlRec(menuData)

  if (ctnr) {
    ctnr.innerHTML = menuHtml
  }
}

/*
 * File: index.mjs
 * Project: oopy-custom-code
 * Created Date: 2022-07-24 04:53
 * Author: Chloekkk (skdusdl8804@gmail.com)
 * -----
 * Last Modified: 2022-08-08 04:26
 * Modified By: Chloekkk
 * -----
 * Copyright (c) 2022 Chloekkk
 */

export default function hideTranslate() {
  const notionTranslate = document.querySelector('div.notion-topbar');
  if (notionTranslate) {
    notionTranslate.nextSibling.nextSibling.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', hideTranslate);

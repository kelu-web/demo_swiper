/**
 * APP_UI    app界面控制
 * @param {string}  SHOW_PURSECARD                遮罩动画显示
**/
export const SHOW_PURSECARD = 'SHOW_PURSECARD'

export const APP_UI = {
    SHOW_PURSECARD: SHOW_PURSECARD,
}

export function pursecardFun(data) {
  return { type: SHOW_PURSECARD, data }
}




/**
 * APP_DATA    app界面控制
 * @param {object}  DATA_BASE                       数据库对象
**/
export const DATA_BASE = 'DATA_BASE'

export const APP_DATA = {
    DATA_BASE: DATA_BASE,
}

export function dataBaseFun(data) {
  return { type: DATA_BASE, data }
}
// lesson 2

/*
* 1. Перегрузка
*
* 2. Type guard  - when type string | number
*
* 3.  class E {
* x!:
*
* }
*
*4. singleton - private constructor
*
*
* 5. abstract class
* cc помощью abstract class можно сделать контракт на protected методы (с приватными не пройдет)
* для контракт на публичные методы используем interface.
*
* */

function isString = (str: string | number): str is string => {
    return typeof str === 'string'
    /* Если true тогда : str is string, тогда на выходе будет не просто true/false а
    * присвоение типа. То есть если true то str это будет строка
    * */
 }

 //4. Типизация контекста - полезно для колбеков чтобы зафикс контекст

function f(this: void, a: number) {
    
}
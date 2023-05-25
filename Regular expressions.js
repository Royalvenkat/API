// if we want to change or replace or sort the we can go with regular expressions

// If our string is capital and we want to search with small letters then below example:
// ex 1:

// Syntax /pattern/modifiers
// ex:-/searchname/i(i Stands for Case insensitive)
 let str ="Venkat Sai";
 let resu=str.search(/sai/i);
 console.log(resu);

//  oupput //It gives the Index value


// Example2:-
// If we want to replace the String
// let str="royal venkat";
// let resu=str.replace(/royal/i,'Siriguppa')
// console.log(resu);

// It replaces the string values
// i(i Stands for Case insensitive)
// Ig(Case insensitive globally)

// Examples3:
// If we want to chnage multiples in same string then we can go with globally

// let str="royal venkat royal royal";
// let resu=str.replace(/royal/ig,'Siriguppa')
// console.log(resu);


// Examples4:
// if we want to match the word in string
// let str="royal venkat royal royal";
// let resu=str.match(/royal/ig,'Siriguppa')
// console.log(resu);

// Examples5:
// if we want to search only time in string
// let str="venkat royal royal";
// let resu=str.match(/royal/i,)
// console.log(resu);

// // if we want to search only letter in string
// let str="venkat royal royal";
// let resu=str.match(/[al]/ig,)
// console.log(resu);
// // if we want to search specified one or more letter in string
// let str="venkat royal royal";
// let resu=str.match(/(a|za)/ig,)
// console.log(resu);
// if we want to search specified Numbers or alpha letter in string
// let str="venkat royal royal 88012a35761";
// let resu=str.match(/[0-9]/ig,)
// console.log(resu);

// // if we want to search specified Numbers or alpha letter in string
// let str="venkat royal royal 88012a35761";
// let resu=str.match(/\d/ig,)
// console.log(resu);

// if we want to search 2 specified Numbers or alpha letter in string
// let str="venkat royal royal 88012a35761";
// let resu=str.match(/61/ig,)
// console.log(resu);


// //to check spaces between string
// let str="venkat royal royal 88012a35761 yup";
// let resu=str.match(/\s/g,);
// console.log(resu);


// to know the beginning word is starting with same word or not
// let str="venkat royal royal 88012a35761 yup royal";
// let resu=str.match(/royal\b/gi,);
// console.log(resu);


// to know the beginning word is end with same word or not
// let str="venkat royal royal 88012a35761 yup";
// let resu=str.match(/\bvenkat/gi,);
// console.log(resu);

// to know the word is repating once or more in string

// 3 types +(once or more ); *(o or more); ?(Atleast once)
// let str="venkat royal royal 88012a35761 yup";
// let resu=str.match(/a+/gi,);
// console.log(resu);

// let str="venkat royal royal 88012a35761 yup";
// let resu=str.match(/a*/gi,);
// console.log(resu);

// let str="venkat royal royal 88012a35761 yup";
// let resu=str.match(/a?/gi,);
// console.log(resu);
// if we want to search except that word all should present
// let str="venkat royal royal 88012a35761 yup";
// let resu=str.match(/^yup/gi,);
// console.log(resu);

// if we want ti slice into 2parts
// let str="88012a35761 ";
// let resu=str.match(/\d{5}/gi,);
// console.log(resu);

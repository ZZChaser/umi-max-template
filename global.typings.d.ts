// https://github.com/umijs/umi/issues/9748
declare module 'crypto-js';

type valueOf<T> = T[keyof T];


/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface ProductsInput {
    title?: string;
    description?: string;
    price?: number;
}

export interface StoreInput {
    userID?: string;
    productID?: string;
    count?: number;
    limit?: number;
}

export interface UsersInput {
    username?: string;
    password?: string;
    orderCount?: number;
}

export interface File {
    filename: string;
    mimetype: string;
    encoding: string;
}

export interface Products {
    id: string;
    title: string;
    description: string;
    price: number;
}

export interface IQuery {
    showAllProducts(): Products[] | Promise<Products[]>;
    showAllStore(): Store[] | Promise<Store[]>;
    showAllUsers(): Users[] | Promise<Users[]>;
}

export interface IMutation {
    createProduct(product?: ProductsInput): Products | Promise<Products>;
    storeEntery(store?: StoreInput): Store | Promise<Store>;
    createUser(user?: UsersInput): Users | Promise<Users>;
    profileUpload(file: Upload): boolean | Promise<boolean>;
}

export interface ISubscription {
    productAdded(): string | Promise<string>;
}

export interface Store {
    id?: string;
    userID?: string;
    user?: Users;
    productID?: string;
    count?: number;
    limit?: number;
}

export interface Users {
    id?: string;
    username?: string;
    password?: string;
    orderCount?: number;
}

export type Upload = any;

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {type Product, products} from "../data/types/product.ts";

const mock = new MockAdapter(axios, {delayResponse: 300});

mock.onGet("/api/getListProduct").reply(200, {
    data: products,
});

mock.onGet(/\/api\/viewedProducts\/[^/]+/).reply((config) => {
    const match = config.url?.match(/\/api\/viewedProducts\/([^/]+)/);
    const userId = match?.[1];

    const key = `viewedProducts_${userId}`;
    const data = JSON.parse(localStorage.getItem(key) || "[]");

    return [200, {data}];
});


mock.onPost("/api/viewedProducts").reply((config) => {
    const {userId, product} = JSON.parse(config.data);
    const key = `viewedProducts_${userId}`;
    let data: Product[] = JSON.parse(localStorage.getItem(key) || "[]");

    const exists = data.some((p) => p.id === product.id);
    if (!exists) {
        data.push(product);
        if (data.length > 10) {
            data = data.slice(-10);
        }
        localStorage.setItem(key, JSON.stringify(data));
    }
    return [200, {success: true}];
});


mock.onGet(/\/api\/heartedProducts\/[^/]+/).reply((config) => {
    const match = config.url?.match(/\/api\/heartedProducts\/([^/]+)/);
    const userId = match?.[1];
    const heartedKey = `heartedProducts_${userId}`;
    const hearted: Product[] = JSON.parse(localStorage.getItem(heartedKey) || "[]");

    return [200, {data: hearted}];
});


mock.onPost("/api/heartedProducts").reply((config) => {
    const {userId, product} = JSON.parse(config.data);
    const key = `heartedProducts_${userId}`;

    const data: Product[] = JSON.parse(localStorage.getItem(key) || "[]");

    const exists = data.some((p) => p.id === product.id);
    if (!exists) {
        data.push(product);

        localStorage.setItem(key, JSON.stringify(data));
    }

    return [200, {success: true}];
});


mock.onGet(/\/api\/suggestions\?userId=.*/).reply((config) => {
    const url = new URL(config.url!, window.location.origin);
    const userId = url.searchParams.get("userId");

    const viewedKey = `viewedProducts_${userId}`;
    const heartedKey = `heartedProducts_${userId}`;

    const viewed: Product[] = JSON.parse(localStorage.getItem(viewedKey) || "[]");
    const hearted: Product[] = JSON.parse(localStorage.getItem(heartedKey) || "[]");

    const combinedMap = new Map<string, Product>();

    [...viewed, ...hearted].forEach((product) => {
        if (!combinedMap.has(product.id)) {
            combinedMap.set(product.id, product);
        }
    });

    const baseKeywords: string[] = [...combinedMap.values()]
        .flatMap((p) => p.name.toLowerCase().split(/\s+/))
        .filter((word, index, self) => word.length > 2 && self.indexOf(word) === index);

    const allProducts: Product[] = products;

    const suggestions = allProducts.filter((product) => {
        const name = product.name.toLowerCase();
        return baseKeywords.some((keyword) => name.includes(keyword));
    });

    return [200, {success: true, data: suggestions}];
});






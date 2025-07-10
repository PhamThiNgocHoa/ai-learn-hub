// mockApi.ts
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {type Product, products} from "../data/types/product.ts";

const mock = new MockAdapter(axios, {delayResponse: 300}); // delay cho giống thật

// Dữ liệu lưu theo từng user
const userViewedProducts: Record<string, Product[]> = {};
const userHeartedProducts: Record<string, Product[]> = {};

mock.onGet("/api/getListProduct").reply(200, {
    data: products,
});

mock.onGet(/\/api\/viewedProducts\/\d+/).reply((config) => {
    const userId = config.url?.split("/").pop() || "0";
    return [200, {data: userViewedProducts[userId] || []}];
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


mock.onGet(/\/api\/heartedProducts\/\d+/).reply((config) => {
    const userId = config.url?.split("/").pop() || "0";
    return [200, {data: userHeartedProducts[userId] || []}];
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
    const heartedKey = `heartedProducts`;

    const viewed = JSON.parse(localStorage.getItem(viewedKey) || "[]");
    const heartedAll = JSON.parse(localStorage.getItem(heartedKey) || "{}") as Record<string, Product[]>;
    const hearted = heartedAll[userId ?? ""] || [];

    const combinedMap = new Map<string, Product>();
    [...viewed, ...hearted].forEach((product: Product) => {
        if (!combinedMap.has(product.id)) {
            combinedMap.set(product.id, product);
        }
    });

    const suggestions = Array.from(combinedMap.values()).slice(0, 6);

    return [200, { success: true, data: suggestions }];
});





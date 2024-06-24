import { mount } from "@vue/test-utils";

import momentExample from "@/components/moment.vue";

import { describe, expect, test } from "vitest";

describe("moment.vue", () => {
    const dateString = '2024-06-05T01:02:03Z'; // 0 时区

    test("formatDate", () => {
        const wrapper = mount(momentExample, {});

        // 测试组件 methods 中的方法
        expect(wrapper.vm.formatDate(dateString)).toBe('2024-06-05 09:02::03');
    });

    test("fromNow", () => {
        const wrapper = mount(momentExample, {});
        expect(wrapper.vm.fromNow(dateString)).toBe('21 days ago');
    })

    test("add_days", () => {
        const wrapper = mount(momentExample, {});
        expect(wrapper.vm.add_days(dateString, 1)).toBe('2024-06-06 09:02::03');
    })

    test("subtract_hours", () => {
        const wrapper = mount(momentExample, {});
        expect(wrapper.vm.subtract_hours(dateString)).toBe('2024-06-05 09:02::03');
    })

    test("items", () => {
        const wrapper = mount(momentExample, {});
        // toStrictEqual() 用于检查两个值是否严格相等
        expect(wrapper.vm.items(dateString)).toStrictEqual([
            2024,
            5,
            3,
            9,
            2,
            3,
        ]);
    })

    test("utc", () => {
        const wrapper = mount(momentExample, {});
        expect(wrapper.vm.utc(dateString)).toBe('2024-06-05T01:02:03Z');
        expect(wrapper.vm.utc('2024-06-06 09:02::03')).toBe('Invalid date');
    })

    test("local", () => {
        const wrapper = mount(momentExample, {});
        expect(wrapper.vm.local(dateString)).toBe('2024-06-05T09:02:03+08:00');
    })

    test("isSameDay", () => {
        const wrapper = mount(momentExample, {});
        expect(wrapper.vm.isSameDay(dateString, '2024-06-05T10:02:03+08:00')).toBe(true);
    })

    test("isBefore", () => {
        const wrapper = mount(momentExample, {});
        expect(wrapper.vm.isBefore(dateString, '2024-06-05T10:02:03+08:00')).toBe(true);
    })

    test("isAfter", () => {
        const wrapper = mount(momentExample, {});
        expect(wrapper.vm.isAfter(dateString, '2024-06-05T10:02:03+08:00')).toBe(false);
    })
});
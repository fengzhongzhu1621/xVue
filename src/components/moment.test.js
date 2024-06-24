import { mount } from "@vue/test-utils";

import momentExample from "@/components/moment.vue";

import { describe, expect, test } from "vitest";

describe("moment.vue", () => {
    test("test formatDate", () => {
        const dateString = '2024-06-05T01:02:03Z';

        const wrapper = mount(momentExample, {});

        // 测试组件 methods 中的方法
        expect(wrapper.vm.formatDate(dateString)).toBe('2024-06-05 09:02::03');
    });
});
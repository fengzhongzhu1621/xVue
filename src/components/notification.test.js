/**
 * @vitest-environment happy-dom
 */
import { mount } from "@vue/test-utils";

import notification from "@/components/notification.vue";

import { describe, expect, test } from "vitest";
// 常见的 vitest 方法
// * describe：这个函数接受一个名字和一个函数，用于将相关的测试组合在一起。当你为一个有多个测试点（如逻辑和外观）的组件编写测试时，它就会很方便。
// * test/it：这个函数代表被测试的实际代码块。它接受一个字符串，通常是测试案例的名称或描述（例如，渲染成功的正确样式）和另一个函数，所有的检查和测试在这里进行。
// * expect： 这个函数用于测试值或创建断言。它接受一个预期为实际值（字符串、数字、对象等）的参数x，并使用任何支持的方法对其进行评估（例如toEqual(y)，检查 x 是否与 y 相同）。


describe("notification.vue", () => {
    test("renders the correct style for error", () => {
        const type = "error";
        // mount 接受组件作为第一个参数，接受一个选项列表作为第二个参数。这些选项提供了不同的属性，目的是确保你的组件能在浏览器中正常工作。
        const wrapper = mount(notification, {
            props: { type },
        });

        // classes() 函数来实现这一点，该函数返回包含该组件所有类的数组
        expect(wrapper.classes()).toEqual(
            // 检查一个数组是否包含指定的元素。它接受一个或多个参数，这些参数可以是单个元素或另一个数组。
            // 如果目标数组包含至少一个指定的元素，则该断言通过。
            expect.arrayContaining(["notification--error"])
        );
    });

    test("slides down when message is not empty", () => {
        const message = "success";
        const wrapper = mount(notification, {
            props: { message },
        });
        expect(wrapper.classes()).toEqual(
            expect.arrayContaining(["notification--slide"])
        );
    });

    test("slides up when message is empty", () => {
        const message = "";
        const wrapper = mount(notification, {
            props: { message },
        });
        // toBe() 检查测试值是否严格等于给定的期望值。这意味着它们必须是相同的数据类型和相同的值。
        expect(wrapper.classes("notification--slide")).toBe(false);
    });

    test("emits event when close button is clicked", async () => {
        const wrapper = mount(notification, {
            data() {
                return {
                    clicked: false,
                };
            },
        });
        // 模拟按钮点击，发送 clear-notification 事件
        const closeButton = wrapper.find("button");
        await closeButton.trigger("click");
        // wrapper.emitted() 获取所有发出的事件
        // 
        // toHaveProperty() 用于检查对象是否具有指定的属性。这个方法接受两个参数：属性路径和可选的期望值。
        // 如果对象具有指定的属性且属性值与期望值匹配（如果提供了期望值），则该断言通过。
        expect(wrapper.emitted()).toHaveProperty("clear-notification");
    });

    test("renders message when message is not empty", () => {
        const message = "Something happened, try again";
        const wrapper = mount(notification, {
            props: { message },
        });
        expect(wrapper.find("p").text()).toBe(message);
    });
});